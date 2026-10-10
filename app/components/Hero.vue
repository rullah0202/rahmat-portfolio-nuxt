<template>
  <section id="hero" class="relative w-full h-screen min-h-[600px] bg-gray-900 text-white flex items-center justify-center">
    <div class="absolute inset-0 z-0">
      <!-- Image cover and fixed background like the original site -->
      <img 
        src="/assets/img/hero-img.webp" 
        alt="Rahmat Ullah - Laravel Developer" 
        class="w-full h-full object-cover"
      >
      <!-- Dark overlay to make text pop -->
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 w-full">
      <h1 class="text-5xl md:text-[72px] font-bold font-poppins mb-4 md:mb-6 leading-tight drop-shadow-lg">
        I am Rahmat Ullah
      </h1>
      
      <p class="text-2xl md:text-4xl font-medium drop-shadow-md">
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
    strings: ['Laravel', 'Web Developer', 'Software Developer'],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
  })
})
</script>