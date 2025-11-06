'use client'

import { useEffect, useRef } from 'react'

const codeSnippets = [
  // LangChain
  'from langchain.agents import initialize_agent',
  'retriever = vectorstore.as_retriever()',
  'chain = ConversationalRetrievalChain.from_llm()',
  'embeddings = OpenAIEmbeddings()',
  'memory = ConversationBufferMemory()',
  
  // FastAPI
  '@app.post("/api/chat")',
  'async def chat_endpoint(request: ChatRequest):',
  'response = await llm.ainvoke(prompt)',
  'return {"message": response.content}',
  
  // PyTorch
  'import torch.nn as nn',
  'class TransformerModel(nn.Module):',
  'x = self.attention(query, key, value)',
  'loss = criterion(outputs, targets)',
  'optimizer.step()',
  
  // Docker
  'FROM python:3.11-slim',
  'COPY requirements.txt .',
  'RUN pip install -r requirements.txt',
  'EXPOSE 8000',
  'CMD ["uvicorn", "main:app"]',
  
  // Vector Operations
  'similarity = cosine_similarity(query_vec, doc_vecs)',
  'embeddings = model.encode(documents)',
  'index.upsert(vectors)',
  'results = index.query(vector=query_embedding)'
]

export default function EnhancedCodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const drops: Array<{
      x: number
      y: number
      text: string
      speed: number
      opacity: number
      color: string
    }> = []

    const colors = ['#10B981', '#8B5CF6', '#06B6D4', '#F59E0B']

    for (let i = 0; i < 20; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        speed: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      
      ctx.fillStyle = 'rgba(15, 23, 42, 0.03)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.font = '12px "Fira Code", monospace'
      
      drops.forEach(drop => {
        ctx.fillStyle = drop.color
        ctx.globalAlpha = drop.opacity
        ctx.fillText(drop.text, drop.x, drop.y)
        
        drop.y += drop.speed
        
        if (drop.y > canvas.height + 50) {
          drop.y = -50
          drop.x = Math.random() * canvas.width
          drop.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
          drop.opacity = Math.random() * 0.7 + 0.3
        }
      })
      
      ctx.globalAlpha = 1
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
      className="fixed inset-0 -z-30 opacity-15"
      style={{ pointerEvents: 'none' }}
    />
  )
}