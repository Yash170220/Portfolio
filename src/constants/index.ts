// Shared constants

export const SITE_CONFIG = {
  name: 'Yash Dusane',
  title: 'AI Engineer & Graduate Research Assistant',
  description: 'Interactive AI/ML Portfolio showcasing RAG systems and Generative AI',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yashdusane.dev',
  email: 'yash_dusane@csu.fullerton.edu',
  github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/yourusername',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/yourusername',
} as const

export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Education', href: '/education' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
] as const

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
} as const

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const


