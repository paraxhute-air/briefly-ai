import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { BookmarkProvider } from '@/context/BookmarkContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'briefly-ai - AI 시대의 필수 정보',
  description: '한 눈에 보는 AI 뉴스, 활용법, 교육 프로그램',
  keywords: 'AI, 인공지능, 뉴스, 교육, 활용법',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Providers>
          <BookmarkProvider>
            <Navbar />
            <main className="page-wrapper">
              {children}
            </main>
            <Footer />
          </BookmarkProvider>
        </Providers>
      </body>
    </html>
  );
}
