<template>
  <header class="bg-[#0b0f19] text-white py-5 md:py-6 sticky top-0 z-50 shadow-lg transition-all duration-300">
    <div class="container mx-auto px-4 max-w-7xl flex items-center justify-between">
      <!-- Logo: ektu sleek (semibold) kora hoyeche -->
      <a href="#hero" class="text-2xl md:text-[28px] font-bold tracking-wide font-poppins">Rahmat Ullah</a>
      
      <!-- Desktop Nav: Font size ektu barano hoyeche (text-base) -->
      <nav class="hidden md:flex gap-6 lg:gap-8 font-medium text-[15px] md:text-base tracking-wide items-center">
        <a href="#hero" @click="activeSection = 'hero'" 
           :class="activeSection === 'hero' ? 'border-white text-white' : 'border-transparent text-gray-300'" 
           class="pb-1 border-b-[2px] hover:border-white hover:text-white transition-all duration-300">Home</a>
           
        <a href="#about" @click="activeSection = 'about'" 
           :class="activeSection === 'about' ? 'border-white text-white' : 'border-transparent text-gray-300'" 
           class="pb-1 border-b-[2px] hover:border-white hover:text-white transition-all duration-300">About</a>
           
        <a href="#resume" @click="activeSection = 'resume'" 
           :class="activeSection === 'resume' ? 'border-white text-white' : 'border-transparent text-gray-300'" 
           class="pb-1 border-b-[2px] hover:border-white hover:text-white transition-all duration-300">Resume</a>
           
        <a href="#services" @click="activeSection = 'services'" 
           :class="activeSection === 'services' ? 'border-white text-white' : 'border-transparent text-gray-300'" 
           class="pb-1 border-b-[2px] hover:border-white hover:text-white transition-all duration-300">Services</a>
           
        <a href="#portfolio" @click="activeSection = 'portfolio'" 
           :class="activeSection === 'portfolio' ? 'border-white text-white' : 'border-transparent text-gray-300'" 
           class="pb-1 border-b-[2px] hover:border-white hover:text-white transition-all duration-300">Portfolio</a>
           
        <a href="#contact" @click="activeSection = 'contact'" 
           :class="activeSection === 'contact' ? 'border-white text-white' : 'border-transparent text-gray-300'" 
           class="pb-1 border-b-[2px] hover:border-white hover:text-white transition-all duration-300">Contact</a>
      </nav>
      
      <!-- Mobile Nav Toggle -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-2xl focus:outline-none text-white">
        <i :class="mobileMenuOpen ? 'bi bi-x' : 'bi bi-list'"></i>
      </button>
    </div>

    <!-- Mobile Nav Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-[#0b0f19] text-center py-5 space-y-5 shadow-inner border-t border-gray-700 mt-5">
      <a href="#hero" @click="setMobileMenu('hero')" :class="activeSection === 'hero' ? 'text-white' : 'text-gray-300'" class="block hover:text-white text-base font-medium">Home</a>
      <a href="#about" @click="setMobileMenu('about')" :class="activeSection === 'about' ? 'text-white' : 'text-gray-300'" class="block hover:text-white text-base font-medium">About</a>
      <a href="#resume" @click="setMobileMenu('resume')" :class="activeSection === 'resume' ? 'text-white' : 'text-gray-300'" class="block hover:text-white text-base font-medium">Resume</a>
      <a href="#services" @click="setMobileMenu('services')" :class="activeSection === 'services' ? 'text-white' : 'text-gray-300'" class="block hover:text-white text-base font-medium">Services</a>
      <a href="#portfolio" @click="setMobileMenu('portfolio')" :class="activeSection === 'portfolio' ? 'text-white' : 'text-gray-300'" class="block hover:text-white text-base font-medium">Portfolio</a>
      <a href="#contact" @click="setMobileMenu('contact')" :class="activeSection === 'contact' ? 'text-white' : 'text-gray-300'" class="block hover:text-white text-base font-medium">Contact</a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const activeSection = ref('hero')

const setMobileMenu = (section) => {
  activeSection.value = section
  mobileMenuOpen.value = false
}

onMounted(() => {
  const handleScroll = () => {
    const sections = ['hero', 'about', 'resume', 'services', 'portfolio', 'contact']
    let current = 'hero'
    for (const section of sections) {
      const el = document.getElementById(section)
      if (el) {
        const rect = el.getBoundingClientRect()
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