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
          // MUCH larger scale for all devices - especially mobile
          if (window.innerWidth < 768) {
            obj.position.set(0, 0, 0) // Center position
            obj.scale.set(5.0, 5.0, 5.0) // Extremely large scale for mobile
          } else if (window.innerWidth < 1024) {
            obj.position.set(0, 0, 0)
            obj.scale.set(3.0, 3.0, 3.0) // Very large scale for tablets
          } else {
            obj.position.set(0, 0, 0)
            obj.scale.set(2.0, 2.0, 2.0) // Larger scale for desktop
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

    if (splineApp) {
      const obj = splineApp.findObjectByName("Car")
      if (obj) {
        // DRAMATICALLY increased size adjustments based on screenshot feedback
        if (window.innerWidth < 768) {
          obj.position.set(0, 0.2, 0) // Center position, slightly higher
          obj.scale.set(5.0, 5.0, 5.0) // Extremely large scale for mobile
        } else if (window.innerWidth < 1024) {
          obj.position.set(0, 0, 0)
          obj.scale.set(3.0, 3.0, 3.0)
        } else {
          obj.scale.set(2.0, 2.0, 2.0)
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

        // Add highlight effect to car (emissive glow)
        if (obj.material) {
          obj.material.emissive = { r: 0.8, g: 0.2, b: 0.2 }; // Red glow
          obj.material.emissiveIntensity = 0.25; // More noticeable default glow
        }

        // Make touch interaction easier on mobile
        if (window.innerWidth < 768) {
          // Expand the touch area for easier interaction
          const expandTouchArea = () => {
            // Create a larger invisible touch area around the car
            const touchArea = splineApp.findObjectByName("TouchArea") || 
                             splineApp.createObject("TouchArea", { type: "Box" });
            
            if (touchArea) {
              touchArea.scale.set(8, 8, 8); // Extremely large touch area
              touchArea.position.set(obj.position.x, obj.position.y, obj.position.z);
              touchArea.visible = false; // Make it invisible
              
              // Forward interactions to the car
              touchArea.addEventListener("mouseDown", () => {
                rotateCarObject(obj);
              });
            }
          }
          
          expandTouchArea();
        }

        // Function to handle car rotation
        const rotateCarObject = (carObj: any) => {
          const targetY = carObj.rotation.y + Math.PI / 2;
          const animate = () => {
            const diff = targetY - carObj.rotation.y;
            if (Math.abs(diff) > 0.01) {
              carObj.rotation.y += diff * 0.1;
              requestAnimationFrame(animate);
            }
          }
          animate();
          
          // Highlight effect on interaction
          if (carObj.material) {
            carObj.material.emissiveIntensity = 0.5; // Stronger glow on interaction
            setTimeout(() => {
              carObj.material.emissiveIntensity = 0.25; // Return to default glow
            }, 1000);
          }
        }

        obj.addEventListener("mouseDown", () => {
          rotateCarObject(obj);
        });

        obj.addEventListener("mouseHover", () => {
          // Add subtle hover effect - now with conditional scale based on device size
          if (obj.scale) {
            const baseScale = window.innerWidth < 768 ? 5.0 : window.innerWidth < 1024 ? 3.0 : 2.0;
            obj.scale.set(baseScale * 1.05, baseScale * 1.05, baseScale * 1.05);
          }

          // Add glow effect to car
          if (obj.material) {
            obj.material.emissiveIntensity = 0.4;
          }
        })

        obj.addEventListener("mouseLeave", () => {
          // Reset on mouse leave - with updated scale values
          if (obj.scale) {
            const baseScale = window.innerWidth < 768 ? 5.0 : window.innerWidth < 1024 ? 3.0 : 2.0;
            obj.scale.set(baseScale, baseScale, baseScale);
          }

          // Reduce glow effect
          if (obj.material) {
            obj.material.emissiveIntensity = 0.25;
          }
        })
      }

      // Add subtle ambient animation for better integration
      const animate = () => {
        const obj = splineApp.findObjectByName("Car")
        if (obj) {
          // Subtle floating animation
          obj.position.y = obj.position.y + Math.sin(Date.now() * 0.001) * 0.0005

          // Very subtle rotation
          if (obj.rotation) {
            obj.rotation.y += 0.0002
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
        {/* Left column - Text content - Fixed font weight issues */}
        <div
          ref={parallaxRef}
          className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left mb-8 lg:mb-0"
        >
          <h2 className="font-orbitron text-xl md:text-3xl text-red-600 tracking-widest mb-2 font-normal">UTAC</h2>

          <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4 text-white font-normal">
            <span className="text-red-600 font-normal">Engineering</span><br className="hidden sm:block" />
            <span className="text-red-600 font-normal">Excellence,</span>
            <br className="hidden sm:block" />
            <span className="mt-2 inline-block font-normal">Automotive Perfection</span>
          </h1>

          <div className="h-1 w-32 bg-red-600 my-4 mx-auto lg:mx-0 relative">
            <span className="absolute top-1/2 right-0 h-3 w-3 rounded-full bg-red-500 -translate-y-1/2 animate-pulse"></span>
          </div>

          <p className="text-base md:text-lg max-w-2xl mx-auto lg:mx-0 mb-6 text-gray-300 font-rajdhani font-normal">
            Premium automotive maintenance and repair services with German engineering philosophy and local expertise.
            Over 5 years serving Hyderabad with technical excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 text-white group w-full sm:w-auto text-base md:text-lg py-4 md:py-6 rounded-none relative overflow-hidden font-normal"
            >
              <Link href="/contact">
                <span className="relative z-10 flex items-center justify-center font-normal">
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
              className="border-red-600 text-red-600 hover:bg-red-600/10 hover:border-red-500 w-full sm:w-auto text-base md:text-lg py-4 md:py-6 rounded-none font-normal"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>

        {/* Right column - 3D Model with much larger size */}
        <div className="w-full lg:w-1/2 h-80 sm:h-96 md:h-96 lg:h-full relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Spline container with pure black background */}
          <div className="w-full h-full relative">
            {/* Increased height significantly on mobile for better model display */}
            <div className="absolute inset-0 z-10">
              <Spline
                scene="https://prod.spline.design/HXl5Bc8rkq74-yF5/scene.splinecode"
                onLoad={onLoad}
                className="w-full h-full"
                style={{ background: "#050505" }}
              />
            </div>

            {/* Interactive hint - larger and more noticeable */}
            {!isLoading && ( <div className="absolute bottom-8 right-8 bg-black/50 backdrop-blur-md text-red-600 px-4 py-2 rounded-lg font-orbitron text-xs sm:text-sm z-20 border border-red-600/30"> Touch to interact </div> )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center bg-black/50 px-4 py-2 rounded-full z-30 border border-red-600/20">
        <span className="text-xs text-gray-300 mb-1 font-orbitron font-normal">SCROLL DOWN</span>
        <ChevronDown className="text-red-600" size={20} />
      </div>
    </section>
  )
}