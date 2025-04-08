import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://utac.in"

  // Static routes
  const routes = ["", "/services", "/about", "/gallery", "/blog", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/blog" ? "weekly" : ("monthly" as "weekly" | "monthly"),
    priority: route === "" ? 1 : 0.8,
  }))

  // In a real application, you would fetch dynamic routes like blog posts
  // const blogPosts = await fetchBlogPosts()
  // const blogRoutes = blogPosts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'monthly' as 'monthly',
  //   priority: 0.6,
  // }))

  return [
    ...routes,
    // ...blogRoutes
  ]
}

