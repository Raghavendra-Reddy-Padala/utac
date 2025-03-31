"use client"

import type React from "react"

import { useRef } from "react"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  Wrench,
  SettingsIcon,
  Thermometer,
  AlertTriangle,
  Gauge,
  Battery,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceItemProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

const services: ServiceItemProps[] = [
  {
    title: "Engine Repair",
    description: "Complete diagnostics and repair for all engine types with OEM parts.",
    icon: <SettingsIcon className="text-primary" size={32} />,
    href: "/services/engine-repair",
  },
  {
    title: "Car Servicing",
    description: "Comprehensive maintenance packages tailored to your vehicle's needs.",
    icon: <Wrench className="text-primary" size={32} />,
    href: "/services/car-servicing",
  },
  {
    title: "A/C Repair",
    description: "Expert climate control system diagnostics, repair and maintenance.",
    icon: <Thermometer className="text-primary" size={32} />,
    href: "/services/ac-repair",
  },
  {
    title: "Diagnostics",
    description: "Advanced computerized diagnostics to identify and solve complex issues.",
    icon: <AlertTriangle className="text-primary" size={32} />,
    href: "/services/diagnostics",
  },
  {
    title: "Performance Tuning",
    description: "Precision tuning to enhance your vehicle's performance and efficiency.",
    icon: <Gauge className="text-primary" size={32} />,
    href: "/services/performance-tuning",
  },
  {
    title: "Electrical Systems",
    description: "Complete electrical system diagnostics and repair services.",
    icon: <Battery className="text-primary" size={32} />,
    href: "/services/electrical-systems",
  },
]

export default function ServiceShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return

    const { current } = scrollContainerRef
    const scrollAmount = direction === "left" ? -current.clientWidth / 2 : current.clientWidth / 2

    current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-24 relative bg-gradient-to-b from-black to-black/95">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="h2 mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Comprehensive automotive solutions delivered with technical precision and German engineering standards.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary hover:border-accent"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Scroll left</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary hover:border-accent"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceItem({ title, description, icon, href }: ServiceItemProps) {
  return (
    <Link
      href={href}
      className="group min-w-[280px] md:min-w-[350px] bg-black/80 border border-primary/20 rounded-lg p-6 hover:border-primary transition-all duration-300"
    >
      <div className="h-16 w-16 rounded-lg bg-black/50 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <h3 className="font-orbitron text-xl mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex items-center text-sm text-primary group-hover:text-accent transition-colors">
        Learn more <ChevronRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
      </div>
    </Link>
  )
}

