
import { Outfit } from 'next/font/google'

import './ui/globals.css'


const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300','400', '500', '600', '700', '800', '900'],
  style: ['normal'],
});

export const metadata = {
  title: 'Carlos Next.js Admin Dashboard',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
