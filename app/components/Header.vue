<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md text-white transition-all duration-300 shadow-md">
    <div class="container mx-auto px-4 max-w-6xl flex items-center justify-between py-5">
      <!-- Logo -->
      <a href="#" class="text-2xl font-bold font-poppins tracking-wider">Rahmat Ullah</a>
      
      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-6 font-semibold">
        <a href="#hero" class="hover:text-blue-400 transition-colors">Home</a>
        <a href="#about" class="hover:text-blue-400 transition-colors">About</a>
        <a href="#services" class="hover:text-blue-400 transition-colors">Services</a>
        <a href="#portfolio" class="hover:text-blue-400 transition-colors">Portfolio</a>
        <a href="#contact" class="hover:text-blue-400 transition-colors">Contact</a>
      </nav>
      
      <!-- Mobile Nav Toggle -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-3xl focus:outline-none">
        <i :class="mobileMenuOpen ? 'bi bi-x' : 'bi bi-list'"></i>
      </button>
    </div>

    <!-- Mobile Nav Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-gray-800 text-center py-4 space-y-4 shadow-inner border-t border-gray-700">
      <a href="#hero" @click="mobileMenuOpen = false" class="block hover:text-blue-400 font-medium">Home</a>
      <a href="#about" @click="mobileMenuOpen = false" class="block hover:text-blue-400 font-medium">About</a>
      <a href="#services" @click="mobileMenuOpen = false" class="block hover:text-blue-400 font-medium">Services</a>
      <a href="#portfolio" @click="mobileMenuOpen = false" class="block hover:text-blue-400 font-medium">Portfolio</a>
      <a href="#contact" @click="mobileMenuOpen = false" class="block hover:text-blue-400 font-medium">Contact</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>