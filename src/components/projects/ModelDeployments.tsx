'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Code2, Zap, Shield, Database } from 'lucide-react'
import ProjectModal from './ProjectModal'

const projects = [
  {
    id: 'crush-my-course',
    title: 'Crush My Course',
    subtitle: 'AI-Powered Academic Course Tracker',
    category: 'RAG Systems',
    accent: 'from-purple-500 to-blue-500',
    size: 'large',
    techStack: ['FastAPI', 'ChromaDB', 'Groq LLaMA 3.1', 'Docker', 'AWS ECS'],
    achievements: [
      { icon: '📚', text: '10K+ CSUF course records processed' },
      { icon: '⚡', text: '<500ms semantic search latency' },
      { icon: '🐳', text: 'Dockerized RAG pipeline on AWS ECS' },
      { icon: '💰', text: '40% cost reduction via Redis caching' }
    ],
    buttons: [
      { label: 'Details', type: 'primary', url: '' },
      { label: 'GitHub', type: 'secondary', url: '' }
    ],
    demoUrl: 'https://crush-my-course.vercel.app/',
    githubUrl: '',
    description: 'Advanced RAG system for semantic course search and recommendation using vector embeddings and LLM-powered query understanding.',
    architecture: 'FastAPI backend with ChromaDB vector store, Groq LLaMA 3.1 for query processing, Redis caching layer, deployed on AWS ECS with auto-scaling.',
    metrics: {
      'Search Accuracy': '94%',
      'Response Time': '<500ms',
      'Cost Reduction': '40%',
      'Records Processed': '10K+'
    }
  },
  {
    id: 'elder-ease',
    title: 'ElderEase',
    subtitle: 'AI Digital Companion for Elderly',
    category: 'RAG Systems',
    accent: 'from-green-500 to-cyan-500',
    size: 'medium',
    techStack: ['Gemini Pro', 'RAG', 'Next.js', 'FastAPI', 'Docker', 'Appwrite'],
    achievements: [
      { icon: '🤖', text: 'Conversational AI with multi-turn dialogue' },
      { icon: '💊', text: 'Gemini Vision API for pill identification' },
      { icon: '🗣️', text: 'Text-to-speech & sentiment analysis' },
      { icon: '🏥', text: 'Personalized Medicare recommendations' }
    ],
    buttons: [
      { label: 'Details', type: 'primary', url: '' },
      { label: 'GitHub', type: 'secondary', url: '' }
    ],
    demoUrl: '',
    githubUrl: 'https://github.com/Yash170220/Elder_Ease',
    description: 'Comprehensive AI companion leveraging multimodal capabilities for elderly care, including vision-based pill identification and personalized health recommendations.',
    architecture: 'Next.js frontend with Gemini Pro integration, RAG pipeline for health information retrieval, Appwrite backend for user management.',
    metrics: {
      'User Satisfaction': '96%',
      'Pill ID Accuracy': '89%',
      'Response Quality': '92%',
      'Active Users': '500+'
    }
  },
  {
    id: 'gym-pose-analysis',
    title: 'Gym Exercise Pose Analysis',
    subtitle: 'Real-time Form Correction System',
    category: 'Computer Vision',
    accent: 'from-orange-500 to-red-500',
    size: 'medium',
    techStack: ['MediaPipe', 'TensorFlow', 'React.js', 'CNN'],
    achievements: [
      { icon: '🏋️', text: '92% accuracy across 5 exercise types' },
      { icon: '🎯', text: '33-point pose tracking at 30 FPS' },
      { icon: '📹', text: '2,000+ annotated training videos' },
      { icon: '💪', text: 'Real-time form correction feedback' }
    ],
    buttons: [
      { label: 'Details', type: 'primary', url: '' },
      { label: 'GitHub', type: 'secondary', url: '' }
    ],
    demoUrl: '',
    githubUrl: 'https://github.com/Yash170220/Automated-Monitoring-of-Gym-Activities-using-Pose-Estimation-',
    description: 'Computer vision system for real-time exercise form analysis using MediaPipe pose estimation and custom CNN models for movement classification.',
    architecture: 'MediaPipe for pose detection, TensorFlow CNN for exercise classification, React.js frontend with real-time video processing.',
    metrics: {
      'Pose Accuracy': '92%',
      'Frame Rate': '30 FPS',
      'Training Videos': '2K+',
      'Exercise Types': '5'
    }
  },
  {
    id: 'tiffin-marketplace',
    title: 'Tiffin Service Marketplace',
    subtitle: 'Progressive Web Application',
    category: 'Web Apps',
    accent: 'from-yellow-500 to-orange-500',
    size: 'medium',
    techStack: ['React.js', 'Material-UI', 'Express.js', 'MongoDB', 'JWT', 'PWA'],
    achievements: [
      { icon: '🍱', text: 'Two-sided marketplace for home-cooked meals' },
      { icon: '⚡', text: '<200ms API response times' },
      { icon: '🔐', text: 'Google OAuth + JWT + RBAC security' },
      { icon: '📱', text: '25+ RESTful APIs with offline-first PWA' }
    ],
    buttons: [
      { label: 'Details', type: 'primary', url: '' },
      { label: 'GitHub', type: 'secondary', url: '' }
    ],
    demoUrl: 'https://tiffinservice.netlify.app/',
    githubUrl: '',
    description: 'Full-stack marketplace connecting home-based tiffin service providers with customers for affordable daily meals with secure authentication and booking system.',
    architecture: 'React.js PWA frontend with Material-UI, Express.js backend with MongoDB, JWT authorization, RBAC, normalized schema with query optimization.',
    metrics: {
      'API Response': '<200ms',
      'Endpoints': '25+',
      'Auth Methods': '2',
      'User Roles': '2'
    }
  }
]

