"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight, Send, ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/images/utac-logo.png" alt="ÜTAC Logo" width={180} height={60} className="object-contain" />
            </Link>
            <p className="text-gray-400 mb-6">
              ÜTAC combines German engineering philosophy with local expertise to deliver premium automotive maintenance
              and repair services in Hyderabad.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/utac"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com/utac"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com/utac_hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com/company/utac"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2 text-primary" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2 text-primary" />
                  About ÜTAC
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2 text-primary" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2 text-primary" />
                  Automotive Tips
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2 text-primary" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2 text-primary" />
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-xl mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/engine-repair"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2 text-primary" />
                  Engine Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/services/car-servicing"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2 text-primary" />
                  Car Servicing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ac-repair"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2 text-primary" />
                  AC Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/services/diagnostics"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2 text-primary" />
                  Diagnostics
                </Link>
              </li>
              <li>
                <Link
                  href="/services/performance-tuning"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2 text-primary" />
                  Performance Tuning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/electrical-systems"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center"
                >
                  <ChevronRight size={16} className="mr-2 text-primary" />
                  Electrical Systems
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-xl mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for automotive tips, exclusive offers and updates.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-black/50 border-primary/30 focus:border-primary transition-colors pl-4 pr-12"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 bg-primary hover:bg-accent"
                >
                  <Send size={16} />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} ÜTAC. All rights reserved.</p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      <button
        className="back-to-top fixed bottom-24 right-4 h-10 w-10 bg-primary hover:bg-accent rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  )
}

