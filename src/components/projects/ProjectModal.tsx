'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, BarChart3, Cpu } from 'lucide-react'

interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  accent: string
  techStack: string[]
  achievements: Array<{ icon: string; text: string }>
  buttons: Array<{ label: string; type: string; url: string }>
  description: string
  architecture: string
  metrics: Record<string, string>
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-8 border-b border-white/10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-xl text-gray-300">{project.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="flex gap-4">
              {project.buttons.map((button) => (
                <button
                  key={button.label}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    button.type === 'primary'
                      ? `bg-gradient-to-r ${project.accent} text-white hover:shadow-lg`
                      : 'bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {button.label === 'GitHub' && <Github className="w-5 h-5" />}
                  {button.label === 'Live Demo' && <ExternalLink className="w-5 h-5" />}
                  {button.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-ai-blue" />
                Project Overview
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            {/* Architecture */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">System Architecture</h3>
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <p className="text-gray-300 leading-relaxed">{project.architecture}</p>
              </div>
            </div>

            {/* Performance Metrics */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-ai-green" />
                Performance Metrics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                    <div className={`text-2xl font-bold font-mono mb-2 bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}>
                      {value}
                    </div>
                    <div className="text-sm text-gray-400">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Details */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 bg-gradient-to-r ${project.accent} bg-opacity-20 rounded-lg border border-white/20 text-white font-semibold`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Key Features & Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-2xl flex-shrink-0">{achievement.icon}</span>
                    <span className="text-gray-300">{achievement.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}