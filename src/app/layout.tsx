import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DecentraLottery',
  description: 'A web3 dApp for decentralized lottery',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-light-bg to-light-secondary dark:from-dark-bg dark:to-dark-secondary">
          <Providers>{children}</Providers>
          <Toaster position="bottom-center" />
        </div>
      </body>
    </html>
  );
}
