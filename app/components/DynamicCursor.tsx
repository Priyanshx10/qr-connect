'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function DynamicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    }
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-teal-500 rounded-full pointer-events-none z-50 mix-blend-difference"
      variants={variants}
      animate="default"
    />
  )
}