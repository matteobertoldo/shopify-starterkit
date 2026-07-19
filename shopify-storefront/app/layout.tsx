import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Shopify Starterkit',
  description: 'Demo Shopify Storefront built with Next.js and TypeScript',
  openGraph: {
    title: 'Shopify Starterkit',
    description: 'Demo Shopify Storefront built with Next.js and TypeScript',
    url: 'https://shopify-starterkit.vercel.app',
    siteName: 'Shopify Starterkit',
    images: [
      {
        url: 'https://shopify-starterkit.vercel.app/og-image.png',
        width: 1200,
        height: 630
      }
    ]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
