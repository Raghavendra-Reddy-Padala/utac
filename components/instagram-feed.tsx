import Image from "next/image"
import Link from "next/link"
import { Instagram, ExternalLink } from "lucide-react"

// Updated Instagram posts with real data
const instagramPosts = [
  {
    id: "1",
    imageUrl: "https://res.cloudinary.com/djyny0qqn/image/upload/v1744375585/Screenshot_2025-04-11_181439_nstw7q.png",
    likes: "8k",
    views: "41.5k",
    instagramUrl: "https://www.instagram.com/reel/DBkpeDbJ6rv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: "2",
    imageUrl: "https://res.cloudinary.com/djyny0qqn/image/upload/v1744375722/Screenshot_2025-04-11_181829_lbmwef.png",
    likes: "5.5k",
    views: "34.1k",
    instagramUrl: "https://www.instagram.com/reel/DEmjyGdTRmT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: "3",
    imageUrl: "https://res.cloudinary.com/djyny0qqn/image/upload/v1744375803/Screenshot_2025-04-11_181949_beizth.png",
    likes: "2.5k",
    views: "10.8k",
    instagramUrl: "https://www.instagram.com/reel/DFxTs64T-lh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: "4",
    imageUrl: "https://res.cloudinary.com/djyny0qqn/image/upload/v1744375758/Screenshot_2025-04-11_181904_arlct5.png",
    likes: "1k",
    views: "2337",
    instagramUrl: "https://www.instagram.com/reel/DAjA9t2JPyt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: "5",
    imageUrl: "https://res.cloudinary.com/djyny0qqn/image/upload/v1744375697/Screenshot_2025-04-11_181801_cf8ivx.png",
    likes: "150",
    views: "1969",
    instagramUrl: "https://www.instagram.com/reel/DG-K0-ZTwQg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: "6",
    imageUrl: "https://res.cloudinary.com/djyny0qqn/image/upload/v1744375659/Screenshot_2025-04-11_181726_fce0or.png",
    likes: "100",
    views: "1553",
    instagramUrl: "https://www.instagram.com/reel/DGS1TVNT0hd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  }
]

export default function InstagramFeed() {
  const instagramProfileUrl = "https://instagram.com/utac_hyderabad";
  
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <Instagram size={28} className="text-primary" />
              <span>Instagram <span className="text-primary">Feed</span></span>
            </h2>
            <p className="text-gray-400 mt-2">Stay connected with our latest automotive content</p>
          </div>
          <Link
            href={instagramProfileUrl}
            target="_blank"
            className="mt-4 md:mt-0 bg-black border border-primary/20 hover:border-primary text-primary px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-200"
          >
            <span className="font-medium">@utac_hyderabad</span>
            <ExternalLink size={16} />
          </Link>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href={post.instagramUrl}
              target="_blank"
              className="group"
            >
              <div className="bg-black rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10">
                {/* Image Container */}
                <div className="aspect-square relative">
                  <Image
                    src={post.imageUrl}
                    alt="Instagram Post"
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  {/* Video indicator */}
                  <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="12" 
                      height="12" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-primary"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>

                {/* Instagram-style engagement stats */}
                <div className="px-3 py-2 bg-black border-t border-gray-800">
                  {/* Engagement Icons */}
                  <div className="flex gap-3 mt-1 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white group-hover:text-red-500 transition-colors"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>

                    {/* Share icon (paper airplane) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </div>

                  {/* Likes & Views */}
                  <div className="flex flex-col gap-0.5">
                    <div className="flex justify-between">
                      <span className="text-white text-xs font-medium">{post.likes} likes</span>
                      <span className="text-white text-xs font-medium flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        {post.views}
                      </span>
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      View on Instagram
                      <span className="inline-block ml-1">
                        <ExternalLink size={10} className="text-gray-400 inline-block" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href={instagramProfileUrl}
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-primary text-white font-medium transition-all duration-200 hover:bg-primary/90 gap-2"
          >
            <span>Follow Our Instagram</span>
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