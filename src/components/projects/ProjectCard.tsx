'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Play } from 'lucide-react'

interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  accent: string
  size: string
  techStack: string[]
  achievements: Array<{ icon: string; text: string }>
  buttons: Array<{ label: string; type: string; url: string }>
}

interface ProjectCardProps {
  project: Project
  delay: number
  onClick: () => void
}

export default function ProjectCard({ project, delay, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="cursor-pointer group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <motion.div
        className={`p-8 bg-gradient-to-br ${project.accent} bg-opacity-10 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 ${
          isHovered ? 'shadow-2xl border-white/30' : 'shadow-lg'
        }`}
        whileHover={{ 
          rotateX: 5,
          rotateY: 5,
          scale: 1.02
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-gray-300">{project.subtitle}</p>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.accent} text-white`}>
              {project.category}
            </div>
          </div>

          {/* Hero Placeholder */}
          <div className={`w-full h-32 bg-gradient-to-r ${project.accent} bg-opacity-20 rounded-lg border border-white/20 flex items-center justify-center mb-6`}>
            <Play className="w-12 h-12 text-white/60" />
            <span className="ml-2 text-white/60">Demo Preview</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + index * 0.05 }}
                className={`px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20 ${
                  isHovered ? 'animate-float' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Achievements</h4>
          <div className="space-y-2">
            {project.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.3 + index * 0.1 }}
                className="flex items-center gap-3 text-sm text-gray-300"
              >
                <span className="text-lg">{achievement.icon}</span>
                <span>{achievement.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          {project.buttons.map((button, index) => (
            <motion.button
              key={button.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.6 + index * 0.1 }}
              onClick={(e) => {
                e.stopPropagation()
                // Handle button click
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                button.type === 'primary'
                  ? `bg-gradient-to-r ${project.accent} text-white hover:shadow-lg`
                  : 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20'
              }`}
            >
              {button.label === 'GitHub' && <Github className="w-4 h-4" />}
              {button.label === 'Live Demo' && <ExternalLink className="w-4 h-4" />}
              {button.label === 'Try Demo' && <Play className="w-4 h-4" />}
              {button.label === 'View Code' && <Github className="w-4 h-4" />}
              {button.label === 'Case Study' && <ExternalLink className="w-4 h-4" />}
              {button.label}
            </motion.button>
          ))}
        </div>

        {/* Glowing Border Animation */}
        {isHovered && (
          <motion.div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.accent} opacity-20 -z-10`}
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}