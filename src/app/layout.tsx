import type { Metadata } from 'next';
import { IBM_Plex_Sans, Syne } from 'next/font/google';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import './globals.css';

const ibm = IBM_Plex_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alfakit.by'),
  icons: { icon: '/assets/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ibm.variable} ${syne.variable}`}>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
