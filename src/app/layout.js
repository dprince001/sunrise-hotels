"use client"
import './globals.css'
import { useEffect } from 'react';
import Footer from './components/footer'
import { usePathname } from 'next/navigation';


export const metadata = {
  title: 'Sunrise Hotels',
  description: 'Home away from home',
}

export default function RootLayout({ children }) {

  const pathname = usePathname();

  useEffect(() => {
    document.scrollingElement?.scroll(0, 0);
    window.scrollTo(0,0)
  }, [pathname]);

  console.log(pathname)

  return (
    <html lang="en">
      <body className="font-montserrat">{children}</body>
      <Footer />
    </html>
  )
}
