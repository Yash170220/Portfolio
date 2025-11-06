'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TerminalTypingProps {
  onComplete: () => void
}

export default function TerminalTyping({ onComplete }: TerminalTypingProps) {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  
  const fullText = 'Initializing Agentic AI System...'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        setTimeout(onComplete, 500)
      }
    }, 100)

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-mono text-2xl md:text-3xl text-ai-green bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-ai-green/30"
    >
      <span className="text-ai-green">&gt; </span>
      {text}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
    </motion.div>
  )
}