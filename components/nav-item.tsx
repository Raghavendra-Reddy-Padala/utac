"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavItemProps {
  href: string
  label: string
  isScrolled: boolean
}

export default function NavItem({ href, label, isScrolled }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "relative group font-orbitron transition-all duration-300",
        isActive ? "text-primary" : "text-white",
        isScrolled ? "text-sm" : "text-base",
      )}
    >
      {label}
      <span
        className={cn(
          "absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
          isActive ? "w-full" : "w-0",
        )}
      ></span>
      {isActive && <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary/50 blur-sm"></span>}
    </Link>
  )
}

