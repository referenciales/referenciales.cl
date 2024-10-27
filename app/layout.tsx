// app/layout.tsx

import React from 'react';
import '@/app/globals.css'; 
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

// Leer el contenido del archivo critical.css
const criticalCSS = fs.readFileSync(
  path.resolve(__dirname, '../public/critical.css'),
  'utf8'
);

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}