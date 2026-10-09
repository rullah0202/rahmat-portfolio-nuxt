<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md text-white transition-all duration-300 shadow-md">
    <div class="container mx-auto px-4 max-w-6xl flex items-center justify-between py-4">
      <!-- Logo -->
      <a href="#" class="text-3xl font-bold tracking-wider font-poppins">Rahmat Ullah</a>
      
      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-6 font-medium text-[15px] tracking-wide">
        <a href="#hero" @click="activeSection = 'hero'" 
           :class="activeSection === 'hero' ? 'border-white text-white' : 'border-transparent text-gray-300'" 
           class="pb-1 border-b-2 hover:border-white hover:text-white transition-all">Home</a>
           
        <a href="#about" @click="activeSection = 'about'" 
           :class="activeSection === 'about' ? 'border-white text-white' : 'border-transparent text-gray-300'" 
           class="pb-1 border-b-2 hover:border-white hover:text-white transition-all">About</a>
           
        <a href="#resume" @click="activeSection = 'resume'" 
           :class="activeSection === 'resume' ? 'border-white text-white' : 'border-transparent text-gray-300'" 
           class="pb-1 border-b-2 hover:border-white hover:text-white transition-all">Resume</a>
           
        <a href="#services" @click="activeSection = 'services'" 
           :class="activeSection === 'services' ? 'border-white text-white' : 'border-transparent text-gray-300'" 
           class="pb-1 border-b-2 hover:border-white hover:text-white transition-all">Services</a>
           
        <a href="#portfolio" @click="activeSection = 'portfolio'" 
           :class="activeSection === 'portfolio' ? 'border-white text-white' : 'border-transparent text-gray-300'" 
           class="pb-1 border-b-2 hover:border-white hover:text-white transition-all">Portfolio</a>
           
        <a href="#contact" @click="activeSection = 'contact'" 
           :class="activeSection === 'contact' ? 'border-white text-white' : 'border-transparent text-gray-300'" 
           class="pb-1 border-b-2 hover:border-white hover:text-white transition-all">Contact</a>
      </nav>
      
      <!-- Mobile Nav Toggle -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-3xl focus:outline-none text-white">
        <i :class="mobileMenuOpen ? 'bi bi-x' : 'bi bi-list'"></i>
      </button>
    </div>

    <!-- Mobile Nav Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-gray-900 text-center py-4 space-y-4 shadow-inner border-t border-gray-700">
      <a href="#hero" @click="setMobileMenu('hero')" :class="activeSection === 'hero' ? 'text-white' : 'text-gray-300'" class="block hover:text-white font-medium">Home</a>
      <a href="#about" @click="setMobileMenu('about')" :class="activeSection === 'about' ? 'text-white' : 'text-gray-300'" class="block hover:text-white font-medium">About</a>
      <a href="#resume" @click="setMobileMenu('resume')" :class="activeSection === 'resume' ? 'text-white' : 'text-gray-300'" class="block hover:text-white font-medium">Resume</a>
      <a href="#services" @click="setMobileMenu('services')" :class="activeSection === 'services' ? 'text-white' : 'text-gray-300'" class="block hover:text-white font-medium">Services</a>
      <a href="#portfolio" @click="setMobileMenu('portfolio')" :class="activeSection === 'portfolio' ? 'text-white' : 'text-gray-300'" class="block hover:text-white font-medium">Portfolio</a>
      <a href="#contact" @click="setMobileMenu('contact')" :class="activeSection === 'contact' ? 'text-white' : 'text-gray-300'" class="block hover:text-white font-medium">Contact</a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const activeSection = ref('hero')

// Mobile menu click handle kora
const setMobileMenu = (section) => {
  activeSection.value = section
  mobileMenuOpen.value = false
}

// Scroll korle jate automatic menu select hoy
onMounted(() => {
  const handleScroll = () => {
    const sections = ['hero', 'about', 'resume', 'services', 'portfolio', 'contact']
    let current = 'hero'
    
    for (const section of sections) {
      const el = document.getElementById(section)
      if (el) {
        const rect = el.getBoundingClientRect()
        // Screen er upor theke kon section kache ache ta ber kora
        if (rect.top <= 120) {
          current = section
        }
      }
    }
    activeSection.value = current
  }
  
  window.addEventListener('scroll', handleScroll)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>