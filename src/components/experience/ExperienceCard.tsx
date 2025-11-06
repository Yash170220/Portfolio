'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Activity, CheckCircle, Zap } from 'lucide-react'
import MetricDisplay from './MetricDisplay'

interface Experience {
  id: string
  title: string
  company: string
  duration: string
  status: string
  accent: string
  metrics: Array<{
    label: string
    value: number
    suffix: string
    type: string
  }>
  highlights: Array<{
    icon: string
    text: string
  }>
  techStack: string[]
}

interface ExperienceCardProps {
  experience: Experience
  delay: number
}

export default function ExperienceCard({ experience, delay }: ExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const accentColors = {
    green: {
      bg: 'from-green-500/10 to-emerald-500/10',
      border: 'border-green-500/30',
      text: 'text-green-400',
      glow: 'shadow-green-500/20'
    },
    cyan: {
      bg: 'from-cyan-500/10 to-blue-500/10',
      border: 'border-cyan-500/30',
      text: 'text-cyan-400',
      glow: 'shadow-cyan-500/20'
    }
  }

  const colors = accentColors[experience.accent as keyof typeof accentColors]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        className={`p-8 bg-gradient-to-br ${colors.bg} rounded-2xl border ${colors.border} backdrop-blur-sm transition-all duration-300 ${
          isHovered ? `shadow-2xl ${colors.glow}` : 'shadow-lg'
        }`}
        whileHover={{ 
          rotateX: 5,
          rotateY: 5,
          scale: 1.02
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
              {experience.status === 'active' ? (
                <Activity className={`w-5 h-5 ${colors.text} animate-pulse`} />
              ) : (
                <CheckCircle className={`w-5 h-5 ${colors.text}`} />
              )}
            </div>
            <p className={`text-lg font-semibold ${colors.text}`}>{experience.company}</p>
            <p className="text-gray-400">{experience.duration}</p>
          </div>
          
          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
            experience.status === 'active' 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
          }`}>
            {experience.status === 'active' ? 'Active Deployment' : 'Successful Deployment'}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {experience.metrics.map((metric, index) => (
            <MetricDisplay 
              key={metric.label} 
              metric={metric} 
              accent={experience.accent}
              delay={delay + index * 0.1} 
            />
          ))}
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Zap className={`w-5 h-5 ${colors.text}`} />
            Key Achievements
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {experience.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.5 + index * 0.1 }}
                className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
              >
                <span className="text-lg flex-shrink-0">{highlight.icon}</span>
                <span className="text-sm text-gray-300">{highlight.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20 cursor-pointer transition-all hover:${colors.border} hover:${colors.text}`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}