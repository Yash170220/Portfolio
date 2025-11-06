'use client'

import ModelDeployments from '@/components/projects/ModelDeployments'
import NeuralBackground from '@/components/backgrounds/NeuralBackground'

export default function Projects() {
  return (
    <main className="relative min-h-screen">
      <NeuralBackground />
      <ModelDeployments />
    </main>
  )
}