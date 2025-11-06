'use client'

import DeploymentHistory from '@/components/experience/DeploymentHistory'
import NeuralBackground from '@/components/backgrounds/NeuralBackground'

export default function Experience() {
  return (
    <main className="relative min-h-screen">
      <NeuralBackground />
      <DeploymentHistory />
    </main>
  )
}