'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Briefcase, User, Mail } from 'lucide-react'

const quickLinks = [
  {
    label: 'View Projects',
    href: '/projects',
    icon: Code,
    color: 'from-ai-blue to-ai-purple',
    description: 'Explore my AI/ML projects'
  },
  {
    label: 'My Experience',
    href: '/experience',
    icon: Briefcase,
    color: 'from-ai-purple to-ai-green',
    description: 'Professional journey'
  },
  {
    label: 'Get In Touch',
    href: '/contact',
    icon: Mail,
    color: 'from-ai-blue to-cyan-500',
    description: 'Let\'s connect'
  }
]

export default function QuickActions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mx-auto">
      {quickLinks.map((link, index) => {
        const Icon = link.icon
        return (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <Link
              href={link.href}
              className="group relative block p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
              
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${link.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-accent-rag transition-colors">
                  {link.label}
                </h3>
                
                <p className="text-sm text-gray-400 mb-3">
                  {link.description}
                </p>
                
                <div className="flex items-center text-sm text-accent-rag group-hover:translate-x-1 transition-transform duration-300">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}


