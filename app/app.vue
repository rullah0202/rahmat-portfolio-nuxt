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
    <!-- Footer-er nam poriborton kora hoyeche -->
    <AppFooter />
  </div>
</template>

<script setup>
import { useSeoMeta } from '#imports'

useSeoMeta({
  title: 'Rahmat Ullah | Senior Laravel Developer',
  description: 'Senior Laravel Developer with 7+ years experience in Vue, Nuxt, and full-stack web development.',
  keywords: 'Rahmat Ullah, Laravel Developer, Vue.js Developer, Nuxt Developer, Web Developer, Software Developer, PHP Developer, Bangladesh',
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>