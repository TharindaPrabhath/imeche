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
  keywords: ['IMechE', 'UoM', 'University of Moratuwa', 'Mechanical Engineering', 'Student Chapter'],
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://imeche.uom.lk',
    siteName: 'IMechE Student Chapter of UoM',
    images: [
      {
        url: 'https://res.cloudinary.com/drifly/image/upload/v1739885103/IMechE_atjivb.jpg',
        width: 1200,
        height: 630,
        alt: 'IMechE Student Chapter of UoM'
      }
    ]
  },
  twitter: {
    site: '@imeche_uom',
    images: ['https://res.cloudinary.com/drifly/image/upload/v1739885103/IMechE_atjivb.jpg']
  },
  authors: [
    {
      name: 'Tharinda Anurajeewa',
      url: 'https://www.linkedin.com/in/tharinda-anurajeewa'
    }
  ],
  creator: 'Tharinda Anurajeewa',
  publisher: 'IMechE Student Chapter of UoM',
  category: 'Engineering',
  abstract: 'The Institution of Mechanical Engineers Student Chapter of the University of Moratuwa',
  metadataBase: new URL('https://imeche.uom.lk'),
  bookmarks: ['https://imeche.uom.lk'],
  manifest: '/site.webmanifest'
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
        <Footer />
      </body>
    </html>
  );
}
