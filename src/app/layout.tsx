import type { FC, PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '777',
  description:
    'Casino platform: slots, table games, live dealers. Licensed, secure, responsible gaming.',
}

const RootLayout: FC<PropsWithChildren> = props => {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable}`}>{props.children}</body>
    </html>
  )
}

export default RootLayout
