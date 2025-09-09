import GameCanvas from '@/components/GameCanvas';

export const dynamic = 'force-static';

export default function GamePage() {
  return (
    <main className="game-root">
      <GameCanvas />
    </main>
  );
}



