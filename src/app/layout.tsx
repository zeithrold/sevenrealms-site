import Provider from './provider'
import { Noto_Sans_SC } from 'next/font/google'
import { Header } from '@/components/header'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  // title: 'Create Next App',
  description: '七域动漫协会是大连理工大学下属动漫交流社团，一起来玩！',
  applicationName: '七域动漫协会',
  authors: [
    {
      name: '七域动漫协会'
    }
  ],
  generator: "SevenField Engine",
  
}

const notoSans = Noto_Sans_SC({
  weight: ["400", "700", "100", "300", "900", "500"],
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={notoSans.className}>
        <Provider>
          <Header />
          {children}
        </Provider>
        <Analytics />
      </body>
    </html>
  )
}
