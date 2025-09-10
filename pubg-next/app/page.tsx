import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="landing">
      <div className="card">
        <h1>PUBG‑Lite Pro</h1>
        <p>Professional top‑down action, inspired by PUBG. Built with Next.js.</p>
        <ul className="instructions">
          <li><b>Move</b>: WASD or Arrows</li>
          <li><b>Shoot</b>: Click or Space</li>
          <li><b>Pause</b>: P</li>
        </ul>
        <div className="actions">
          <Link href="/game" className="btn">Start Game</Link>
          <a href="https://nextjs.org" className="btn secondary" target="_blank" rel="noreferrer">About Next.js</a>
        </div>
      </div>
    </main>
  );
}





