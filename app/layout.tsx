import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = { title: 'CartTrust.io', description: 'KI-gestützte Gebrauchtwagen-Bewertungen' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, Arial' }}>
        {children}
      </body>
    </html>
  );
}
