'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Activity, CheckCircle } from 'lucide-react'

interface Experience {
  id: string
  title: string
  company: string
  duration: string
  status: string
  accent: string
}

interface DeploymentTimelineProps {
  experiences: Experience[]
}

export default function DeploymentTimeline({ experiences }: DeploymentTimelineProps) {
  return (
    <div className="relative">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
      >
        <Calendar className="w-6 h-6 text-ai-blue" />
        Deployment Timeline
      </motion.h3>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ai-blue via-ai-purple to-ai-green opacity-50" />
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative flex items-start gap-6"
            >
              {/* Timeline Node */}
              <div className="relative z-10">
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    exp.status === 'active' 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                      : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                  } shadow-lg`}
                  animate={{ 
                    boxShadow: exp.status === 'active' 
                      ? ['0 0 20px rgba(16,185,129,0.5)', '0 0 40px rgba(16,185,129,0.8)', '0 0 20px rgba(16,185,129,0.5)']
                      : '0 0 20px rgba(6,182,212,0.5)'
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {exp.status === 'active' ? (
                    <Activity className="w-6 h-6 text-white" />
                  ) : (
                    <CheckCircle className="w-6 h-6 text-white" />
                  )}
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                className="flex-1 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-semibold mb-3 ${
                  exp.status === 'active' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                }`}>
                  {exp.status === 'active' ? 'LIVE' : 'DEPLOYED'}
                </div>
                
                <h4 className="text-lg font-bold text-white mb-1">{exp.title}</h4>
                
                <div className="flex items-center gap-2 text-gray-300 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{exp.company}</span>
                </div>
                
                <div className="text-sm text-gray-400">{exp.duration}</div>
              </motion.div>

              {/* Connection Animation */}
              {index < experiences.length - 1 && (
                <motion.div
                  className="absolute left-6 top-16 w-0.5 h-8"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                >
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-ai-purple rounded-full absolute left-[-3px]"
                      animate={{ y: [0, 32, 0] }}
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

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 p-4 bg-gradient-to-r from-ai-blue/10 to-ai-purple/10 rounded-lg border border-white/10"
      >
        <h4 className="text-sm font-semibold text-gray-300 mb-3">Deployment Summary</h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-ai-green font-mono">2</div>
            <div className="text-xs text-gray-400">Total Deployments</div>
          </div>
          <div>
            <div className="text-xl font-bold text-ai-blue font-mono">100%</div>
            <div className="text-xs text-gray-400">Success Rate</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}