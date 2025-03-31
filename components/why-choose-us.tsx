"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, Clock, Award, PenToolIcon as Tool, ShieldCheck } from "lucide-react"

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

const features = [
  {
    icon: <CheckCircle size={32} />,
    title: "German Engineering Standards",
    description: "We bring precision and excellence of German automotive engineering to every service.",
    delay: 0.1,
  },
  {
    icon: <Clock size={32} />,
    title: "Quick Turnaround Time",
    description: "Efficient service with minimal downtime to get you back on the road quickly.",
    delay: 0.2,
  },
  {
    icon: <Award size={32} />,
    title: "5+ Years Experience",
    description: "Specialized automotive expertise with a proven track record in Hyderabad.",
    delay: 0.3,
  },
  {
    icon: <Tool size={32} />,
    title: "Advanced Equipment",
    description: "State-of-the-art diagnostic and repair tools for precise servicing.",
    delay: 0.4,
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Service Warranty",
    description: "Comprehensive warranty on all services and OEM parts replacement.",
    delay: 0.5,
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-black/95 to-black relative overflow-hidden">
      {/* Circuit board background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/circuit-bg.svg')] bg-repeat bg-[length:500px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="h2 mb-4">
            Why Choose <span className="text-primary">ÜTAC</span>
          </h2>
          <p className="text-gray-400">
            We combine technical expertise with customer-focused service to deliver an exceptional automotive care
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Feature({ icon, title, description, delay, isInView }: FeatureProps & { isInView: boolean }) {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="bg-black/50 border border-primary/20 rounded-lg p-6 hover:border-primary transition-all duration-300"
    >
      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
        {icon}
      </div>
      <h3 className="font-orbitron text-xl mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

