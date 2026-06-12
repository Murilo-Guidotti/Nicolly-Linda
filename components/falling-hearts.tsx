"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

type FallingHeart = {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  opacity: number
}

export function FallingHearts() {
  const [hearts, setHearts] = useState<FallingHeart[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 9 + Math.random() * 8,
      size: 10 + Math.random() * 18,
      opacity: 0.25 + Math.random() * 0.4,
    }))
    setHearts(generated)
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute -top-10 animate-fall text-primary"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            opacity: h.opacity,
          }}
        >
          <Heart fill="currentColor" style={{ width: h.size, height: h.size }} />
        </span>
      ))}
    </div>
  )
}
