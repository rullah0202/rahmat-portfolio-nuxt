<template>
  <section id="services" class="py-12 md:py-20 bg-gray-50">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Section Title -->
      <div class="text-center mb-10 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold font-poppins uppercase mb-3 md:mb-4 text-gray-800">Services</h2>
        <div class="w-12 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
        <!-- Web Development -->
        <div class="bg-white p-8 md:p-10 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] transition-all duration-300 text-center group">
          <div class="w-20 h-20 md:w-24 md:h-24 mx-auto border-[5px] md:border-[6px] border-blue-600 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:bg-blue-600 transition-colors duration-300">
            <i class="bi bi-code-slash text-3xl md:text-4xl text-gray-800 group-hover:text-white transition-colors duration-300"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">Web Development</h3>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed">
            Building fast, SEO-friendly websites. Providing end-to-end solutions using Vue, Nuxt, and Laravel.
          </p>
        </div>

        <!-- Software Development -->
        <div class="bg-white p-8 md:p-10 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] transition-all duration-300 text-center group">
          <div class="w-20 h-20 md:w-24 md:h-24 mx-auto border-[5px] md:border-[6px] border-blue-600 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:bg-blue-600 transition-colors duration-300">
            <i class="bi bi-terminal text-3xl md:text-4xl text-gray-800 group-hover:text-white transition-colors duration-300"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-gray-800">Software Development</h3>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed">
            No more Excel hassles. I build Inventory, POS, and CRM software. From Idea to Live Product.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>