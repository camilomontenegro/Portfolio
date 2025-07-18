import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Retro Portfolio | Camilo Montenegro',
  description: 'A retro-style portfolio showcasing my projects',
  keywords: 'portfolio, developer, retro, projects, web development',
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="crt-effect">
        {children}
      </body>
    </html>
  )
}