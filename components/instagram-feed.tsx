import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

// Replace these with your actual screenshot images
// You'll need to save the screenshots in your public/images folder
const instagramPosts = [
  {
    id: "1",
    imageUrl: "/images/insta-screenshot-1.jpg",
    likes: 124,
    comments: 8,
  },
  {
    id: "2",
    imageUrl: "/images/insta-screenshot-2.jpg",
    likes: 89,
    comments: 5,
  },
  {
    id: "3",
    imageUrl: "/images/insta-screenshot-3.jpg",
    likes: 210,
    comments: 12,
  },
  {
    id: "4",
    imageUrl: "/images/insta-screenshot-4.jpg",
    likes: 156,
    comments: 9,
  },
  {
    id: "5",
    imageUrl: "/images/insta-screenshot-5.jpg",
    likes: 173,
    comments: 14,
  },
  {
    id: "6",
    imageUrl: "/images/insta-screenshot-6.jpg",
    likes: 92,
    comments: 7,
  },
]

export default function InstagramFeed() {
  const instagramProfileUrl = "https://instagram.com/utac_hyderabad";
  
  return (
    <section className="py-12 md:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white">
              Follow Us on <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Instagram</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base">Stay updated with our latest projects and automotive insights.</p>
          </div>
          <Link
            href={instagramProfileUrl}
            target="_blank"
            className="mt-4 md:mt-0 flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 group"
          >
            <span className="relative">
              <Instagram size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </span>
            <span className="font-medium">@utac_hyderabad</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href={instagramProfileUrl}
              target="_blank"
              className="group relative overflow-hidden rounded-lg aspect-square shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                alt="Instagram Post"
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3">
                <div className="flex justify-between text-white text-sm">
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    {post.comments}
                  </span>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-2 mb-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">View on Instagram</div>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/20 rounded-lg transition-colors duration-300"></div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <Link
            href={instagramProfileUrl}
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-medium transition-all duration-300 gap-2 hover:gap-3"
          >
            <span>See More on Instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}