'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TerminalTyping from './TerminalTyping'
import QuickActions from './QuickActions'

import CareerPipeline from './CareerPipeline'

export default function SystemInitialization() {
  const [initComplete, setInitComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setInitComplete(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12">
      <div className="max-w-5xl mx-auto w-full text-center space-y-10 md:space-y-12">
        {/* Terminal Typing - First */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="flex justify-center"
        >
          <TerminalTyping onComplete={() => setInitComplete(true)} />
        </motion.div>
        
        {/* Name - Second */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: initComplete ? 1 : 0, scale: initComplete ? 1 : 0.8, y: initComplete ? 0 : 20 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading bg-gradient-to-r from-accent-rag via-accent-code to-accent-rag bg-clip-text text-transparent leading-tight"
        >
          YASH DUSANE
        </motion.h1>

        {/* Subtitle - Third */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: initComplete ? 1 : 0, y: initComplete ? 0 : 20 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-mono px-4"
        >
          AI | Machine Learning | Web Dev | Building Intelligent Systems
        </motion.p>

        {/* Tech Orbit - Fourth */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: initComplete ? 1 : 0, scale: initComplete ? 1 : 0.9 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="my-8 md:my-12"
        >
          <CareerPipeline />
        </motion.div>

        {/* Quick Actions - Fifth */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: initComplete ? 1 : 0, y: initComplete ? 0 : 30 }}
          transition={{ delay: 4.5, duration: 0.8 }}
          className="mt-8 md:mt-12"
        >
          <QuickActions />
        </motion.div>
      </div>
    </div>
  )
}