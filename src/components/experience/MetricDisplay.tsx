'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Metric {
  label: string
  value: number
  suffix: string
  type: string
}

interface MetricDisplayProps {
  metric: Metric
  accent: string
  delay: number
}

export default function MetricDisplay({ metric, accent, delay }: MetricDisplayProps) {
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentValue(prev => {
          const increment = metric.type === 'counter' ? Math.ceil(metric.value / 50) : 1
          return Math.min(prev + increment, metric.value)
        })
      }, 30)
      
      setTimeout(() => clearInterval(interval), 2000)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [metric.value, delay])

  const accentColors = {
    green: 'text-green-400',
    cyan: 'text-cyan-400'
  }

  const renderMetric = () => {
    switch (metric.type) {
      case 'circular':
        const percentage = (currentValue / metric.value) * 100
        return (
          <div className="relative w-16 h-16 mx-auto mb-2">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="4"
                fill="none"
              />
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                stroke={accent === 'green' ? '#10B981' : '#06B6D4'}
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: percentage / 100 }}
                transition={{ duration: 2, delay }}
                style={{
                  strokeDasharray: '175.929',
                  strokeDashoffset: '175.929'
                }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-lg font-bold ${accentColors[accent as keyof typeof accentColors]}`}>
                {currentValue}{metric.suffix}
              </span>
            </div>
          </div>
        )
      
      case 'bar':
        return (
          <div className="mb-2">
            <div className={`text-2xl font-bold ${accentColors[accent as keyof typeof accentColors]} mb-2`}>
              {currentValue}{metric.suffix}
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full ${
                  accent === 'green' ? 'bg-gradient-to-r from-green-500 to-emerald-400' : 'bg-gradient-to-r from-cyan-500 to-blue-400'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${(currentValue / metric.value) * 100}%` }}
                transition={{ duration: 2, delay }}
              />
            </div>
          </div>
        )
      
      default:
        return (
          <div className={`text-2xl font-bold ${accentColors[accent as keyof typeof accentColors]} mb-2`}>
            {metric.suffix === 's' && currentValue < metric.value ? '<' : ''}{currentValue}{metric.suffix}
          </div>
        )
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="text-center p-4 bg-white/5 rounded-lg border border-white/10"
    >
      {renderMetric()}
      <div className="text-xs text-gray-400 font-medium">{metric.label}</div>
    </motion.div>
  )
}