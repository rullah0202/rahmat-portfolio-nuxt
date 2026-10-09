<template>
  <section id="services" class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-semibold font-poppins capitalize mb-3 text-gray-800 tracking-wider">Services</h2>
        <div class="w-14 h-[3px] bg-blue-600 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
        <div class="bg-white p-8 md:p-10 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group border border-gray-100">
          <div class="w-20 h-20 md:w-24 md:h-24 mx-auto border-[4px] md:border-[5px] border-blue-600/20 rounded-full flex items-center justify-center mb-6 group-hover:border-blue-600 transition-colors duration-300">
            <i class="bi bi-code-slash text-3xl md:text-4xl text-blue-600"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-3 text-gray-800">Web development</h3>
          <p class="text-[15px] md:text-base text-gray-500 leading-relaxed">
            Building fast, SEO-friendly websites. Providing end-to-end solutions using Vue, Nuxt, and Laravel.
          </p>
        </div>

        <div class="bg-white p-8 md:p-10 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group border border-gray-100">
          <div class="w-20 h-20 md:w-24 md:h-24 mx-auto border-[4px] md:border-[5px] border-blue-600/20 rounded-full flex items-center justify-center mb-6 group-hover:border-blue-600 transition-colors duration-300">
            <i class="bi bi-terminal text-3xl md:text-4xl text-blue-600"></i>
          </div>
          <h3 class="text-xl md:text-2xl font-semibold mb-3 text-gray-800">Software development</h3>
          <p class="text-[15px] md:text-base text-gray-500 leading-relaxed">
            No more Excel hassles. I build Inventory, POS, and CRM software. From Idea to Live Product.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>