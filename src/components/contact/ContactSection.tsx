'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react'


const contactInfo = [
  { icon: Mail, label: 'Email', value: 'yash_dusane@csu.fullerton.edu', href: 'mailto:yash_dusane@csu.fullerton.edu' },
  { icon: Phone, label: 'Phone', value: '+1-657-445-7419', href: 'tel:+16574457419' },
  { icon: Linkedin, label: 'LinkedIn', value: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/yashrd/' },
  { icon: Github, label: 'GitHub', value: 'GitHub Profile', href: 'https://github.com/Yash170220' }
]

export default function ContactSection() {

  return (
    <div className="relative z-10 min-h-screen px-4 py-20 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-accent-rag to-accent-code bg-clip-text text-transparent"
          >
            Initialize Connection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-text-primary max-w-3xl mx-auto"
          >
            Ready to deploy the next generation of AI solutions? Let's establish a secure connection.
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold font-heading text-white mb-6">Contact Protocols</h2>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 glassmorphism rounded-xl hover:glow-cyan transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-rag to-accent-code rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{contact.label}</div>
                      <div className="text-white font-semibold">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="p-6 glassmorphism rounded-xl border-accent-success/30"
            >
              <h3 className="text-xl font-bold font-heading text-white mb-4">Professional Resume</h3>
              <p className="text-gray-400 mb-4">Download comprehensive model parameters and training history</p>
              <motion.a
                href="/Yash_Resume.pdf"
                download="Yash_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-accent-success to-accent-rag text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-3 transition-transform"
              >
                <Download className="w-5 h-5" />
                Download Neural Weights (Resume)
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}