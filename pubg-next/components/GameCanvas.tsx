"use client";

import { useEffect, useRef, useState } from 'react';

type Vector = { x: number; y: number };

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hudRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);
  const [score, setScore] = useState(0);
  const [hp, setHp] = useState(100);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    const state = {
      width: 0,
      height: 0,
      ratio: Math.max(1, Math.min(2, window.devicePixelRatio || 1)),
      running: true,
      paused: false,
      cameraShakeMs: 0,
      cameraOffset: { x: 0, y: 0 },
      lastTs: 0,
      input: {
        keys: new Set<string>(),
        mouseDown: false,
        mouse: { x: 0, y: 0 },
        stick: { x: 0, y: 0 },
      },
      player: {
        pos: { x: 0, y: 0 },
        speed: 245,
        radius: 16,
        hp: 100,
        fireCdMs: 110,
        fireAccMs: 0,
      },
      bullets: [] as Array<{ pos: Vector; vel: Vector; radius: number; lifeMs: number; ageMs: number }>,
      enemies: [] as Array<{ pos: Vector; speed: number; radius: number; hp: number; touch: number }>,
      particles: [] as Array<{ pos: Vector; vel: Vector; lifeMs: number; ageMs: number; color: string }>,
      spawnAccMs: 0,
      spawnEveryMs: 1100,
      score: 0,
    };

    function resize() {
      state.width = Math.floor(window.innerWidth);
      state.height = Math.floor(window.innerHeight);
      const r = state.ratio;
      canvas.style.width = state.width + 'px';
      canvas.style.height = state.height + 'px';
      canvas.width = Math.floor(state.width * r);
      canvas.height = Math.floor(state.height * r);
      ctx.setTransform(r, 0, 0, r, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    function spawnEnemy() {
      const m = 50;
      const side = Math.floor(Math.random() * 4);
      let x = 0, y = 0;
      if (side === 0) { x = -m; y = Math.random() * state.height; }
      if (side === 1) { x = state.width + m; y = Math.random() * state.height; }
      if (side === 2) { x = Math.random() * state.width; y = -m; }
      if (side === 3) { x = Math.random() * state.width; y = state.height + m; }
      const speed = 85 + Math.random() * 55 + Math.min(120, state.score * 0.2);
      state.enemies.push({ pos: { x, y }, speed, radius: 16, hp: 35, touch: 22 });
    }

    function spawnBullet(origin: Vector, target: Vector) {
      const angle = Math.atan2(target.y - origin.y, target.x - origin.x);
      const speed = 560;
      const vel = { x: Math.cos(angle) * speed, y: Math.sin(angle) * speed };
      state.bullets.push({ pos: { ...origin }, vel, radius: 4, lifeMs: 900, ageMs: 0 });
      state.cameraShakeMs = 100;
      addMuzzleParticles(origin, angle);
    }

    function addMuzzleParticles(origin: Vector, angle: number) {
      for (let i = 0; i < 8; i++) {
        const a = angle + (Math.random() - 0.5) * 0.6;
        const s = 180 + Math.random() * 120;
        state.particles.push({
          pos: { x: origin.x, y: origin.y },
          vel: { x: Math.cos(a) * s, y: Math.sin(a) * s },
          lifeMs: 200 + Math.random() * 200,
          ageMs: 0,
          color: '#ffd166'
        });
      }
    }

    function addHitParticles(origin: Vector, baseColor = '#ff5d73') {
      for (let i = 0; i < 16; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = 120 + Math.random() * 180;
        state.particles.push({
          pos: { x: origin.x, y: origin.y },
          vel: { x: Math.cos(a) * s, y: Math.sin(a) * s },
          lifeMs: 400 + Math.random() * 300,
          ageMs: 0,
          color: baseColor
        });
      }
    }

    function clamp(v: number, min: number, max: number) { return Math.max(min, Math.min(max, v)); }
    function dist(a: Vector, b: Vector) { return Math.hypot(a.x - b.x, a.y - b.y); }

    function update(dt: number) {
      if (state.paused) return;

      // Movement
      let mx = 0, my = 0;
      if (state.input.keys.has('KeyW') || state.input.keys.has('ArrowUp')) my -= 1;
      if (state.input.keys.has('KeyS') || state.input.keys.has('ArrowDown')) my += 1;
      if (state.input.keys.has('KeyA') || state.input.keys.has('ArrowLeft')) mx -= 1;
      if (state.input.keys.has('KeyD') || state.input.keys.has('ArrowRight')) mx += 1;

      // Touch stick
      if (Math.abs(state.input.stick.x) > 0.1 || Math.abs(state.input.stick.y) > 0.1) {
        mx = state.input.stick.x; my = state.input.stick.y;
      }

      if (mx !== 0 || my !== 0) {
        const len = Math.hypot(mx, my) || 1; mx /= len; my /= len;
      }
      state.player.pos.x += mx * state.player.speed * dt;
      state.player.pos.y += my * state.player.speed * dt;
      state.player.pos.x = clamp(state.player.pos.x, state.player.radius, state.width - state.player.radius);
      state.player.pos.y = clamp(state.player.pos.y, state.player.radius, state.height - state.player.radius);

      // Shooting
      state.player.fireAccMs += dt * 1000;
      const wantShoot = state.input.mouseDown || state.input.keys.has('Space');
      if (wantShoot && state.player.fireAccMs >= state.player.fireCdMs) {
        state.player.fireAccMs = 0;
        spawnBullet(state.player.pos, state.input.mouse);
      }

      // Bullets
      for (const b of state.bullets) {
        b.pos.x += b.vel.x * dt;
        b.pos.y += b.vel.y * dt;
        b.ageMs += dt * 1000;
      }
      state.bullets = state.bullets.filter(b => b.ageMs < b.lifeMs);

      // Enemies chase
      for (const e of state.enemies) {
        const a = Math.atan2(state.player.pos.y - e.pos.y, state.player.pos.x - e.pos.x);
        e.pos.x += Math.cos(a) * e.speed * dt;
        e.pos.y += Math.sin(a) * e.speed * dt;
      }

      // Collisions
      for (const e of state.enemies) {
        for (const b of state.bullets) {
          if (dist(e.pos, b.pos) < e.radius + b.radius) {
            e.hp -= 30; b.ageMs = b.lifeMs;
            addHitParticles(b.pos);
            if (e.hp <= 0) {
              state.score += 10; setScore(s => s + 10);
              e.radius = 0;
            }
          }
        }
        if (e.radius > 0 && dist(e.pos, state.player.pos) < e.radius + state.player.radius) {
          state.player.hp = Math.max(0, state.player.hp - e.touch * dt);
          setHp(Math.ceil(state.player.hp));
          state.cameraShakeMs = Math.max(state.cameraShakeMs, 120);
        }
      }
      state.enemies = state.enemies.filter(e => e.radius > 0 && e.hp > 0);

      // Spawning/difficulty
      state.spawnAccMs += dt * 1000;
      const factor = 1 + Math.min(1.5, state.score / 300);
      if (state.spawnAccMs > state.spawnEveryMs / factor) {
        state.spawnAccMs = 0; spawnEnemy();
      }

      // Camera shake
      if (state.cameraShakeMs > 0) {
        state.cameraShakeMs -= dt * 1000;
        state.cameraOffset.x = (Math.random() - 0.5) * 8;
        state.cameraOffset.y = (Math.random() - 0.5) * 8;
      } else {
        state.cameraOffset.x = 0; state.cameraOffset.y = 0;
      }

      if (state.player.hp <= 0) {
        state.running = false;
      }
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Backdrop: vignette + grid
      const w = state.width, h = state.height;
      const grd = ctx.createLinearGradient(0, 0, 0, h);
      grd.addColorStop(0, '#0e0f13');
      grd.addColorStop(1, '#0a0c10');
      ctx.fillStyle = grd; ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.globalAlpha = 0.25;
      ctx.strokeStyle = '#1b2030';
      const grid = 48;
      for (let x = (state.cameraOffset.x % grid + grid) % grid; x < w; x += grid) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = (state.cameraOffset.y % grid + grid) % grid; y < h; y += grid) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
      ctx.restore();

      ctx.save();
      ctx.translate(state.cameraOffset.x, state.cameraOffset.y);

      // Particles
      for (const p of state.particles) {
        p.ageMs += 16; // approximate for rendering smoothness
        const t = 1 - p.ageMs / p.lifeMs;
        if (t <= 0) continue;
        ctx.globalAlpha = Math.max(0, t);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.pos.x, p.pos.y, 2 + 3 * t, 0, Math.PI * 2);
        ctx.fill();
        p.pos.x += p.vel.x * 0.016;
        p.pos.y += p.vel.y * 0.016;
      }
      state.particles = state.particles.filter(p => p.ageMs < p.lifeMs);

      // Bullets
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#ffd166';
      for (const b of state.bullets) {
        ctx.beginPath();
        ctx.arc(b.pos.x, b.pos.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Enemies
      for (const e of state.enemies) {
        const grad = ctx.createRadialGradient(e.pos.x, e.pos.y, 2, e.pos.x, e.pos.y, e.radius);
        grad.addColorStop(0, '#ff8899');
        grad.addColorStop(1, '#ff5d73');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(e.pos.x, e.pos.y, e.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Player
      {
        const p = state.player.pos;
        const grad = ctx.createRadialGradient(p.x, p.y, 2, p.x, p.y, state.player.radius);
        grad.addColorStop(0, '#6ff2d5');
        grad.addColorStop(1, '#2ed3aa');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, state.player.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      // HUD overlay text
      ctx.fillStyle = '#e8eef6';
      ctx.font = '600 16px system-ui, Segoe UI, Roboto';
      ctx.fillText(`HP: ${Math.ceil(state.player.hp)}`, 16, 28);
      ctx.fillText(`Score: ${state.score}`, w - 120, 28);
    }

    function loop(ts: number) {
      if (!state.running) return;
      const dt = Math.min(0.033, (ts - state.lastTs) / 1000 || 0.016);
      state.lastTs = ts;
      update(dt);
      render();
      requestAnimationFrame(loop);
    }

    // Input bindings
    function onKeyDown(e: KeyboardEvent) {
      if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code)) e.preventDefault();
      if (e.code === 'KeyP') {
        state.paused = !state.paused;
        setPaused(state.paused);
        return;
      }
      state.input.keys.add(e.code);
    }
    function onKeyUp(e: KeyboardEvent) { state.input.keys.delete(e.code); }
    function onMouseDown() { state.input.mouseDown = true; }
    function onMouseUp() { state.input.mouseDown = false; }
    function onMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      state.input.mouse.x = e.clientX - rect.left;
      state.input.mouse.y = e.clientY - rect.top;
    }

    // Simple on-screen stick for mobile
    const stick = document.createElement('div');
    stick.style.position = 'fixed';
    stick.style.left = '16px';
    stick.style.bottom = '16px';
    stick.style.width = '120px';
    stick.style.height = '120px';
    stick.style.borderRadius = '60px';
    stick.style.background = 'rgba(255,255,255,0.06)';
    stick.style.border = '1px solid rgba(255,255,255,0.12)';
    stick.style.touchAction = 'none';
    const knob = document.createElement('div');
    knob.style.position = 'absolute';
    knob.style.left = '40px';
    knob.style.top = '40px';
    knob.style.width = '40px';
    knob.style.height = '40px';
    knob.style.borderRadius = '20px';
    knob.style.background = '#00e7a7';
    knob.style.opacity = '0.7';
    stick.appendChild(knob);
    document.body.appendChild(stick);

    let dragging = false;
    let startX = 0, startY = 0;
    function pointerDown(e: PointerEvent) {
      dragging = true; startX = e.clientX; startY = e.clientY; stick.setPointerCapture(e.pointerId);
    }
    function pointerMove(e: PointerEvent) {
      if (!dragging) return;
      const dx = e.clientX - startX; const dy = e.clientY - startY;
      const max = 40;
      const len = Math.hypot(dx, dy) || 1; const cl = Math.min(max, len);
      const nx = dx / len; const ny = dy / len;
      knob.style.left = 40 + nx * cl + 'px';
      knob.style.top = 40 + ny * cl + 'px';
      state.input.stick.x = (cl / max) * nx;
      state.input.stick.y = (cl / max) * ny;
    }
    function pointerUp(e: PointerEvent) {
      dragging = false; stick.releasePointerCapture(e.pointerId);
      knob.style.left = '40px'; knob.style.top = '40px';
      state.input.stick.x = 0; state.input.stick.y = 0;
    }

    stick.addEventListener('pointerdown', pointerDown);
    stick.addEventListener('pointermove', pointerMove);
    stick.addEventListener('pointerup', pointerUp);
    stick.addEventListener('pointercancel', pointerUp);

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);

    // Initialize
    state.player.pos.x = window.innerWidth / 2;
    state.player.pos.y = window.innerHeight / 2;
    setHp(100); setScore(0);
    requestAnimationFrame(loop);

    return () => {
      state.running = false;
      window.removeEventListener('resize', resize);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mousedown', onMouseDown);
      document.body.removeChild(stick);
    };
  }, []);

  return (
    <div ref={hudRef} className="game-shell">
      <canvas ref={canvasRef} className="game-canvas" />
      <div className="top-hud">
        <div className="left">HP: {hp}</div>
        <div className="right">Score: {score} <button onClick={() => setPaused(p => !p)} className="btn secondary">{paused ? 'Resume' : 'Pause'}</button></div>
      </div>
      <style jsx>{`
        .game-shell { position: fixed; inset: 0; }
        .game-canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
        .top-hud { position: absolute; top: 12px; left: 0; right: 0; display: flex; justify-content: space-between; padding: 0 16px; font-weight: 700; color: #e8eef6; text-shadow: 0 1px 0 rgba(0,0,0,.6); }
        .btn { appearance: none; border: 0; border-radius: 10px; padding: 8px 12px; background: #00e7a7; color: #041b15; font-weight: 800; cursor: pointer; }
        .btn.secondary { background: transparent; color: #e8eef6; border: 1px solid rgba(255,255,255,.2); }
        .landing, .game-root { min-height: 100dvh; display: grid; place-items: center; background: radial-gradient(1200px 1200px at 50% -10%, #1b2130, #0e0f13); color: #e8eef6; }
        .card { background: linear-gradient(180deg, #1a1f2b, #111520); border: 1px solid rgba(255,255,255,.06); border-radius: 14px; padding: 28px 24px; width: min(520px, calc(100vw - 32px)); box-shadow: 0 30px 80px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.03); }
        .actions { display: flex; gap: 10px; }
      `}</style>
    </div>
  );
}



