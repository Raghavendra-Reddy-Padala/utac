import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Engine Repair", category: "Repairs" },
  { src: "/images/gallery-2.jpg", alt: "Car Servicing", category: "Servicing" },
  { src: "/images/gallery-3.jpg", alt: "Workshop", category: "Facility" },
  { src: "/images/gallery-4.jpg", alt: "Performance Tuning", category: "Tuning" },
  { src: "/images/gallery-5.jpg", alt: "Diagnostic Equipment", category: "Equipment" },
  { src: "/images/gallery-6.jpg", alt: "Car Detail", category: "Detailing" },
  { src: "/images/gallery-7.jpg", alt: "Electrical Repair", category: "Repairs" },
  { src: "/images/gallery-8.jpg", alt: "Team Working", category: "Team" },
  { src: "/images/gallery-9.jpg", alt: "Customer Consultation", category: "Customers" },
]

export default function GalleryPage() {
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
          Our <span className="text-primary">Gallery</span>
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl">
          Explore our workshop, equipment, and completed projects through our gallery.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="bg-primary/80 text-white text-xs px-2 py-1 rounded inline-block mb-2">
                    {image.category}
                  </div>
                  <h3 className="text-white font-medium">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

