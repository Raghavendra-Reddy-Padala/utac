"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  icon: string
  delay: number
  description?: string
  href?: string
}

export default function ServiceCard({ title, icon, delay, description, href = "/services" }: ServiceCardProps) {
  const controls = useAnimation()
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut",
      },
    })
  }, [controls, delay])

  const renderIcon = () => {
    switch (icon) {
      case "engine":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M7 4V6H3V8H7V10H3V12H7V20H9V12H11V14H13V12H15V14H17V12H19V10H21V8H19V6H17V8H15V6H13V8H11V6H9V4H7Z"
              fill="currentColor"
            />
          </svg>
        )
      case "car":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M5 13L6.5 8.5H17.5L19 13M17.5 17C17.5 17.8284 16.8284 18.5 16 18.5C15.1716 18.5 14.5 17.8284 14.5 17C14.5 16.1716 15.1716 15.5 16 15.5C16.8284 15.5 17.5 16.1716 17.5 17ZM9.5 17C9.5 17.8284 8.82843 18.5 8 18.5C7.17157 18.5 6.5 17.8284 6.5 17C6.5 16.1716 7.17157 15.5 8 15.5C8.82843 15.5 9.5 16.1716 9.5 17ZM3 17H5.5M18.5 17H21M3 13L4 15H20L21 13M6.5 8.5L9 4H15L17.5 8.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case "snowflake":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M12 2V22M12 22L6 16M12 22L18 16M4.93 7.5L19.07 16.5M19.07 16.5L14.83 20.13M19.07 16.5L21.82 11.87M4.93 16.5L19.07 7.5M19.07 7.5L21.82 12.13M19.07 7.5L14.83 3.87M4.93 16.5L2.18 11.87M4.93 16.5L9.17 20.13M4.93 7.5L9.17 3.87M4.93 7.5L2.18 12.13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case "diagnostic":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M10.5 15.5C10.5 15.7761 10.2761 16 10 16C9.72386 16 9.5 15.7761 9.5 15.5C9.5 15.2239 9.72386 15 10 15C10.2761 15 10.5 15.2239 10.5 15.5Z"
              fill="currentColor"
            />
            <path
              d="M14.5 15.5C14.5 15.7761 14.2761 16 14 16C13.7239 16 13.5 15.7761 13.5 15.5C13.5 15.2239 13.7239 15 14 15C14.2761 15 14.5 15.2239 14.5 15.5Z"
              fill="currentColor"
            />
            <path
              d="M19 13H15C14.6706 13 14.411 12.7568 14.3038 12.4571C14.2549 12.3229 14.176 12.1683 14.058 12.0102C13.5162 11.3061 12.4343 11 12 11C11.5657 11 10.4838 11.3061 9.94198 12.0102C9.82403 12.1683 9.74508 12.3229 9.69624 12.4571C9.58896 12.7568 9.32942 13 9 13H5M20 9L18.5 9.5M4 9L5.5 9.5M12 4V5M3 19H21M9 7.8L9.5 7M14.5 7L15 7.8M4 17H20V11.5C20 9.567 18.433 8 16.5 8H7.5C5.567 8 4 9.567 4 11.5V17Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      whileHover={{ y: -5, scale: 1.05 }}
      className="bg-black/50 backdrop-blur-sm border border-primary/30 rounded-lg p-4 hover:border-accent transition-all duration-300"
    >
      <div className="flex items-center mb-3">
        <div className="h-10 w-10 rounded-md bg-black/50 flex items-center justify-center mr-3">{renderIcon()}</div>
        <h3 className="font-orbitron font-medium text-sm">{title}</h3>
      </div>

      {description && <p className="text-sm text-gray-400 mb-3">{description}</p>}

      <Link href={href} className="flex items-center text-xs text-primary hover:text-accent transition-colors">
        Learn more <ArrowRight size={12} className="ml-1" />
      </Link>
    </motion.div>
  )
}

