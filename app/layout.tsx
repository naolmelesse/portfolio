import './globals.css';
import { Inter } from 'next/font/google';
import Footer from './components/footer';
import Nav from './components/Nav';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Naol Melesse',
  description: 'Crafted with 🖤 by Naol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-DPLWVZ7LV8" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-DPLWVZ7LV8');
        `}
      </Script>
    </head>
    <body className={inter.className}>
        <Nav/>
        {children}
        <Footer/>
    </body>
    </html>
  )
}
