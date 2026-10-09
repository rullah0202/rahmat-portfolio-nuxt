<template>
  <section id="about" class="py-16 md:py-20 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="bg-white shadow-[0_0_20px_rgba(0,0,0,0.05)] p-6 md:p-10 rounded-lg border border-gray-50">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <!-- Left Column: Image, Info & Skills -->
          <div class="lg:col-span-5">
            <div class="flex flex-col sm:flex-row gap-6 mb-8">
              <!-- Image -->
              <div class="w-32 sm:w-40 shrink-0 mx-auto sm:mx-0">
                <img src="/assets/img/profile-img.jpg" alt="Rahmat Ullah" class="w-full rounded shadow-sm">
              </div>
              <!-- Info Details -->
              <div class="space-y-3 text-[15px] md:text-base">
                <p><span class="font-bold text-gray-800">Name: </span><span class="text-gray-600">Rahmat Ullah</span></p>
                <p><span class="font-bold text-gray-800">Profile: </span><span class="text-gray-600">Full stack developer</span></p>
                <p><span class="font-bold text-gray-800">Email: </span><span class="text-gray-600">rullah0202@gmail.com</span></p>
                <p><span class="font-bold text-gray-800">Phone: </span><span class="text-gray-600">+880 1915 81 02 02</span></p>
              </div>
            </div>

            <!-- Skills -->
            <div>
              <h3 class="font-bold text-gray-800 mb-4 font-poppins">Skill</h3>
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between text-xs md:text-sm mb-1"><span class="font-semibold text-gray-700">PHP</span><span class="text-gray-600">100%</span></div>
                  <div class="w-full bg-blue-100 h-[6px] rounded-full"><div class="bg-blue-600 h-[6px] rounded-full" style="width: 100%"></div></div>
                </div>
                <div>
                  <div class="flex justify-between text-xs md:text-sm mb-1"><span class="font-semibold text-gray-700">Vue</span><span class="text-gray-600">80%</span></div>
                  <div class="w-full bg-blue-100 h-[6px] rounded-full"><div class="bg-blue-600 h-[6px] rounded-full" style="width: 80%"></div></div>
                </div>
                <div>
                  <div class="flex justify-between text-xs md:text-sm mb-1"><span class="font-semibold text-gray-700">Laravel</span><span class="text-gray-600">100%</span></div>
                  <div class="w-full bg-blue-100 h-[6px] rounded-full"><div class="bg-blue-600 h-[6px] rounded-full" style="width: 100%"></div></div>
                </div>
                <div>
                  <div class="flex justify-between text-xs md:text-sm mb-1"><span class="font-semibold text-gray-700">Nuxt.js</span><span class="text-gray-600">70%</span></div>
                  <div class="w-full bg-blue-100 h-[6px] rounded-full"><div class="bg-blue-600 h-[6px] rounded-full" style="width: 70%"></div></div>
                </div>
                <div>
                  <div class="flex justify-between text-xs md:text-sm mb-1"><span class="font-semibold text-gray-700">jQuery</span><span class="text-gray-600">80%</span></div>
                  <div class="w-full bg-blue-100 h-[6px] rounded-full"><div class="bg-blue-600 h-[6px] rounded-full" style="width: 80%"></div></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: About Me Text -->
          <div class="lg:col-span-7">
            <h2 class="text-2xl md:text-3xl font-semibold font-poppins mb-6 text-gray-800 relative pb-3">
              About me
              <span class="absolute bottom-0 left-0 w-12 h-[3px] bg-blue-600"></span>
            </h2>
            
            <p class="text-gray-600 leading-relaxed mb-4 text-[15px] md:text-base">
              I'm a full-stack developer with 5+ years experience. I have experience in the following areas HTML, CSS, CSS3, Bootstrap, JS & jQuery, Javascript, jSON, Vue.js, PHP, Laravel, API Integrating, MySQL Database.
            </p>
            <p class="text-gray-600 leading-relaxed text-[15px] md:text-base">
              My core competency lies in the end-to-end management of a new website development project, and I am seeking opportunities to build websites from the ground up for you or your business. Let's build your new site or working product.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>