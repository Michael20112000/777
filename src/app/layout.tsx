import type { FC, PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
  title: '777',
  description:
    'Casino platform: slots, table games, live dealers. Licensed, secure, responsible gaming.',
}

const RootLayout: FC<PropsWithChildren> = props => {
  return (
    <html lang='en'>
      <body className={roboto.className}>{props.children}</body>
    </html>
  )
}

export default RootLayout
