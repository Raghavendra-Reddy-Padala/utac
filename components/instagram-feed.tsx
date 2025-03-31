import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

const instagramPosts = [
  {
    id: "1",
    imageUrl: "/images/instagram-1.jpg",
    likes: 124,
    comments: 8,
  },
  {
    id: "2",
    imageUrl: "/images/instagram-2.jpg",
    likes: 89,
    comments: 5,
  },
  {
    id: "3",
    imageUrl: "/images/instagram-3.jpg",
    likes: 210,
    comments: 12,
  },
  {
    id: "4",
    imageUrl: "/images/instagram-4.jpg",
    likes: 156,
    comments: 9,
  },
  {
    id: "5",
    imageUrl: "/images/instagram-5.jpg",
    likes: 173,
    comments: 14,
  },
  {
    id: "6",
    imageUrl: "/images/instagram-6.jpg",
    likes: 92,
    comments: 7,
  },
]

export default function InstagramFeed() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="h2 mb-2">
              Follow Us on <span className="text-primary">Instagram</span>
            </h2>
            <p className="text-gray-400">Stay updated with our latest projects and automotive insights.</p>
          </div>
          <Link
            href="https://instagram.com/utac_hyderabad"
            target="_blank"
            className="mt-4 md:mt-0 flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <Instagram size={18} />
            <span>@utac_hyderabad</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href={`https://instagram.com/p/${post.id}`}
              target="_blank"
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                alt="Instagram Post"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
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
                      className="text-primary"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
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
                      className="text-primary"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    {post.comments}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

