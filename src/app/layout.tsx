import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Fira_Code } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import PortfolioChatbot from '@/components/layout/PortfolioChatbot'
import EnhancedCodeRain from '@/components/backgrounds/EnhancedCodeRain'
import CustomCursor from '@/components/layout/CustomCursor'
import EasterEggs from '@/components/layout/EasterEggs'


const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-heading',
  display: 'swap'
})

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  variable: '--font-code',
  display: 'swap',
  weight: ['300', '400', '500']
})

export const metadata: Metadata = {
  title: {
    default: 'Yash Dusane - AI Engineer & Graduate Research Assistant',
    template: '%s | Yash Dusane'
  },
  description: 'Portfolio of Yash Dusane - Graduate Research Assistant at CSUF specializing in AI/ML, RAG systems, and Generative AI. Building intelligent systems with LangChain, PyTorch, and modern cloud technologies.',
  keywords: [
    'Yash Dusane',
    'AI Engineer',
    'Machine Learning',
    'RAG Systems',
    'Generative AI',
    'LangChain',
    'PyTorch',
    'CSUF',
    'Graduate Research Assistant',
    'Full Stack Developer'
  ],
  authors: [{ name: 'Yash Dusane', url: 'mailto:yash_dusane@csu.fullerton.edu' }],
  creator: 'Yash Dusane',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yashdusane.dev',
    siteName: 'Yash Dusane Portfolio',
    title: 'Yash Dusane - AI Engineer & Graduate Research Assistant',
    description: 'Interactive AI/ML Portfolio showcasing RAG systems and Generative AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yash Dusane Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yash Dusane - AI Engineer & Graduate Research Assistant',
    description: 'Interactive AI/ML Portfolio showcasing RAG systems and Generative AI',
    creator: '@yourtwitterhandle',
    images: ['/og-image.png'],
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
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable}`}>
      <body className={`custom-cursor ${inter.className}`}>
        <div className="neural-grid min-h-screen">
          <CustomCursor />
          <Navigation />
          <EnhancedCodeRain />
          {children}
          <PortfolioChatbot />
          <EasterEggs />
        </div>
      </body>
    </html>
  )
}