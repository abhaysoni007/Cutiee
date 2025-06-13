import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'A Special Surprise For You 💝',
  description: 'A magical journey of love and romance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-romantic-pink via-soft-violet to-cream min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 