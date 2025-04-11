import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-black">
      <div className="container mx-auto px-4">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </Link>
        </Button>

        <h1 className="h1 mb-6">
          About <span className="text-primary">ÜTAC</span>
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl">
          This is a placeholder for the About page. In a complete implementation, this page would display detailed
          information about ÜTAC's history, mission, team, and facilities.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden">
              <Image
                src="/images/workshop.png"
                alt="ÜTAC Workshop"
                width={500}
                height={250}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent mix-blend-multiply"></div>
            </div>
          </div>

          <div>
            <h2 className="h2 mb-6">Our Story</h2>
            <p className="text-gray-300 mb-6">
              ÜTAC was founded in 2018 with a vision to bring German engineering standards to automotive service in
              Hyderabad. Our founder, with over 15 years of experience working with premium German automotive brands,
              established ÜTAC to fill the gap between dealership services and local workshops.
            </p>

            <h3 className="h3 mb-4">Our Values</h3>
            <ul className="space-y-3 mb-8">
              {["Technical Excellence", "Transparency", "Customer Education", "Continuous Improvement"].map(
                (value, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 className="text-primary mr-3" size={20} />
                    <span>{value}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

