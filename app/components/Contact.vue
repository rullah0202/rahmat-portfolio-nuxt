<template>
  <section id="contact" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="text-center mb-10 md:mb-12">
        <h2 class="text-3xl md:text-4xl font-semibold font-poppins capitalize mb-3 text-gray-800 tracking-wider">Contact</h2>
        <div class="w-14 h-[3px] bg-blue-600 mx-auto"></div>
      </div>

      <p class="text-center text-[15px] md:text-base text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
        "Would you like to discuss the project? Please send a message. You will receive a reply within 24 hours."
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
        <!-- Address -->
        <div class="bg-white py-6 px-4 text-center">
          <div class="w-14 h-14 border-[2px] border-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600 hover:text-white transition-colors duration-300 text-blue-600 group cursor-pointer">
            <i class="bi bi-geo-alt text-2xl transition-colors"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Address</h3>
          <p class="text-[15px] md:text-base text-gray-600">36/1/B, Shah Ali Bagh, Mirpur-1, Dhaka - 1216, Bangladesh</p>
        </div>

        <!-- WhatsApp -->
        <div class="bg-white py-6 px-4 text-center">
          <div class="w-14 h-14 border-[2px] border-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600 hover:text-white transition-colors duration-300 text-blue-600 group cursor-pointer">
            <i class="bi bi-whatsapp text-2xl transition-colors"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">WhatsApp Me</h3>
          <p class="text-[15px] md:text-base text-gray-600">+880 1915 81 02 02</p>
        </div>

        <!-- Email -->
        <div class="bg-white py-6 px-4 text-center">
          <div class="w-14 h-14 border-[2px] border-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600 hover:text-white transition-colors duration-300 text-blue-600 group cursor-pointer">
            <i class="bi bi-envelope text-2xl transition-colors"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Email Me</h3>
          <p class="text-[15px] md:text-base text-gray-600">rullah0202@gmail.com</p>
        </div>
      </div>
    </div>
  </section>
</template>