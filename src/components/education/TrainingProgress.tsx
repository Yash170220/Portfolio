'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Code, Award } from 'lucide-react'

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

interface TrainingProgressProps {
  education: Education
  delay: number
}

const skillsData = {
  masters: [
    { name: 'Advanced AI/ML', icon: Brain, level: 85 },
    { name: 'RAG Systems', icon: Database, level: 90 },
    { name: 'Production AI', icon: Code, level: 80 },
    { name: 'Research', icon: Award, level: 75 }
  ],
  bachelors: [
    { name: 'Programming', icon: Code, level: 95 },
    { name: 'Algorithms', icon: Brain, level: 90 },
    { name: 'Software Engineering', icon: Database, level: 85 },
    { name: 'Problem Solving', icon: Award, level: 92 }
  ]
}

export default function TrainingProgress({ education, delay }: TrainingProgressProps) {
  const skills = skillsData[education.id as keyof typeof skillsData] || []

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="p-8 bg-gradient-to-br from-slate-900/50 to-purple-900/30 rounded-2xl border border-white/10 backdrop-blur-sm"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          education.status === 'completed' 
            ? 'bg-gradient-to-r from-ai-green to-emerald-500' 
            : 'bg-gradient-to-r from-ai-blue to-ai-purple'
        }`}>
          <education.icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{education.degree.split(',')[0]}</h3>
          <p className="text-sm text-gray-400">{education.institution}</p>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-white">Training Progress</span>
          <span className={`text-sm font-mono ${
            education.status === 'completed' ? 'text-ai-green' : 'text-ai-blue'
          }`}>
            {education.progress}%
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <motion.div
            className={`h-3 rounded-full ${
              education.status === 'completed' 
                ? 'bg-gradient-to-r from-ai-green to-emerald-500' 
                : 'bg-gradient-to-r from-ai-blue to-ai-purple'
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${education.progress}%` }}
            transition={{ duration: 2, delay: delay + 0.5 }}
          />
        </div>
      </div>

      {/* Skills Breakdown */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-300 mb-4">Knowledge Areas</h4>
        {skills.map((skill, index) => (
          <div key={skill.name} className="flex items-center gap-4">
            <skill.icon className="w-4 h-4 text-ai-blue flex-shrink-0" />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-300">{skill.name}</span>
                <span className="text-xs text-gray-400 font-mono">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <motion.div
                  className="h-1.5 bg-gradient-to-r from-ai-purple to-ai-blue rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: delay + 0.8 + index * 0.1 }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Status Badge */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm ${
          education.status === 'completed' 
            ? 'bg-ai-green/20 text-ai-green border border-ai-green/30' 
            : 'bg-ai-blue/20 text-ai-blue border border-ai-blue/30'
        }`}>
          <education.chipIcon className="w-4 h-4" />
          {education.status === 'completed' ? 'Model Checkpoint Saved' : 'Currently Training...'}
        </div>
      </div>
    </motion.div>
  )
}