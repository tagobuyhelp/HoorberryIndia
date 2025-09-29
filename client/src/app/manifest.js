export const dynamic = 'force-static'

export default function manifest() {
  return {
    name: 'Tarik Aziz - Full Stack MERN Developer',
    short_name: 'Tarik Aziz',
    description: 'Professional web development services by Tarik Aziz, Full-Stack MERN Developer in Kolkata',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#3b82f6',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity', 'developer'],
    lang: 'en',
    dir: 'ltr',
    icons: [
      {
        src: '/Tarik_Aziz_Full_Stack_MERN_Developer.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
        purpose: 'maskable'
      },
      {
        src: '/Tarik_Aziz_Full_Stack_MERN_Developer.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
        purpose: 'any'
      }
    ],
    screenshots: [
      {
        src: '/Tarik_Aziz_Full_Stack_MERN_Developer.jpg',
        sizes: '1280x720',
        type: 'image/jpeg',
        form_factor: 'wide'
      }
    ],
    shortcuts: [
      {
        name: 'Services',
        short_name: 'Services',
        description: 'View web development services',
        url: '/services',
        icons: [
          {
            src: '/Tarik_Aziz_Full_Stack_MERN_Developer.jpg',
            sizes: '96x96'
          }
        ]
      },
      {
        name: 'Contact',
        short_name: 'Contact',
        description: 'Get in touch for projects',
        url: '/contact',
        icons: [
          {
            src: '/Tarik_Aziz_Full_Stack_MERN_Developer.jpg',
            sizes: '96x96'
          }
        ]
      },
      {
        name: 'Blog',
        short_name: 'Blog',
        description: 'Read development insights',
        url: '/blog',
        icons: [
          {
            src: '/Tarik_Aziz_Full_Stack_MERN_Developer.jpg',
            sizes: '96x96'
          }
        ]
      }
    ]
  }
}