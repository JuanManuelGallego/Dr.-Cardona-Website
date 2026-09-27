import './globals.css'
import { Anek_Gurmukhi, Fraunces } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { defaultMetadata } from '@/lib/seo'
import { Analytics } from "@vercel/analytics/next";

const anek = Anek_Gurmukhi({
  subsets: [ 'latin' ],
  variable: '--font-anek',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: [ 'latin' ],
  variable: '--font-fraunces',
  display: 'swap',
  axes: [ 'opsz' ],
})

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${anek.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
