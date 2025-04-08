"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Spline from "@splinetool/react-spline"

export default function HeroSection() {
  const parallaxRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [splineApp, setSplineApp] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return
      const scrollY = window.scrollY
      const element = parallaxRef.current as HTMLElement
      element.style.transform = `translateY(${scrollY * 0.3}px)`
      element.style.opacity = `${1 - scrollY * 0.001}`
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Add window resize handler for mobile responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (splineApp) {
        const obj = (splineApp as any).findObjectByName("Car")
        if (obj) {
          // Adjust car position and size based on screen size - INCREASED MOBILE SCALE
          if (window.innerWidth < 768) {
            obj.position.set(0, -0.8, 0) // Move car up on mobile
            obj.scale.set(2.0, 2.0, 2.0) // Larger scale on mobile
          } else if (window.innerWidth < 1024) {
            obj.position.set(0, -0.2, 0) // Slight adjustment for tablets
            obj.scale.set(1.2, 1.2, 1.2) // Medium scale for tablets
          } else {
            obj.position.set(0, 0, 0) // Default position
            obj.scale.set(1, 1, 1) // Default scale
          }
        }
      }
    }
    window.addEventListener("resize", handleResize)
    if (splineApp) handleResize() // Apply on initial load

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [splineApp])

  const onLoad = (splineApp: any) => {
    setIsLoading(false)
    setSplineApp(splineApp)

    // Add event listeners for interactivity once loaded
    if (splineApp) {
      const obj = splineApp.findObjectByName("Car")
      if (obj) {
        // Improved mobile responsiveness with MUCH larger size adjustment
        if (window.innerWidth < 768) {
          obj.position.set(0, -0.8, 0) // Adjusted position higher for better mobile view
          obj.scale.set(2.8, 2.8, 2.8) // Significantly increased size on mobile for better visibility
        } else if (window.innerWidth < 1024) {
          obj.position.set(0, -0.2, 0)
          obj.scale.set(1.2, 1.2, 1.2)
        }

        // Remove any background planes or elements that might be causing a different background
        const scene = splineApp.scene
        if (scene) {
          scene.traverse((child: any) => {
            if (child.name && (child.name.includes("Background") || child.name.includes("Plane"))) {
              child.visible = false
            }
          })
        }

        // Set the background color of the Spline scene to match the hero section
        if (splineApp.renderer) {
          splineApp.renderer.setClearColor(0x050505, 1); // Match the hero section background
        }

        obj.addEventListener("mouseDown", () => {
          // Add rotation animation on click
          if (obj.rotation) {
            const targetY = obj.rotation.y + Math.PI / 2
            const animate = () => {
              const diff = targetY - obj.rotation.y
              if (Math.abs(diff) > 0.01) {
                obj.rotation.y += diff * 0.1
                requestAnimationFrame(animate)
              }
            }
            animate()
          }
        })

        obj.addEventListener("mouseHover", () => {
          // Add subtle hover effect - now with conditional scale based on device size
          if (obj.scale) {
            const originalScale = window.innerWidth < 768 ? 1.6 : window.innerWidth < 1024 ? 1.2 : 1
            obj.scale.set(originalScale * 1.03, originalScale * 1.03, originalScale * 1.03)
          }

          // Add glow effect to car
          const carMaterial = obj.material
          if (carMaterial) {
            carMaterial.emissiveIntensity = 0.2
          }
        })

        obj.addEventListener("mouseLeave", () => {
          // Reset on mouse leave - with updated scale values
          if (obj.scale) {
            const originalScale = window.innerWidth < 768 ? 1.6 : window.innerWidth < 1024 ? 1.2 : 1
            obj.scale.set(originalScale, originalScale, originalScale)
          }

          // Remove glow effect
          const carMaterial = obj.material
          if (carMaterial) {
            carMaterial.emissiveIntensity = 0
          }
        })
      }

      // Add subtle ambient animation for better integration
      const animate = () => {
        const obj = splineApp.findObjectByName("Car")
        if (obj) {
          // Subtle floating animation
          obj.position.y = obj.position.y + Math.sin(Date.now() * 0.001) * 0.0005

          // Subtle rotation
          if (obj.rotation) {
            obj.rotation.y += 0.0005
          }
        }
        requestAnimationFrame(animate)
      }
      animate()
    }
  }

  return (
    <section className="relative h-screen overflow-hidden" style={{ backgroundColor: "#050505" }}>
      {/* Two column layout for desktop, stack for mobile */}
      <div className="container relative z-20 h-full flex flex-col lg:flex-row items-center justify-between px-4 md:px-6 pt-16 lg:pt-0 gap-4 md:gap-8">
        {/* Left column - Text content */}
        <div
          ref={parallaxRef}
          className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left mb-8 lg:mb-0"
        >
          <h2 className="font-orbitron text-xl md:text-3xl font-bold text-red-600 tracking-widest mb-2">UTAC</h2>

          <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-4 text-white">
            <span className="text-red-600">Engineering Excellence,</span>
            <br className="hidden sm:block" />
            <span className="mt-2 inline-block">Automotive Perfection</span>
          </h1>

          <div className="h-1 w-32 bg-red-600 my-4 mx-auto lg:mx-0 relative">
            <span className="absolute top-1/2 right-0 h-3 w-3 rounded-full bg-red-500 -translate-y-1/2 animate-pulse"></span>
          </div>

          <p className="text-base md:text-lg max-w-2xl mx-auto lg:mx-0 mb-6 text-gray-300 font-rajdhani">
            Premium automotive maintenance and repair services with German engineering philosophy and local expertise.
            Over 5 years serving Hyderabad with technical excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 text-white group w-full sm:w-auto text-base md:text-lg py-4 md:py-6 rounded-none relative overflow-hidden"
            >
              <Link href="/contact">
                <span className="relative z-10 flex items-center justify-center">
                  Book a Service
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </span>
                {/* Animated border effect */}
                <span className="absolute inset-0 border border-red-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600/10 hover:border-red-500 w-full sm:w-auto text-base md:text-lg py-4 md:py-6 rounded-none"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>

        {/* Right column - 3D Model with better integration */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-full relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Spline container with pure black background */}
          <div className="w-full h-full relative">
            {/* Increased height on mobile for better model display */}
            <div className="absolute inset-0 z-10">
              <Spline
                scene="https://prod.spline.design/HXl5Bc8rkq74-yF5/scene.splinecode"
                onLoad={onLoad}
                className="w-full h-full"
                style={{ background: "#050505" }}
              />
            </div>

            {/* Interactive hint */}
            {!isLoading && (
              <div className="absolute bottom-8 right-8 bg-black/50 backdrop-blur-md text-red-600 px-4 py-2 rounded-lg font-orbitron text-xs sm:text-sm z-20 border border-red-600/30">
              Click to interact
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
<div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center bg-black/50 px-4 py-2 rounded-full z-30 border border-red-600/20">
        <span className="text-xs text-gray-300 mb-1 font-orbitron">SCROLL DOWN</span>
        <ChevronDown className="text-red-600" size={20} />
      </div>
    </section>
  )
}