const filters = ['All', 'RAG Systems', 'Computer Vision', 'Web Apps']

const categoryIcons: Record<string, any> = {
  'RAG Systems': Code2,
  'Computer Vision': Zap,
  'Web Apps': Database
}

export default function ModelDeployments() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="relative z-10 min-h-screen px-4 py-20 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-ai-blue to-ai-purple bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Production-ready AI systems with real-world impact
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  activeFilter === filter
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-accent-rag to-accent-code rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project, index) => {
              const Icon = categoryIcons[project.category]
              const isHovered = hoveredProject === project.id

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <motion.div
                    className="relative h-full bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Animated Border */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100`}
                      style={{ padding: '2px' }}
                      animate={isHovered ? {
                        background: [
                          `linear-gradient(0deg, transparent, transparent)`,
                          `linear-gradient(360deg, transparent, transparent)`
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-full h-full bg-black/40 backdrop-blur-sm rounded-2xl" />
                    </motion.div>

                    <div className="relative z-10 p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            {Icon && <Icon className="w-5 h-5 text-accent-rag" />}
                            <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${project.accent} text-white`}>
                              {project.category}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 group-hover:from-accent-rag group-hover:to-accent-code transition-all">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-sm font-medium">{project.subtitle}</p>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.slice(0, 5).map((tech, idx) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + idx * 0.05 }}
                              className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-200 font-mono hover:bg-white/10 hover:border-accent-rag/30 transition-all"
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {project.techStack.length > 5 && (
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400 font-mono">
                              +{project.techStack.length - 5}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3 mb-6">
                        {project.achievements.slice(0, 3).map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 + idx * 0.1 }}
                            className="flex items-center gap-3 text-sm text-gray-200"
                          >
                            <span className="text-lg">{achievement.icon}</span>
                            <span className="flex-1">{achievement.text}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedProject(project)
                          }}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-gradient-to-r ${project.accent} text-white hover:shadow-lg hover:shadow-accent-rag/20`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Details
                        </motion.button>
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation()
                            const url = project.demoUrl || project.githubUrl
                            if (url) {
                              window.open(url, '_blank')
                            }
                          }}
                          disabled={!project.demoUrl && !project.githubUrl}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                          whileHover={{ scale: (project.demoUrl || project.githubUrl) ? 1.05 : 1 }}
                          whileTap={{ scale: (project.demoUrl || project.githubUrl) ? 0.95 : 1 }}
                        >
                          {project.demoUrl ? (
                            <><ExternalLink className="w-4 h-4" />Demo</>
                          ) : (
                            <><Github className="w-4 h-4" />GitHub</>
                          )}
                        </motion.button>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    {isHovered && (
                      <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${project.accent} opacity-20 blur-xl -z-10`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>


      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}