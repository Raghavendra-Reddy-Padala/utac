"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  height?: number
}

export default function BeforeAfterSlider({ beforeImage, afterImage, height = 400 }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const [imagesLoaded, setImagesLoaded] = useState({
    before: false,
    after: false
  })

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return

    const sliderRect = sliderRef.current.getBoundingClientRect()
    const position = ((e.clientX - sliderRect.left) / sliderRect.width) * 100

    setSliderPosition(Math.min(Math.max(position, 0), 100))
  }

  const handleTouchStart = () => {
    isDragging.current = true
  }

  const handleTouchEnd = () => {
    isDragging.current = false
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !sliderRef.current) return

    // Prevent scrolling while dragging
    e.preventDefault()

    const touch = e.touches[0]
    const sliderRect = sliderRef.current.getBoundingClientRect()
    const position = ((touch.clientX - sliderRect.left) / sliderRect.width) * 100

    setSliderPosition(Math.min(Math.max(position, 0), 100))
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false
    }

    document.addEventListener("mouseup", handleGlobalMouseUp)
    document.addEventListener("touchend", handleGlobalMouseUp)

    // Preload images to avoid loading spinner issues
    if (beforeImage && afterImage) {
      const beforeImg = document.createElement('img')
      const afterImg = document.createElement('img')
      
      beforeImg.onload = () => setImagesLoaded(prev => ({ ...prev, before: true }))
      afterImg.onload = () => setImagesLoaded(prev => ({ ...prev, after: true }))
      
      beforeImg.src = beforeImage
      afterImg.src = afterImage
    }

    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp)
      document.removeEventListener("touchend", handleGlobalMouseUp)
    }
  }, [beforeImage, afterImage])
  // Render placeholder while images are loading
  const renderPlaceholder = () => (
    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary/50 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )

  return (
    <div
      ref={sliderRef}
      className="relative w-full overflow-hidden rounded-lg card-border cursor-ew-resize"
      style={{ height }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      {/* Before image container */}
      <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        {imagesLoaded.before ? (
          <Image
            src={beforeImage || "/placeholder.svg"}
            alt="Before"
            width={800}
            height={height}
            className="object-cover w-full h-full"
            priority
          />
        ) : renderPlaceholder()}
        
        <div className="absolute top-2 left-2 bg-primary/80 text-white px-2 py-1 text-xs font-medium rounded">
          Before
        </div>
      </div>

      {/* After image container */}
      <div className="absolute top-0 right-0 h-full overflow-hidden" style={{ width: `${100 - sliderPosition}%`, right: 0 }}>
        {imagesLoaded.after ? (
          <Image
            src={afterImage || "/placeholder.svg"}
            alt="After"
            width={800}
            height={height}
            className="object-cover w-full h-full"
            style={{ position: 'absolute', right: 0 }}
            priority
          />
        ) : renderPlaceholder()}
        
        <div className="absolute top-2 right-2 bg-primary/80 text-white px-2 py-1 text-xs font-medium rounded">
          After
        </div>
      </div>

      {/* Slider divider line */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-white" style={{ left: `${sliderPosition}%` }}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/80 border-2 border-white flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="h-1 w-3 bg-white mb-1"></div>
            <div className="h-1 w-3 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  )
}