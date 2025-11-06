'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Search, Briefcase, Target } from 'lucide-react'

const stages = [
  {
    id: 'education',
    title: 'Masters in CS',
    subtitle: 'CSUF • 2024-2026',
    icon: GraduationCap,
    progress: 73,
    color: '#8b5cf6'
  },
  {
    id: 'skills',
    title: 'Skill Development',
    subtitle: 'AI/ML • RAG',
    icon: Target,
    progress: 99,
    color: '#00ffff'
  },
  {
    id: 'search',
    title: 'Job Search',
    subtitle: 'AI Engineer',
    icon: Search,
    progress: 50,
    color: '#0080ff'
  },
  {
    id: 'career',
    title: 'Dream Role',
    subtitle: 'Senior AI Engineer',
    icon: Briefcase,
    progress: 0,
    color: '#00ff00'
  }
]

export default function CareerPipeline() {
  const [activeStage, setActiveStage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-6xl mx-auto h-96 bg-gradient-to-br from-slate-900/40 to-purple-900/40 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden p-8">
      
      {/* Pipeline Title */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2">Career Development Pipeline</h3>
        <p className="text-sm text-gray-400">Masters Student → Skill Builder → Job Seeker → AI Engineer</p>
      </div>

      {/* Pipeline Stages */}
      <div className="flex justify-between items-start relative gap-4">
        {stages.map((stage, index) => (
          <div key={stage.id} className="flex flex-col items-center relative z-10 flex-1">
            
            {/* Stage Icon */}
            <motion.div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-3 border-2 relative"
              style={{
                borderColor: activeStage >= index ? stage.color : 'rgba(255,255,255,0.2)',
                backgroundColor: activeStage >= index ? `${stage.color}20` : 'rgba(255,255,255,0.05)'
              }}
              animate={{
                scale: activeStage === index ? [1, 1.15, 1] : 1,
                rotate: activeStage === index ? [0, 5, -5, 0] : 0
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut"
              }}
            >
              <stage.icon 
                className="w-8 h-8"
                style={{ color: activeStage >= index ? stage.color : 'rgba(255,255,255,0.4)' }}
              />
              
              {/* Pulse Ring */}
              {activeStage === index && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: stage.color }}
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>

            {/* Stage Info */}
            <div className="text-center w-full px-2">
              <h4 className="text-sm font-semibold text-white mb-1">{stage.title}</h4>
              <p className="text-xs text-gray-400 mb-3">{stage.subtitle}</p>
              
              {/* Progress Bar */}
              <div className="w-full max-w-24 mx-auto h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: stage.color }}
                  initial={{ width: 0 }}
                  animate={{ 
                    width: activeStage >= index ? `${stage.progress}%` : 0
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
              <span className="text-xs text-gray-500 mt-1 block">{stage.progress}%</span>
            </div>

            {/* Status Badge */}
            <motion.div
              className="mt-2 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: activeStage >= index ? `${stage.color}20` : 'rgba(255,255,255,0.05)',
                color: activeStage >= index ? stage.color : 'rgba(255,255,255,0.4)'
              }}
              animate={{
                scale: activeStage === index ? [1, 1.05, 1] : 1
              }}
              transition={{ duration: 0.5 }}
            >
              {activeStage > index ? 'Completed' : activeStage === index ? 'In Progress' : 'Upcoming'}
            </motion.div>

            {/* Connection Arrow */}
            {index < stages.length - 1 && (
              <motion.div
                className="absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-0.5"
                style={{ 
                  backgroundColor: activeStage > index ? stages[index + 1].color : 'rgba(255,255,255,0.2)'
                }}
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: activeStage > index ? 1 : 0
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformOrigin: 'left' }}
              >
                {/* Arrow Head */}
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: activeStage > index ? 1 : 0,
                    x: activeStage > index ? 0 : -10
                  }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div 
                    className="w-0 h-0 border-l-8 border-t-4 border-b-4 border-transparent"
                    style={{ borderLeftColor: stages[index + 1].color }}
                  />
                </motion.div>
              </motion.div>
            )}
          </div>
        ))}

        {/* Flowing Particle */}
        <AnimatePresence>
          {activeStage > 0 && (
            <motion.div
              key={activeStage}
              className="absolute top-8 w-3 h-3 rounded-full"
              style={{ backgroundColor: stages[activeStage].color }}
              initial={{ 
                left: `${(activeStage - 1) * 25 + 12.5}%`,
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                left: `${activeStage * 25 + 12.5}%`,
                opacity: [0, 1, 1, 0],
                scale: [0, 1.5, 1, 0]
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Current Focus */}
      <motion.div
        className="absolute bottom-4 left-4 right-4 p-3 bg-white/5 rounded-lg border border-white/10"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 text-sm">
          <span className="text-gray-400 font-semibold">Current Focus:</span>
          <span className="text-accent-rag font-semibold text-center">Building RAG and Agent AI Systems & Seeking AI Engineering Opportunities</span>
        </div>
      </motion.div>
    </div>
  )
}