<template>
  <section id="contact" class="py-16 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold font-poppins uppercase mb-4 text-gray-800">Contact</h2>
        <div class="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p class="text-gray-600 text-lg">"Would you like to discuss the project? Please send a message. You will receive a reply within 24 hours."</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10">
        <!-- Address -->
        <div class="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
          <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
            <i class="bi bi-geo-alt"></i>
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-800">Address</h3>
          <p class="text-gray-600">36/1/B, Shah Ali Bagh, Mirpur-1, Dhaka</p>
        </div>
        
        <!-- WhatsApp -->
        <div class="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
          <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
            <i class="bi bi-telephone"></i>
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-800">WhatsApp Me</h3>
          <p class="text-gray-600">
            <a href="https://wa.me/8801915810202?text=Hi%20Rahmat%20Ullah,%20I%20need%20a%20website/software" target="_blank" class="hover:text-blue-600 transition-colors">wa.me/+8801915-810202</a>
          </p>
        </div>

        <!-- Email -->
        <div class="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
          <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
            <i class="bi bi-envelope"></i>
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-800">Email Us</h3>
          <p class="text-gray-600">
            <a href="mailto:rullah0202@gmail.com" class="hover:text-blue-600 transition-colors">rullah0202@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>