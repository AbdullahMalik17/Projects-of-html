import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PUBG-Lite Pro',
  description: 'A professional PUBG-like browser game built with Next.js and Canvas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}



