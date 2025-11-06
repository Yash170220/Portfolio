'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, X, Bot, User } from 'lucide-react'


interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const mockResponses = {
  'experience': "I'm currently a Graduate Research Assistant at CSUF, where I've processed 1,000+ filings with 85% accuracy. Previously, I was a Software Developer Intern at Pesh Group, building production RAG chatbots.",
  'skills': "My core expertise includes LangChain, LangGraph, PyTorch, and RAG systems. I specialize in Generative AI with 95% proficiency in LangChain and 90% in LangGraph.",
  'projects': "I've built Crush My Course (RAG-powered course tracker), ElderEase (AI companion for elderly), and Gym Pose Analysis (computer vision for exercise form). All deployed in production!",
  'crush my course': "Crush My Course is an AI-powered academic tracker using FastAPI, ChromaDB, and Groq LLaMA 3.1. It processes 10K+ CSUF course records with <500ms search latency and 40% cost reduction via Redis caching.",
  'eldereease': "ElderEase is an AI digital companion for elderly care, featuring Gemini Pro for conversational AI, vision API for pill identification, and personalized Medicare recommendations.",
  'default': "I'm Yash's AI portfolio assistant! I can tell you about his experience, skills, projects, or specific technical details. Try asking about 'Crush My Course' or his RAG expertise!"
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Yash's AI assistant. Ask me about his experience, skills, or projects!",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const [showRAG, setShowRAG] = useState(false)
  const [currentQuery, setCurrentQuery] = useState('')

  const handleSend = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setCurrentQuery(inputText)
    setInputText('')
    setIsThinking(true)
    setShowRAG(true)

    // Simulate thinking time
    setTimeout(() => {
      const query = inputText.toLowerCase()
      let response = mockResponses.default

      for (const [key, value] of Object.entries(mockResponses)) {
        if (query.includes(key)) {
          response = value
          break
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsThinking(false)
      setTimeout(() => setShowRAG(false), 2000)
    }, 3000)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-ai-blue to-ai-purple rounded-full flex items-center justify-center shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-gradient-to-br from-slate-900/95 to-purple-900/95 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col z-40"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-ai-blue to-ai-purple rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Portfolio Assistant</div>
                  <div className="text-xs text-gray-400">Powered by RAG</div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-ai-blue to-ai-purple text-white'
                      : 'bg-white/10 text-gray-300'
                  }`}>
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && (
                        <Bot className="w-4 h-4 text-ai-blue flex-shrink-0 mt-0.5" />
                      )}
                      {message.sender === 'user' && (
                        <User className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      )}
                      <div className="text-sm">{message.text}</div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Thinking Animation */}
              {isThinking && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-ai-blue" />
                      <div className="flex gap-1">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-ai-blue rounded-full"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">Processing with RAG...</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about experience, skills, projects..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-ai-blue"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputText.trim() || isThinking}
                  className="w-10 h-10 bg-gradient-to-r from-ai-blue to-ai-purple rounded-lg flex items-center justify-center disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}