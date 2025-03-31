"use client"

import { useEffect, useRef } from "react"
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
      {/* Professional Car Service Animation Background */}
      <div className="absolute inset-0 z-0 bg-slate-900 overflow-hidden">
        {/* Dynamic Automotive Elements */}
        <div className="absolute inset-0">
          {/* Car silhouette */}
          <div className="car-silhouette"></div>
          
          {/* Engine parts animation */}
          <div className="piston piston-1"></div>
          <div className="piston piston-2"></div>
          <div className="piston piston-3"></div>
          <div className="piston piston-4"></div>
          
          {/* Diagnostic scan lines */}
          <div className="diagnostic-scan"></div>
          
          {/* Speedometer */}
          <div className="speedometer">
            <div className="speedometer-needle"></div>
          </div>
          
          {/* Spark plugs firing */}
          <div className="spark spark-1"></div>
          <div className="spark spark-2"></div>
          <div className="spark spark-3"></div>
          <div className="spark spark-4"></div>
          
          {/* Tool elements */}
          <div className="wrench wrench-1"></div>
          <div className="wrench wrench-2"></div>
        </div>
        
        {/* Tech grid overlay for modern feel */}
        <div className="tech-grid"></div>
        
        {/* Overlay gradient with automotive color scheme */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container relative z-20 h-full flex flex-col justify-center items-start px-6 pt-20 md:pt-0">
        <div ref={parallaxRef} className="max-w-3xl">
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-accent tracking-widest mb-2">UTAC</h2>
          
          <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider mb-4 text-white">
            <span className="text-primary">Engineering Excellence,</span>
            <br className="hidden sm:block" />
            <span className="sm:mt-2 inline-block">Automotive Perfection</span>
          </h1>
          
          <div className="h-1 w-32 bg-primary my-4 relative">
            <span className="absolute top-1/2 right-0 h-3 w-3 rounded-full bg-accent -translate-y-1/2 animate-pulse"></span>
          </div>
          
          <p className="text-lg max-w-2xl mb-6 text-gray-300 font-rajdhani">
            Premium automotive maintenance and repair services with German engineering philosophy and local expertise.
            Over 5 years serving Hyderabad with technical excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild className="hexagon-button group w-full sm:w-auto text-lg py-6">
              <Link href="/contact">
                Book a Service
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary hover:border-accent w-full sm:w-auto text-lg py-6">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
        
        {/* Service Cards - Mobile Friendly and not shown on mobile */}
        <div className="hidden sm:block sm:absolute sm:bottom-32 sm:right-8">
          <div className="grid grid-cols-2 gap-3 hardware-accelerated">
            <ServiceCard title="Engine Repair" icon="engine" delay={0} />
            <ServiceCard title="Car Servicing" icon="car" delay={0.2} />
            <ServiceCard title="AC Repair" icon="snowflake" delay={0.4} />
            <ServiceCard title="Diagnostics" icon="diagnostic" delay={0.6} />
          </div>
        </div>
        
        {/* Scroll Indicator - Hidden on mobile to prevent overlapping */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center animate-bounce bg-black/50 px-4 py-2 rounded-full">
          <span className="text-xs text-gray-300 mb-1 font-orbitron">SCROLL DOWN</span>
          <ChevronDown className="text-primary" size={20} />
        </div>
      </div>
      
      <style jsx global>{`
        /* Modern Car Silhouette Animation */
        .car-silhouette {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 25%;
          max-width: 800px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'%3E%3Cpath fill='rgba(100, 255, 218, 0.1)' d='M544 192h-16L419.22 56.02A64.025 64.025 0 0 0 369.24 32H155.33c-26.17 0-49.7 15.93-59.42 40.23L48 194.26C20.44 201.4 0 226.21 0 256v112c0 8.84 7.16 16 16 16h48c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h48c8.84 0 16-7.16 16-16v-80c0-53.02-42.98-96-96-96zM160 432c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm72-240H116.93l38.4-96H232v96zm48 0V96h89.24l76.8 96H280zm200 240c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48z'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          opacity: 0.25;
          filter: drop-shadow(0 0 20px rgba(100, 255, 218, 0.5));
          animation: car-pulse 4s infinite ease-in-out;
        }
        
        @keyframes car-pulse {
          0%, 100% { opacity: 0.15; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.25; transform: translateX(-50%) scale(1.05); }
        }
        
        /* Engine Pistons Animation */
        .piston {
          position: absolute;
          width: 40px;
          height: 120px;
          background: linear-gradient(to bottom, 
            rgba(100, 255, 218, 0.05) 0%,
            rgba(100, 255, 218, 0.2) 50%,
            rgba(100, 255, 218, 0.05) 100%);
          border-radius: 5px;
        }
        
        .piston-1 {
          top: 20%;
          left: 20%;
          animation: piston-move 1.5s infinite ease-in-out;
        }
        
        .piston-2 {
          top: 30%;
          left: 30%;
          animation: piston-move 1.5s infinite ease-in-out;
          animation-delay: -0.3s;
        }
        
        .piston-3 {
          top: 20%;
          right: 20%;
          animation: piston-move 1.5s infinite ease-in-out;
          animation-delay: -0.6s;
        }
        
        .piston-4 {
          top: 30%;
          right: 30%;
          animation: piston-move 1.5s infinite ease-in-out;
          animation-delay: -0.9s;
        }
        
        @keyframes piston-move {
          0%, 100% { transform: translateY(-20px); }
          50% { transform: translateY(20px); }
        }
        
        /* Diagnostic Scan Animation */
        .diagnostic-scan {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 30px,
            rgba(100, 255, 218, 0.03) 30px,
            rgba(100, 255, 218, 0.03) 31px
          );
          animation: scan-move 10s linear infinite;
          opacity: 0.6;
        }
        
        @keyframes scan-move {
          0% { background-position: 0 0; }
          100% { background-position: 0 100px; }
        }
        
        /* Speedometer Animation */
        .speedometer {
          position: absolute;
          bottom: 20%;
          right: 15%;
          width: 150px;
          height: 75px;
          border-radius: 75px 75px 0 0;
          border: 2px solid rgba(100, 255, 218, 0.15);
          border-bottom: none;
          transform: translateX(-50%);
        }
        
        .speedometer:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: rgba(100, 255, 218, 0.15);
        }
        
        .speedometer-needle {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 2px;
          height: 65px;
          background-color: rgba(100, 255, 218, 0.5);
          transform-origin: bottom center;
          animation: needle-move 4s ease-in-out infinite;
        }
        
        @keyframes needle-move {
          0% { transform: rotate(-90deg); }
          20% { transform: rotate(20deg); }
          30% { transform: rotate(0deg); }
          40% { transform: rotate(60deg); }
          50% { transform: rotate(30deg); }
          70% { transform: rotate(90deg); }
          80% { transform: rotate(40deg); }
          100% { transform: rotate(-90deg); }
        }
        
        /* Spark Plug Animation */
        .spark {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 20px 10px rgba(100, 255, 218, 0.6);
          opacity: 0;
        }
        
        .spark-1 {
          top: 40%;
          left: 22%;
          animation: spark 2s infinite;
        }
        
        .spark-2 {
          top: 45%;
          left: 28%;
          animation: spark 2s infinite;
          animation-delay: -0.5s;
        }
        
        .spark-3 {
          top: 40%;
          right: 22%;
          animation: spark 2s infinite;
          animation-delay: -1s;
        }
        
        .spark-4 {
          top: 45%;
          right: 28%;
          animation: spark 2s infinite;
          animation-delay: -1.5s;
        }
        
        @keyframes spark {
          0%, 100% { opacity: 0; transform: scale(0); }
          10%, 20% { opacity: 1; transform: scale(1.5); }
          30% { opacity: 0; transform: scale(0); }
        }
        
        /* Wrench Tool Animation */
        .wrench {
          position: absolute;
          width: 90px;
          height: 90px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='rgba(100, 255, 218, 0.15)' d='M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          opacity: 0.2;
        }
        
        .wrench-1 {
          bottom: 15%;
          left: 15%;
          animation: wrench-rotate 15s linear infinite;
        }
        
        .wrench-2 {
          top: 15%;
          right: 15%;
          animation: wrench-rotate 20s linear infinite reverse;
        }
        
        @keyframes wrench-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Tech Grid for Modern Feel */
        .tech-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(to right, rgba(100, 255, 218, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 255, 218, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  )
}