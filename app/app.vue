<template>
  <div class="bg-white text-gray-800 antialiased font-poppins selection:bg-blue-600 selection:text-white">
    <Header />
    <main>
      <Hero />
      <About />
      <Resume />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  </div>
</template>

<script setup>
import { useSeoMeta } from '#imports'

// Google Search-er jonno SEO & Keywords setup
useSeoMeta({
  title: 'Rahmat Ullah | Senior Laravel, Vue & Nuxt Developer',
  description: 'Portfolio of Rahmat Ullah. Expert in Web Development, Software Development, POS, and Inventory systems using Laravel, Vue.js, and Nuxt.',
  keywords: 'Rahmat Ullah, Laravel Developer in Bangladesh, Vue.js Developer, Nuxt Developer, Web Developer, Software Developer, POS Developer, Multivendor Ecommerce, PHP Developer',
  author: 'Rahmat Ullah',
  ogTitle: 'Rahmat Ullah - Full Stack Developer',
  ogDescription: 'Providing high-quality web and software development solutions.',
  ogImage: '/assets/img/hero-img.webp',
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>