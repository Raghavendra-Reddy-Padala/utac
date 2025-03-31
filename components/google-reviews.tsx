"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ReviewProps {
  name: string
  avatar: string
  rating: number
  date: string
  text: string
}

const reviews: ReviewProps[] = [
  {
    name: "Ankit Verma",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
    date: "2 weeks ago",
    text: "ÜTAC's service quality is exceptional! My BMW had persistent engine issues that two other shops couldn't resolve. Their diagnostic approach was methodical and they fixed it right the first time. The attention to detail and technical knowledge is impressive.",
  },
  {
    name: "Deepa Reddy",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
    date: "1 month ago",
    text: "I've been taking my Audi to ÜTAC for the past 2 years and have always received excellent service. Their technicians understand German cars inside out. They explain everything clearly and never push unnecessary services. Highly recommended!",
  },
  {
    name: "Rajesh Kumar",
    avatar: "/images/avatar-3.jpg",
    rating: 4,
    date: "3 months ago",
    text: "Great experience with ÜTAC for my Mercedes AC repair. They diagnosed and fixed an issue that had been bothering me for months. Fair pricing compared to the dealership and much more personal service. Only giving 4 stars because the wait time for appointments can be long.",
  },
  {
    name: "Sonali Joshi",
    avatar: "/images/avatar-4.jpg",
    rating: 5,
    date: "2 months ago",
    text: "ÜTAC completely transformed my Volkswagen's performance with their tuning service. The car feels like new with improved power delivery and better fuel efficiency. Their technical expertise sets them apart from regular workshops in Hyderabad.",
  },
]

export default function GoogleReviews() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const checkScrollable = () => {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
    }

    container.addEventListener("scroll", checkScrollable)
    window.addEventListener("resize", checkScrollable)

    checkScrollable()

    return () => {
      container.removeEventListener("scroll", checkScrollable)
      window.removeEventListener("resize", checkScrollable)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scrollAmount = direction === "left" ? -container.clientWidth / 2 : container.clientWidth / 2

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/circuit-bg.svg')] bg-repeat bg-[length:500px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="h2 mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} fill="#DC143C" color="#DC143C" size={20} />
              ))}
              <span className="ml-2 text-gray-300">4.9 out of 5</span>
            </div>
            <p className="text-gray-400">Based on 125+ verified Google reviews</p>
          </div>

          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary hover:border-accent disabled:opacity-50"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous reviews</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary hover:border-accent disabled:opacity-50"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next reviews</span>
            </Button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://g.page/r/utac-hyderabad/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <span className="font-medium">Leave a Review</span>
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
            >
              <path d="M7 17l9.2-9.2M17 17V7H7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ name, avatar, rating, date, text }: ReviewProps) {
  return (
    <div className="min-w-[300px] md:min-w-[400px] bg-black/80 border border-primary/20 rounded-lg p-6 snap-start">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
            <Image src={avatar || "/placeholder.svg"} alt={name} width={40} height={40} className="object-cover" />
          </div>
          <div>
            <h4 className="font-medium">{name}</h4>
            <p className="text-xs text-gray-400">{date}</p>
          </div>
        </div>
        <div className="flex items-center">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} fill="#DC143C" color="#DC143C" size={14} />
          ))}
        </div>
      </div>

      <div className="relative">
        <svg
          width="30"
          height="24"
          viewBox="0 0 30 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-1 -left-1 text-primary opacity-20"
        >
          <path
            d="M12.9533 0L8.09333 12H15.24L13.8667 24H16.5733L24 0H12.9533ZM12.9533 0L8.09333 12H0.946667L0 24H2.70667L9.6 0H12.9533Z"
            fill="currentColor"
          />
        </svg>

        <p className="pt-4 text-gray-300 relative z-10">{text}</p>

        <svg
          width="30"
          height="24"
          viewBox="0 0 30 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-1 -right-1 text-primary opacity-20 transform rotate-180"
        >
          <path
            d="M12.9533 0L8.09333 12H15.24L13.8667 24H16.5733L24 0H12.9533ZM12.9533 0L8.09333 12H0.946667L0 24H2.70667L9.6 0H12.9533Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  )
}

