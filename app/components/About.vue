<template>
  <section id="about" class="py-16 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 shadow-lg p-8 md:p-12 bg-white rounded-lg">
        
        <!-- Left Column (Profile & Skills) -->
        <div>
          <div class="flex flex-col lg:flex-row gap-6 mb-8">
            <div class="lg:w-5/12">
              <img src="/assets/img/profile-img.webp" alt="Rahmat Ullah" class="w-full h-auto rounded shadow-sm">
            </div>
            <div class="lg:w-7/12 text-gray-700 space-y-3 text-sm md:text-base">
              <p><strong class="text-gray-900 font-semibold w-20 inline-block">Name:</strong> Rahmat Ullah</p>
              <p><strong class="text-gray-900 font-semibold w-20 inline-block">Profile:</strong> Senior Laravel Developer</p>
              <p><strong class="text-gray-900 font-semibold w-20 inline-block">Email:</strong> rullah0202@gmail.com</p>
              <p><strong class="text-gray-900 font-semibold w-20 inline-block">Phone:</strong> (880) 1915-810202</p>
            </div>
          </div>

          <!-- Skills -->
          <div>
            <h5 class="text-xl font-bold mb-4 font-poppins">Skills</h5>
            <div class="space-y-4">
              <div v-for="skill in skills" :key="skill.name">
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-700">{{ skill.name }}</span>
                  <span class="text-sm font-medium text-gray-700">{{ skill.percent }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-sm h-3">
                  <div class="bg-blue-600 h-3 rounded-sm" :style="{ width: skill.percent + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column (About Me) -->
        <div>
          <h4 class="text-3xl font-bold mb-6 font-poppins relative inline-block pb-3 after:content-[''] after:absolute after:w-16 after:h-1 after:bg-blue-600 after:bottom-0 after:left-0">
            About me
          </h4>
          <p class="text-gray-600 mb-6 leading-relaxed text-lg font-light">
            Senior Laravel Developer with 5+ years experience. I have experience in the following areas: HTML 5 | CSS3 | Bootstrap5 | Tailwind | JavaScript | jQuery | Ajax | Vue | Nuxt | Pinia | PHP | Laravel | MySQL
          </p>
          <p class="text-gray-600 leading-relaxed text-lg font-light">
            My core competency lies in complete end-end management of a new website development project, and I build fast, secure websites, Software development from the ground up for you or your business. Let's turn your idea into a working product.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'HTML', percent: 95 },
  { name: 'CSS', percent: 90 },
  { name: 'JavaScript', percent: 85 },
  { name: 'Laravel', percent: 90 },
  { name: 'Vue/Nuxt', percent: 80 }
]
</script>