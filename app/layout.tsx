// app/layout.tsx

import React from 'react';
import '@/app/global.css';
import SessionProviderClient from '@/app/components/SessionProviderClient';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard | @referenciales.cl',
    default: 'referenciales.cl Dashboard',
  },
  description: 'Base de datos colaborativa.',
  metadataBase: new URL('https://next14-postgres.vercel.app/'),
  authors: [{ name: 'referenciales.cl', url: 'https://www.referenciales.cl/' }],
  keywords: ['Next.js 14', 'referenciales.cl', 'Dashboard', 'nextjs.org/learn', 'Server Actions'],
  openGraph: {
    title: 'referenciales.cl Dashboard',
    description: 'Base de datos colaborativa.',
    url: 'https://next14-postgres.vercel.app/',
    type: 'website',
  },
  twitter: {
    site: '@referenciales.cl',
    description: 'Base de datos colaborativa.',
    title: 'referenciales.cl Dashboard',
    creator: '@referenciales.cl',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/_next/static/media/c556ae4be4c9cfa8-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/ebd7dc65a6ba3e83-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/a34f9d1faa5f3315-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <SessionProviderClient>{children}</SessionProviderClient>
      </body>
    </html>
  );
}