<template>
  <section id="hero" class="relative w-full h-screen bg-gray-900 text-white">
    <div class="absolute inset-0 z-0">
      <img 
        src="/assets/img/hero-img.webp" 
        alt="Rahmat Ullah - Laravel Developer" 
        class="w-full h-full object-cover opacity-60"
      >
    </div>

    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h2 class="text-4xl md:text-6xl font-bold font-poppins mb-2 md:mb-4 leading-tight">I am Rahmat Ullah</h2>
      <p class="text-xl md:text-3xl font-medium">
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
    strings: ['Web Developer', 'Software Developer', 'Laravel Developer'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  })
})
</script>