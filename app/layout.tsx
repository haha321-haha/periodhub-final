import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  title: 'Period Hub - 经期健康管理平台',
  description: '专业的经期健康管理平台，为每位女性提供科学指导和贴心支持',
  keywords: ['经期健康', '月经管理', '女性健康', '痛经缓解', '健康教育'],
  authors: [{ name: 'Period Hub Team' }],
  creator: 'Period Hub',
  publisher: 'Period Hub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Period Hub - 经期健康管理平台',
    description: '专业的经期健康管理平台，为每位女性提供科学指导和贴心支持',
    url: '/',
    siteName: 'Period Hub',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Period Hub - 经期健康管理平台',
    description: '专业的经期健康管理平台，为每位女性提供科学指导和贴心支持',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}
