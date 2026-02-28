'use client'

import type { FC, PropsWithChildren } from 'react'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '@/theme'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
})

const RootLayout: FC<PropsWithChildren> = props => {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
