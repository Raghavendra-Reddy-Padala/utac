"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface CountUpProps {
  end: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
}

export default function CountUp({ end, duration = 2, decimals = 0, prefix = "", suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: true, margin: "0px 0px -50px 0px" })

  useEffect(() => {
    let startTime: number | null = null
    let frameId: number | null = null

    if (!isInView) return

    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / (duration * 1000), 1)

      const currentCount = Math.floor(percentage * end)
      setCount(currentCount)

      if (percentage < 1) {
        frameId = requestAnimationFrame(countUp)
      } else {
        setCount(end)
      }
    }

    frameId = requestAnimationFrame(countUp)

    return () => {
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [end, duration, isInView])

  return (
    <span ref={nodeRef}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  )
}

