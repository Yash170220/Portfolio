'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Cpu, Zap } from 'lucide-react'

interface Education {
  id: string
  degree: string
  institution: string
  duration: string
  status: string
  progress: number
  icon: any
  chipIcon: any
  description: string
}

interface NeuralTimelineProps {
  educationData: Education[]
}

export default function NeuralTimeline({ educationData }: NeuralTimelineProps) {
  return (
    <div className="relative">
      {/* Neural Pathway Background */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ai-blue via-ai-purple to-ai-green opacity-50" />
      
      <div className="space-y-16">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
            className="relative flex items-start gap-8"
            style={{ marginTop: index === 1 ? '2rem' : '0' }}
          >
            {/* Checkpoint Node */}
            <div className="relative z-10">
              <motion.div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  edu.status === 'completed' 
                    ? 'bg-gradient-to-r from-ai-green to-emerald-500' 
                    : 'bg-gradient-to-r from-ai-blue to-ai-purple'
                } shadow-lg`}
                animate={{ 
                  boxShadow: edu.status === 'training' 
                    ? ['0 0 20px rgba(0,212,255,0.5)', '0 0 40px rgba(139,92,246,0.8)', '0 0 20px rgba(0,212,255,0.5)']
                    : '0 0 20px rgba(16,185,129,0.5)'
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <edu.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              {/* AI Chip Overlay */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <edu.chipIcon className={`w-4 h-4 ${
                  edu.status === 'completed' ? 'text-ai-green' : 'text-ai-blue'
                }`} />
              </motion.div>
            </div>

            {/* Content Card */}
            <motion.div
              className="flex-1 p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  edu.status === 'completed' 
                    ? 'bg-ai-green/20 text-ai-green border border-ai-green/30' 
                    : 'bg-ai-blue/20 text-ai-blue border border-ai-blue/30'
                }`}>
                  {edu.status === 'completed' ? 'Base Model Trained ✓' : `Training Progress: ${edu.progress}%`}
                </span>
                <span className="text-sm text-gray-400">{edu.duration}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-accent-rag font-semibold mb-4">{edu.institution}</p>
              <p className="text-gray-300 text-base leading-relaxed">{edu.description}</p>

              {/* Progress Bar for Current Training */}
              {edu.status === 'training' && (
                <div className="mt-4">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-ai-blue to-ai-purple rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${edu.progress}%` }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                </div>
              )}
            </motion.div>

            {/* Data Flow Animation */}
            {index < educationData.length - 1 && (
              <motion.div
                className="absolute left-8 top-20 w-0.5 h-12"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
              >
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-ai-purple rounded-full absolute left-[-3px]"
                    animate={{ y: [0, 48, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}