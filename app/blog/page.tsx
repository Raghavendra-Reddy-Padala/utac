import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"

const blogPosts = [
  {
    title: "Understanding Engine Oil: What Type is Best for Your Car?",
    excerpt:
      "Learn about different types of engine oils, their specifications, and how to choose the right one for your vehicle.",
    image: "/images/blog-1.jpg",
    date: "June 15, 2023",
    author: "Rahul Mehta",
    readTime: "5 min read",
    slug: "understanding-engine-oil",
  },
  {
    title: "Common AC Problems in Cars During Summer",
    excerpt:
      "Discover the most frequent air conditioning issues that occur during hot weather and how to prevent them.",
    image: "/images/blog-2.jpg",
    date: "May 22, 2023",
    author: "Priya Sharma",
    readTime: "4 min read",
    slug: "common-ac-problems",
  },
  {
    title: "The Importance of Regular Brake Maintenance",
    excerpt: "Why regular brake inspections and maintenance are crucial for your safety and vehicle performance.",
    image: "/images/blog-3.jpg",
    date: "April 10, 2023",
    author: "Vikram Singh",
    readTime: "6 min read",
    slug: "brake-maintenance",
  },
  {
    title: "Performance Tuning: Is It Right for Your Car?",
    excerpt: "Explore the benefits and considerations of performance tuning for different types of vehicles.",
    image: "/images/blog-4.jpg",
    date: "March 5, 2023",
    author: "Aditya Kumar",
    readTime: "7 min read",
    slug: "performance-tuning-guide",
  },
]

export default function BlogPage() {
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
          Automotive <span className="text-primary">Blog</span>
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl">
          Expert insights, maintenance tips, and automotive knowledge to help you get the most from your vehicle.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="group bg-black/50 border border-primary/20 rounded-lg overflow-hidden hover:border-primary transition-all duration-300"
            >
              <div className="relative h-60">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center mr-4">
                    <User size={14} className="mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="font-orbitron text-xl mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="text-primary group-hover:text-accent transition-colors flex items-center">
                  Read More
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
                    className="ml-1 group-hover:ml-2 transition-all"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

