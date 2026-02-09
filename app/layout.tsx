'use client'

import './css/style.css'

import { Inter, Oswald } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import '@/assets/scss/index.scss'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TCQRM28S6Y" />
        <Script id="google-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-TCQRM28S6Y');`}
        </Script>
      </head>
      <body>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
