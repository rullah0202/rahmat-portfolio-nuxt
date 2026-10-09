<template>
  <section id="portfolio" class="py-12 md:py-16 bg-gray-50">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="text-center mb-10 md:mb-12">
        <h2 class="text-3xl md:text-4xl font-semibold font-poppins capitalize mb-3 md:mb-4 text-gray-800 tracking-wider">Portfolio</h2>
        <div class="w-14 h-[3px] bg-blue-600 mx-auto mb-6 md:mb-8"></div>
      </div>

      <!-- Filters matching live site -->
      <div class="flex justify-center gap-5 md:gap-8 mb-8 md:mb-10 border-b pb-2 max-w-md mx-auto">
        <button 
          @click="activeFilter = '*'" 
          :class="activeFilter === '*' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'"
          class="pb-2 text-xs md:text-sm font-bold uppercase tracking-wider transition-all"
        >All</button>
        <button 
          @click="activeFilter = 'app'" 
          :class="activeFilter === 'app' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'"
          class="pb-2 text-xs md:text-sm font-bold uppercase tracking-wider transition-all"
        >App</button>
        <button 
          @click="activeFilter = 'card'" 
          :class="activeFilter === 'card' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'"
          class="pb-2 text-xs md:text-sm font-bold uppercase tracking-wider transition-all"
        >Card</button>
        <button 
          @click="activeFilter = 'web'" 
          :class="activeFilter === 'web' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'"
          class="pb-2 text-xs md:text-sm font-bold uppercase tracking-wider transition-all"
        >Web</button>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
        <div 
          v-for="(item, index) in filteredItems" 
          :key="index"
          class="bg-white rounded-lg overflow-hidden shadow-md group relative"
        >
          <img :src="item.img" :alt="item.title" class="w-full h-auto transition-transform duration-500 group-hover:scale-110">
          
          <div class="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
            <h4 class="text-lg md:text-xl font-bold mb-2">{{ item.title }}</h4>
            <p class="text-xs md:text-sm text-center mb-4">{{ item.desc }}</p>
            <a :href="item.link" target="_blank" class="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <i class="bi bi-link-45deg text-xl"></i>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('*')

// Apni chaile category gulo (app, card, web) onujayi update kore nite paren
const portfolioItems = [
  { title: 'POS', desc: 'Point of Sale, Developed using Laravel', category: 'app', img: '/assets/img/portfolio/pos.png', link: 'https://pos.rullah.com/' },
  { title: 'Multivendor Ecommerce', desc: 'Multivendor Ecommerce, Developed using Laravel', category: 'web', img: '/assets/img/portfolio/mvecom.png', link: 'https://mvecom.rullah.com/' },
  { title: 'Newsportal', desc: 'Newsportal, Developed using Laravel', category: 'web', img: '/assets/img/portfolio/newsportal.png', link: 'https://np.rullah.com/' },
  { title: 'Online Hotel Booking', desc: 'Online Hotel Booking, Developed using Laravel', category: 'web', img: '/assets/img/portfolio/hotel.png', link: 'https://hb.rullah.com/' },
  { title: 'Music Social Network', desc: 'Music Social Network, Developed using Vue Laravel', category: 'web', img: '/assets/img/portfolio/msn.png', link: 'https://msn.rullah.com/' },
  { title: 'Inventory Management', desc: 'Inventory Management Software, Developed using Laravel', category: 'app', img: '/assets/img/portfolio/inv.png', link: 'https://inv.rullah.com/' },
  { title: 'Tiktok Clone', desc: 'Tiktok Clone, Developed using Nuxt Laravel', category: 'app', img: '/assets/img/portfolio/tiktok-clone.png', link: 'https://tiktok-clone.rullah.com/' }
]

const filteredItems = computed(() => {
  if (activeFilter.value === '*') {
    return portfolioItems
  }
  return portfolioItems.filter(item => item.category === activeFilter.value)
})
</script>