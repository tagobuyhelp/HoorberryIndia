export const dynamic = 'force-static'

export default function sitemap() {
  const baseUrl = 'http://hoorberryindia.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Blog posts - these should match the actual blog posts in your application
  const blogPosts = [
    {
      slug: 'how-much-does-it-cost-to-hire-web-developer-kolkata-2025',
      publishDate: '2025-01-15',
      priority: 0.7,
    },
    {
      slug: 'react-vs-nextjs-kolkata-2025',
      publishDate: '2025-01-10',
      priority: 0.7,
    },
  ]

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: 'monthly',
    priority: post.priority,
  }))

  return [...staticPages, ...blogPages]
}