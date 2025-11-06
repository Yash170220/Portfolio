'use client'

import SystemInitialization from '@/components/home/SystemInitialization'
import NeuralBackground from '@/components/backgrounds/NeuralBackground'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <NeuralBackground />
      <SystemInitialization />
      <Footer />
    </main>
  )
}