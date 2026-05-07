import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Aquiles Indumentaria | Camisetas de Fútbol Premium',
  description: 'Descubre camisetas de fútbol premium que celebran la cultura del fútbol argentino. Selección Argentina, Boca Juniors, River Plate, clubes europeos y colecciones retro icónicas.',
  keywords: ['camisetas de fútbol', 'Aquiles Indumentaria', 'Tucumán', 'Argentina', 'Boca Juniors', 'River Plate', 'soccer', 'camisetas', 'futbol'],
  alternates: {
    languages: {
      'es-AR': '/',
      'es': '/',
    },
  },
  openGraph: {
    title: 'Aquiles Indumentaria | Camisetas de Fútbol Premium',
    description: 'Descubre camisetas de fútbol premium que celebran la cultura del fútbol argentino.',
    url: 'https://aquilesindumentaria.com.ar',
    siteName: 'Aquiles Indumentaria',
    images: [
      {
        url: '/icon-light-32x32.png',
        width: 800,
        height: 600,
        alt: 'Aquiles Indumentaria Logo',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aquiles Indumentaria | Camisetas de Fútbol Premium',
    description: 'Descubre camisetas de fútbol premium que celebran la cultura del fútbol argentino.',
    images: ['/icon-light-32x32.png'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#141414',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
