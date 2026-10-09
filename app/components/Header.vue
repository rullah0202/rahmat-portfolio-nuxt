<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md text-white transition-all duration-300 shadow-md">
    <div class="container mx-auto px-4 max-w-6xl flex items-center justify-between py-4">
      <!-- Logo -->
      <a href="#" class="text-3xl font-bold tracking-wider font-poppins">Rahmat Ullah</a>
      
      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-6 font-medium text-[15px] tracking-wide">
        <!-- Home active state e border-white rakha holo -->
        <a href="#hero" class="pb-1 border-b-2 border-white text-white">Home</a>
        <!-- Baki gulote hover korle border asbe -->
        <a href="#about" class="pb-1 border-b-2 border-transparent hover:border-white text-gray-300 hover:text-white transition-all">About</a>
        <a href="#resume" class="pb-1 border-b-2 border-transparent hover:border-white text-gray-300 hover:text-white transition-all">Resume</a>
        <a href="#services" class="pb-1 border-b-2 border-transparent hover:border-white text-gray-300 hover:text-white transition-all">Services</a>
        <a href="#portfolio" class="pb-1 border-b-2 border-transparent hover:border-white text-gray-300 hover:text-white transition-all">Portfolio</a>
        <a href="#contact" class="pb-1 border-b-2 border-transparent hover:border-white text-gray-300 hover:text-white transition-all">Contact</a>
      </nav>
      
      <!-- Mobile Nav Toggle -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-3xl focus:outline-none text-white">
        <i :class="mobileMenuOpen ? 'bi bi-x' : 'bi bi-list'"></i>
      </button>
    </div>

    <!-- Mobile Nav Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-gray-900 text-center py-4 space-y-4 shadow-inner border-t border-gray-700">
      <a href="#hero" @click="mobileMenuOpen = false" class="block text-white font-medium">Home</a>
      <a href="#about" @click="mobileMenuOpen = false" class="block text-gray-300 hover:text-white font-medium">About</a>
      <a href="#resume" @click="mobileMenuOpen = false" class="block text-gray-300 hover:text-white font-medium">Resume</a>
      <a href="#services" @click="mobileMenuOpen = false" class="block text-gray-300 hover:text-white font-medium">Services</a>
      <a href="#portfolio" @click="mobileMenuOpen = false" class="block text-gray-300 hover:text-white font-medium">Portfolio</a>
      <a href="#contact" @click="mobileMenuOpen = false" class="block text-gray-300 hover:text-white font-medium">Contact</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>