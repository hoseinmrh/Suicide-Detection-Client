import type { Metadata } from 'next'
import './globals.css'
import { Jost } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Suicide Detection',
  description: 'Suicide Detection From User Input',
}




const jost = Jost({
  weight: ['400', '600', '800'],
  subsets: ['latin']
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  )
}
