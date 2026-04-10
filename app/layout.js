import { Manrope } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata = {
  title: {
    default: 'YDC Academy | Đào Tạo Nghiệp Vụ Đấu Thầu',
    template: '%s | YDC Academy',
  },
  description:
    'YDC Academy — Trung tâm đào tạo chứng chỉ đấu thầu hàng đầu. Giảng viên từ Cục Đấu thầu, hơn 100+ tổ chức tin chọn.',
  keywords: ['đào tạo đấu thầu', 'chứng chỉ đấu thầu', 'YDC Academy', 'luyện thi đấu thầu'],
  openGraph: {
    title: 'YDC Academy | Đào Tạo Nghiệp Vụ Đấu Thầu',
    description: 'Nâng cao năng lực đấu thầu cho tổ chức của bạn',
    locale: 'vi_VN',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={manrope.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
