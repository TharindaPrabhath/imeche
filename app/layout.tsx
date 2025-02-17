import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'IMechE Student Chapter of UoM',
  description: 'The Institution of Mechanical Engineers Student Chapter of the University of Moratuwa',
  keywords: ['IMechE', 'UoM', 'University of Moratuwa', 'Mechanical Engineering', 'Student Chapter']
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} flex min-h-screen flex-col antialiased`}>
        <Header />
        <main className='h-full'>{children}</main>
        <Footer className='' />
      </body>
    </html>
  );
}
