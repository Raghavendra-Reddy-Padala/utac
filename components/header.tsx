"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import NavItem from "./nav-item"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-black/90 backdrop-blur-sm py-2 shadow-lg" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="relative group">
          <div className={cn("transition-all duration-300", isScrolled ? "h-12 w-36" : "h-16 w-48")}>
            <Image src="/images/utac-logo.png" alt="ÜTAC Logo" fill className="object-contain" priority />
          </div>
          <span
            className={cn(
              "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
              isScrolled ? "h-0.5" : "h-1",
            )}
          ></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavItem href="/" label="Home" isScrolled={isScrolled} />
          <NavItem href="/services" label="Services" isScrolled={isScrolled} />
          <NavItem href="/about" label="About Us" isScrolled={isScrolled} />
          <NavItem href="/gallery" label="Gallery" isScrolled={isScrolled} />
          <NavItem href="/blog" label="Blog" isScrolled={isScrolled} />
          <NavItem href="/contact" label="Contact" isScrolled={isScrolled} />
        </nav>

        {/* Contact CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+919876543210" className="flex items-center gap-2 group">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-slow">
              <Phone size={18} className="text-primary group-hover:text-accent transition-colors" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Emergency Service</p>
              <p className="font-semibold">+91 98765 43210</p>
            </div>
          </a>
          <Button asChild className="hexagon-button">
            <Link href="/contact">Book Service</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 z-40 lg:hidden transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container h-full flex flex-col justify-center items-center gap-8">
          <div className="mb-8">
            <Image src="/images/utac-logo.png" alt="ÜTAC Logo" width={180} height={60} className="object-contain" />
          </div>

          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/about", label: "About Us" },
            { href: "/gallery", label: "Gallery" },
            { href: "/blog", label: "Blog" },
            { href: "/contact", label: "Contact" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="font-orbitron text-2xl font-semibold hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-8">
            <Button asChild className="hexagon-button">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Book Service
              </Link>
            </Button>
          </div>

          <a href="tel:+919876543210" className="mt-4 flex items-center gap-2">
            <Phone size={18} className="text-primary" />
            <span>+91 98765 43210</span>
          </a>
        </div>
      </div>

      {/* Header Bottom Border */}
      <div
        className={cn(
          "absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent",
          isScrolled ? "opacity-100" : "opacity-0",
        )}
      ></div>
    </header>
  )
}

