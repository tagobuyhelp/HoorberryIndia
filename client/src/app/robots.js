export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/api/'],
    },
    sitemap: 'https://tarikaziz.com/sitemap.xml',
    host: 'https://tarikaziz.com',
  }
}