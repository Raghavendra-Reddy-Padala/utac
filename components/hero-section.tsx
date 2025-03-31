"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import ServiceCard from "./service-card"

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return
      const scrollY = window.scrollY
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`
      parallaxRef.current.style.opacity = `${1 - scrollY * 0.002}`
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="object-cover w-full h-full">
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 h-full flex flex-col justify-center items-start pt-20">
        <div ref={parallaxRef} className="max-w-3xl">
          <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-2 text-white">
            <span className="text-primary">Engineering Excellence,</span>
            <br />
            Automotive Perfection
          </h1>
          <div className="h-1 w-32 bg-primary my-4 sm:my-6 relative">
            <span className="absolute top-1/2 right-0 h-3 w-3 rounded-full bg-accent -translate-y-1/2 animate-pulse"></span>
          </div>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8 text-gray-300 font-rajdhani">
            Premium automotive maintenance and repair services with German engineering philosophy and local expertise.
            Over 5 years serving Hyderabad with technical excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-8">
            <Button asChild className="hexagon-button group">
              <Link href="/contact">
                Book a Service
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary hover:border-accent">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>

        {/* Floating Service Cards */}
        <div className="absolute bottom-32 right-8 hidden xl:block">
          <div className="grid grid-cols-2 gap-4 hardware-accelerated">
            <ServiceCard title="Engine Repair" icon="engine" delay={0} />
            <ServiceCard title="Car Servicing" icon="car" delay={0.2} />
            <ServiceCard title="AC Repair" icon="snowflake" delay={0.4} />
            <ServiceCard title="Diagnostics" icon="diagnostic" delay={0.6} />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-xs text-gray-400 mb-2 font-orbitron">SCROLL DOWN</span>
          <ChevronDown className="text-primary" size={20} />
        </div>
      </div>

      {/* Gear Animation */}
      <div className="absolute top-40 right-20 opacity-20 hidden lg:block">
        <div className="animate-rotate-gear">
          <Image src="/images/gear.svg" alt="Rotating Gear" width={200} height={200} />
        </div>
      </div>
    </section>
  )
}

