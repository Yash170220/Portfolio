'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Cpu, CheckCircle, TrendingUp } from 'lucide-react'
import TrainingProgress from './TrainingProgress'
import NeuralTimeline from './NeuralTimeline'

const educationData = [
  {
    id: 'masters',
    degree: 'Master of Science, Computer Science',
    institution: 'California State University Fullerton',
    duration: 'Aug 2024 — May 2026',
    status: 'training',
    progress: 73,
    icon: GraduationCap,
    chipIcon: Cpu,
    description: 'Advanced AI/ML specialization with focus on RAG systems and production deployment'
  },
  {
    id: 'bachelors',
    degree: 'Bachelor of Engineering, Computer Engineering',
    institution: 'Savitribai Phule Pune University',
    duration: 'Aug 2020 — May 2024',
    status: 'completed',
    progress: 100,
    icon: GraduationCap,
    chipIcon: CheckCircle,
    description: 'Foundation in computer engineering with emphasis on software development and algorithms'
  }
]

export default function TrainingData() {
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
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-ai-blue to-ai-purple bg-clip-text text-transparent"
          >
            Training Data & Knowledge Acquisition
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Educational journey as AI model training phases - from base model to advanced specialization
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <NeuralTimeline educationData={educationData} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-6"
          >
            {educationData.map((edu, index) => (
              <TrainingProgress key={edu.id} education={edu} delay={index * 0.2} />
            ))}
          </motion.div>
        </div>


      </motion.div>
    </div>
  )
}