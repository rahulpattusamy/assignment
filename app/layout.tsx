import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: 'ValoCoach Player Dashboard',
  description: 'Elite Valorant player statistics and match history tracking',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}