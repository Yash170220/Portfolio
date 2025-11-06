'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Coffee, Calendar } from 'lucide-react'

const socialLinks = [
  { 
    icon: Github, 
    href: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/Yash170220', 
    label: 'GitHub',
    ariaLabel: 'Visit my GitHub profile'
  },
  { 
    icon: Linkedin, 
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/yashrd/', 
    label: 'LinkedIn',
    ariaLabel: 'Visit my LinkedIn profile'
  },
  { 
    icon: Mail, 
    href: 'mailto:yash_dusane@csu.fullerton.edu', 
    label: 'Email',
    ariaLabel: 'Send me an email'
  }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })

  return (
    <footer className="relative z-10 border-t border-white/10 bg-secondary-bg/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400 flex items-center justify-center md:justify-start gap-2">
              Built with Next.js, React, Three.js, and excessive caffeine 
              <Coffee className="w-8 h-8 text-yellow-400" />
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.ariaLabel}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-r from-accent-rag to-accent-code rounded-full flex items-center justify-center hover:glow-cyan transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-rag focus:ring-offset-2 focus:ring-offset-primary-bg"
              >
                <social.icon className="w-5 h-5 text-white" aria-hidden="true" />
              </motion.a>
            ))}
          </motion.div>

          {/* Deployment Info */}
        
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500">
            © {currentYear} Yash Dusane. All neural networks reserved.
          </p>
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent-rag rounded-full opacity-20"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${50 + (i % 2) * 20}%`
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}