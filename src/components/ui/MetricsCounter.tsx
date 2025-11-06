'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Metric {
  label: string
  value: number
  suffix: string
  color: string
}

export default function MetricsCounter() {
  const [metrics, setMetrics] = useState<Metric[]>([
    { label: 'Documents Processed', value: 0, suffix: '+', color: 'text-ai-green' },
    { label: 'Response Latency', value: 0, suffix: 'ms', color: 'text-ai-blue' },
    { label: 'Model Accuracy', value: 0, suffix: '%', color: 'text-ai-purple' }
  ])

  useEffect(() => {
    const targets = [1000, 300, 85]
    const intervals = metrics.map((_, index) => {
      return setInterval(() => {
        setMetrics(prev => prev.map((metric, i) => {
          if (i === index && metric.value < targets[i]) {
            const increment = index === 1 ? 5 : index === 2 ? 1 : 25
            return { ...metric, value: Math.min(metric.value + increment, targets[i]) }
          }
          return metric
        }))
      }, 50)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2 * index, duration: 0.5 }}
          className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
        >
          <div className={`text-3xl md:text-4xl font-bold font-mono ${metric.color} mb-2`}>
            {index === 1 ? '< ' : ''}{metric.value}{metric.suffix}
          </div>
          <div className="text-sm md:text-base text-gray-400">{metric.label}</div>
        </motion.div>
      ))}
    </div>
  )
}