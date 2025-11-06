'use client'

import SkillsShowcase from '@/components/skills/SkillsShowcase'
import NeuralBackground from '@/components/backgrounds/NeuralBackground'

export default function Skills() {
  return (
    <main className="relative min-h-screen">
      <NeuralBackground />
      <SkillsShowcase />
    </main>
  )
}