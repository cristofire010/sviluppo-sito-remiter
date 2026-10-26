import type { Metadata, Viewport } from 'next'
import { CookieBanner } from '@/components/site/cookie-banner'
import { Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { IntroScreen } from '@/components/site/intro-screen'
import { RevealObserver } from '@/components/site/reveal-observer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: {
    default: 'REMITER S.A.S. | Movimento terra, demolizioni e costruzioni',
    template: '%s | REMITER S.A.S.',
  },
  description:
    'REMITER S.A.S. — impresa edile a Francavilla al Mare (CH): movimento terra, demolizioni, costruzioni, gestione appalti, noleggio mezzi, trasporti e agricoltura.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'REMITER S.A.S. — Movimento terra, demolizioni e costruzioni',
    description:
      'Impresa edile a Francavilla al Mare (CH): movimento terra, demolizioni, costruzioni, gestione appalti, noleggio mezzi, trasporti e agricoltura.',
    images: ['/remiter-head.png'],
    siteName: 'REMITER S.A.S.',
    locale: 'it_IT',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#090909',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${inter.variable} bg-background`}>
      <body className="font-sans">
        {/* Sito realizzato da Andrea D'Ettorre */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Vai al contenuto
        </a>
        {/* <IntroScreen /> */}
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <RevealObserver />
        <CookieBanner />
      </body>
    </html>
  )
}
