import './globals.css'
import Footer from './components/footer'


export const metadata = {
  title: 'Sunrise Hotels',
  description: 'Home away from home',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-montserrat">{children}</body>
      <Footer />
    </html>
  )
}
