'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EasterEggs() {
  const [showSecret, setShowSecret] = useState(false)
  const [konamiSequence, setKonamiSequence] = useState<string[]>([])
  
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']

  useEffect(() => {
    // Console Easter Egg
    const originalLog = console.log
    console.log = (...args) => {
      if (args[0] === 'sudo') {
        console.clear()
        console.log('%c🤖 SYSTEM ACCESS GRANTED 🤖', 'color: #00ffff; font-size: 20px; font-weight: bold;')
        console.log('%cWelcome to Yash\'s Neural Network!', 'color: #8b5cf6; font-size: 16px;')
        console.log('%c> Initializing AI Portfolio System...', 'color: #00ff00; font-family: monospace;')
        console.log('%c> Loading RAG Pipeline... ✓', 'color: #00ff00; font-family: monospace;')
        console.log('%c> Connecting to LangChain... ✓', 'color: #00ff00; font-family: monospace;')
        console.log('%c> System Ready! 🚀', 'color: #00ffff; font-family: monospace; font-weight: bold;')
        return
      }
      originalLog.apply(console, args)
    }

    // Konami Code Detection
    const handleKeyDown = (e: KeyboardEvent) => {
      setKonamiSequence(prev => {
        const newSequence = [...prev, e.code].slice(-konamiCode.length)
        
        if (newSequence.length === konamiCode.length && 
            newSequence.every((key, index) => key === konamiCode[index])) {
          setShowSecret(true)
          setTimeout(() => setShowSecret(false), 5000)
          return []
        }
        
        return newSequence
      })
    }

    // Neural Network Node Click Handler
    const handleNodeClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.classList.contains('neural-node') || target.closest('.neural-node')) {
        const facts = [
          "🧠 This portfolio processes over 1000+ documents using RAG!",
          "⚡ LangChain powers the conversational AI system!",
          "🔮 The neural particles react to your mouse movement!",
          "🚀 Built with Next.js 14 and cutting-edge AI tech!",
          "💡 Each section uses different AI visualization techniques!"
        ]
        
        const randomFact = facts[Math.floor(Math.random() * facts.length)]
        
        // Create floating fact bubble
        const bubble = document.createElement('div')
        bubble.textContent = randomFact
        bubble.style.cssText = `
          position: fixed;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          background: rgba(0, 255, 255, 0.9);
          color: black;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: bold;
          z-index: 1000;
          pointer-events: none;
          animation: fadeInOut 3s ease-in-out forwards;
        `
        
        document.body.appendChild(bubble)
        setTimeout(() => bubble.remove(), 3000)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('click', handleNodeClick)

    // Add CSS for fade animation
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(10px); }
        20% { opacity: 1; transform: translateY(0); }
        80% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-10px); }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('click', handleNodeClick)
      console.log = originalLog
      document.head.removeChild(style)
    }
  }, [])

  return (
    <AnimatePresence>
      {showSecret && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: -50 }}
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
        >
          <div className="bg-gradient-to-r from-accent-rag to-accent-code p-8 rounded-2xl text-center max-w-md mx-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-6xl mb-4"
            >
              🤖
            </motion.div>
            <h2 className="text-2xl font-bold text-black mb-2">KONAMI CODE ACTIVATED!</h2>
            <p className="text-black/80">
              You've unlocked the secret AI animation! 
              The neural network is now in hyperdrive mode! 🚀
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}