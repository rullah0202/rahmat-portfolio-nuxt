export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Rahmat Ullah - Portfolio',
      meta: [
        { name: 'description', content: 'Senior Laravel, Vue & Nuxt Developer' }
      ],
      link: [
        // Google Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Poppins:wght@300;400;500;600;700&display=swap' },
        // Bootstrap Icons (CDN)
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css' }
      ]
    }
  },
  compatibilityDate: '2024-10-08',
})