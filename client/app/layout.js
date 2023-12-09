import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ContextProvider } from './context/context';

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600']})

export const metadata = {
  title: 'zXDAO',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className={poppins.className}>
          {children}
        </body>
      </ContextProvider>
    </html>
  )
}
