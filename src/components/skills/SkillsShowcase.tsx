'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'LangChain', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
]

export default function SkillsShowcase() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

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
            Technical Skills
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Hover over skills to see them in action
          </motion.p>
        </div>

        {/* Floating Skills Grid */}
        <div className="relative h-[700px]">
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * Math.PI * 2
            const radius = 280
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <motion.div
                key={skill.name}
                className="absolute top-1/2 left-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: x,
                  y: y
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5
                }}
                whileHover={{ scale: 1.3, zIndex: 50 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <motion.div
                  className="relative w-20 h-20 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 flex items-center justify-center cursor-pointer"
                  animate={{
                    y: [0, -5, 0],
                    borderColor: hoveredSkill === skill.name ? '#00ffff' : 'rgba(255,255,255,0.1)',
                    boxShadow: hoveredSkill === skill.name ? '0 0 30px rgba(0,255,255,0.5)' : 'none'
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    borderColor: { duration: 0.2 },
                    boxShadow: { duration: 0.2 }
                  }}
                >
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />

                  {/* Skill Name Tooltip */}
                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-accent-rag text-black px-3 py-1 rounded-lg text-sm font-semibold z-50"
                      style={{ pointerEvents: 'none' }}
                    >
                      {skill.name}
                    </motion.div>
                  )}

                  {/* Orbiting Particles */}
                  {hoveredSkill === skill.name && (
                    <>
                      {Array.from({ length: 3 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-accent-rag rounded-full"
                          animate={{
                            rotate: 360,
                            scale: [1, 1.5, 1]
                          }}
                          transition={{
                            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                            scale: { duration: 1, repeat: Infinity }
                          }}
                          style={{
                            top: '50%',
                            left: '50%',
                            marginTop: -4,
                            marginLeft: -4,
                            transformOrigin: `${30 * Math.cos((i * 120 * Math.PI) / 180)}px ${30 * Math.sin((i * 120 * Math.PI) / 180)}px`
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              </motion.div>
            )
          })}

          {/* Center Text */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="text-6xl font-bold text-white/10 font-mono">
              {skills.length}+
            </div>
            <div className="text-sm text-gray-500 mt-2">Technologies</div>
          </motion.div>
        </div>


      </motion.div>
    </div>
  )
}
