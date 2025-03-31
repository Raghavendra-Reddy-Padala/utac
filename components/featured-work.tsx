"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import BeforeAfterSlider from "./before-after-slider"

interface CaseStudyProps {
  title: string
  beforeImage: string
  afterImage: string
  description: string
  clientName: string
  clientCar: string
  active: boolean
}

const caseStudies = [
  {
    title: "Complete Engine Overhaul",
    beforeImage: "images/beforeimage.jpeg",
    afterImage: "/images/afterimage.jpeg",
    description:
      "Full engine rebuilding for a high-mileage BMW with significant wear. Restored to factory specifications with improved performance.",
    clientName: "Rahul Sharma",
    clientCar: "BMW 530i",
  },
  {
    title: "Performance Tuning",
    beforeImage: "/images/tuning-before.jpg",
    afterImage: "/images/tuning-after.jpg",
    description:
      "Custom ECU remapping and performance upgrades resulting in 15% power increase and improved throttle response.",
    clientName: "Priya Mehta",
    clientCar: "Audi S5",
  },
  {
    title: "Electrical System Restoration",
    beforeImage: "/images/electrical-before.jpg",
    afterImage: "/images/electrical-after.jpg",
    description:
      "Complete electrical system diagnostics and repair for a vehicle with intermittent failures. All systems restored to proper functionality.",
    clientName: "Avinash Kumar",
    clientCar: "Mercedes-Benz E-Class",
  },
]

export default function FeaturedWork() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="h2 mb-4">
              Featured <span className="text-primary">Work</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Explore our recent automotive repairs and transformations showcasing our technical expertise.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary hover:border-accent"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous case study</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary hover:border-accent"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next case study</span>
            </Button>
          </div>
        </div>

        <div className="relative">
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} active={index === currentIndex} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-8" : "bg-gray-600"
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudy({ title, beforeImage, afterImage, description, clientName, clientCar, active }: CaseStudyProps) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
        active ? "opacity-100 translate-x-0" : "opacity-0 absolute top-0 -translate-x-full"
      }`}
      style={{ display: active ? "grid" : "none" }}
    >
      <div className="relative">
        <BeforeAfterSlider beforeImage={beforeImage} afterImage={afterImage} height={400} />
        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded">
          <div className="flex items-center text-sm">
            <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
            Before & After
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="font-orbitron text-2xl md:text-3xl mb-4">{title}</h3>

        <div className="circuit-divider mb-6"></div>

        <p className="text-gray-300 mb-6">{description}</p>

        <div className="bg-black/50 border border-primary/30 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
              <Image
                src="/images/avatar-placeholder.jpg"
                alt={clientName}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <h4 className="font-medium">{clientName}</h4>
              <p className="text-sm text-gray-400">{clientCar}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-black/30 border border-primary/20 rounded-lg p-3 text-center"
          >
            <div className="text-2xl font-orbitron text-primary">24h</div>
            <div className="text-xs text-gray-400">Turnaround</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/30 border border-primary/20 rounded-lg p-3 text-center"
          >
            <div className="text-2xl font-orbitron text-primary">15%</div>
            <div className="text-xs text-gray-400">Performance Gain</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-black/30 border border-primary/20 rounded-lg p-3 text-center"
          >
            <div className="text-2xl font-orbitron text-primary">OEM</div>
            <div className="text-xs text-gray-400">Parts Used</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-black/30 border border-primary/20 rounded-lg p-3 text-center"
          >
            <div className="text-2xl font-orbitron text-primary">12m</div>
            <div className="text-xs text-gray-400">Warranty</div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

