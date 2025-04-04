import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import CountUp from "./count-up"

export default function AboutTeaser() {
  const competencies = [
    "German Engineering Standards",
    "OEM Parts & Equipment",
    "Certified Technicians",
    "Computer Diagnostics",
  ]

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute -top-10 right-0 opacity-5">
        <Image src="/images/circuit-pattern.svg" alt="Circuit Pattern" width={600} height={600} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden">
              <Image
                src="/images/workshop.jpeg"
                alt="ÜTAC Workshop"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent mix-blend-multiply"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-black p-6 rounded-lg border border-primary/30 z-20 hidden lg:block">
              <div className="flex gap-4">
                <div className="text-center">
                  <h3 className="font-orbitron text-4xl font-bold text-primary mb-1">
                    <CountUp end={5} duration={3} />+
                  </h3>
                  <p className="text-sm text-gray-400">Years of Experience</p>
                </div>
                <div className="w-px bg-primary/30"></div>
                <div className="text-center">
                  <h3 className="font-orbitron text-4xl font-bold text-primary mb-1">
                    <CountUp end={1500} duration={3} />+
                  </h3>
                  <p className="text-sm text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 -top-8 -left-8 w-48 h-48 rounded-full bg-primary/10 blur-2xl"></div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="h2 mb-6">
              <span className="text-primary">ÜTAC</span> - Übersteigen Technik Automotive Consultancy
            </h2>

            <div className="circuit-divider mb-8"></div>

            <p className="text-lg text-gray-300 mb-6">
              ÜTAC brings German engineering excellence to Hyderabad's automotive service landscape. With over 5 years
              of specialized expertise, we deliver premium maintenance and repair services that meet and exceed
              international standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {competencies.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" className="border-primary hover:border-accent">
              <Link href="/about" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

