'use client'

import { useEffect, useRef } from 'react'

const equations = [
  'f(x) = σ(Wx + b)',
  '∇L = ∂L/∂θ',
  'P(y|x) = softmax(Wx)',
  'H(X) = -Σp(x)log(p(x))',
  'cos(θ) = a·b/|a||b|',
  'E[X] = Σx·P(X=x)',
  'J(θ) = 1/2m Σ(h(x)-y)²',
  'α = learning_rate',
  'ReLU(x) = max(0,x)',
  'BLEU = BP × exp(Σwn log pn)'
]

export default function MathBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const floatingEquations: Array<{
      text: string
      x: number
      y: number
      vx: number
      vy: number
      opacity: number
    }> = []

    for (let i = 0; i < 12; i++) {
      floatingEquations.push({
        text: equations[Math.floor(Math.random() * equations.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw grid
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.05)'
      ctx.lineWidth = 1
      
      for (let x = 0; x < canvas.width; x += 60) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      
      for (let y = 0; y < canvas.height; y += 60) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
      
      // Draw floating equations
      floatingEquations.forEach(eq => {
        eq.x += eq.vx
        eq.y += eq.vy
        
        if (eq.x < -100 || eq.x > canvas.width + 100) eq.vx *= -1
        if (eq.y < -50 || eq.y > canvas.height + 50) eq.vy *= -1
        
        ctx.font = '14px monospace'
        ctx.fillStyle = `rgba(139, 92, 246, ${eq.opacity})`
        ctx.fillText(eq.text, eq.x, eq.y)
      })
      
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-40"
    />
  )
}