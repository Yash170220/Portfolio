import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0a0a0a',
        'secondary-bg': '#1a1a2e',
        'accent-rag': '#00ffff',
        'accent-code': '#8b5cf6',
        'accent-cloud': '#0080ff',
        'accent-success': '#00ff00',
        'text-primary': '#e0e0e0',
        'grid-subtle': '#ffffff08',
        'ai-blue': '#00ffff',
        'ai-purple': '#8b5cf6',
        'ai-green': '#00ff00',
        'neural': '#1E293B',
      },
      fontFamily: {
        'heading': ['Space Grotesk', 'Orbitron', 'sans-serif'],
        'body': ['Inter', 'DM Sans', 'sans-serif'],
        'code': ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'ripple': 'ripple 0.6s linear',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 255, 255, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
export default config