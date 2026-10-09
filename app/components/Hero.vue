<template>
  <section id="hero" class="relative w-full h-screen bg-gray-900 text-white">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img 
        src="/assets/img/hero-img.webp" 
        alt="Rahmat Ullah Background" 
        class="w-full h-full object-cover opacity-60"
      >
    </div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h2 class="text-5xl md:text-7xl font-bold font-poppins mb-4">I am Rahmat Ullah</h2>
      <p class="text-2xl md:text-3xl font-medium">
        <span ref="typedElement"></span>
      </p>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Typed from 'typed.js'

const typedElement = ref(null)

onMounted(() => {
  new Typed(typedElement.value, {
    strings: ['Web Developer', 'Laravel Developer', 'Software Developer'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  })
})
</script>