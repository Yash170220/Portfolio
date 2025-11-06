'use client'

import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import DeploymentTimeline from './DeploymentTimeline'

const experiences = [
  {
    id: 'csuf',
    title: 'Graduate Research Assistant',
    company: 'California State University Fullerton',
    duration: 'Aug 2025 - Present',
    status: 'active',
    accent: 'green',
    metrics: [
      { label: 'Filings Processed', value: 1000, suffix: '+', type: 'counter' },
      { label: 'Accuracy Rate', value: 85, suffix: '%', type: 'circular' },
      { label: 'Efficiency Improvement', value: 40, suffix: '%', type: 'bar' }
    ],
    highlights: [
      { icon: '🤖', text: 'Architected agentic AI system (LangChain + LangGraph)' },
      { icon: '⚡', text: 'RAG pipeline with <300ms latency' },
      { icon: '🔄', text: 'Multi-agent workflow with parallel processing' },
      { icon: '📊', text: '15% accuracy boost through prompt engineering' }
    ],
    techStack: ['LangChain', 'LangGraph', 'Python', 'RAG', 'Vector DB', 'OpenAI']
  },
  {
    id: 'pesh',
    title: 'Software Developer Intern',
    company: 'Pesh Group',
    duration: 'Jan 2024 - Jun 2024',
    status: 'completed',
    accent: 'cyan',
    metrics: [
      { label: 'Query Automation', value: 80, suffix: '%', type: 'counter' },
      { label: 'Response Time', value: 2, suffix: 's', type: 'circular' },
      { label: 'Satisfaction Improvement', value: 50, suffix: '%', type: 'bar' }
    ],
    highlights: [
      { icon: '💬', text: 'Production RAG chatbot (Groq LLaMA + LangChain)' },
      { icon: '⚡', text: 'Next.js app with 45% faster load times' },
      { icon: '📈', text: '60% organic traffic growth (SEO optimization)' },
      { icon: '🔧', text: 'CI/CD pipeline with 95%+ test coverage' }
    ],
    techStack: ['Next.js', 'LangChain', 'Groq', 'LLaMA', 'TypeScript', 'CI/CD']
  }
]

export default function DeploymentHistory() {
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
            Deployment History & Model Performance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Production deployments with real-world performance metrics and system optimizations
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-1"
          >
            <DeploymentTimeline experiences={experiences} />
          </motion.div>

          {/* Experience Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} delay={index * 0.2} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}