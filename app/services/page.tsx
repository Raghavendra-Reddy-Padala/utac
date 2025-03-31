import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ServicesPage() {
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
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl">
          This is a placeholder for the Services page. In a complete implementation, this page would display detailed
          information about all services offered by ÜTAC.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Engine Repair",
            "Car Servicing",
            "AC Repair",
            "Diagnostics",
            "Performance Tuning",
            "Electrical Systems",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-black/80 border border-primary/20 rounded-lg p-6 hover:border-primary transition-all duration-300"
            >
              <h3 className="font-orbitron text-xl mb-4">{service}</h3>
              <p className="text-gray-400 mb-4">
                Detailed description of the {service.toLowerCase()} service would appear here, explaining the process,
                benefits, and what customers can expect.
              </p>
              <Link
                href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-primary hover:text-accent transition-colors flex items-center"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

