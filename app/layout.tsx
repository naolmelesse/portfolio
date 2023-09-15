import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/footer'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Naol Melesse Portfolio',
  description: 'Made with 🖤 by Naol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
