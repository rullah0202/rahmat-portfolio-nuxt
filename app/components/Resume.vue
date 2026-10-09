<template>
  <section id="resume" class="py-16 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold font-poppins uppercase mb-4 text-gray-800">Resume</h2>
        <div class="w-16 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- Education Column -->
        <div>
          <h3 class="text-2xl font-semibold mb-6 text-gray-800 font-poppins">Education</h3>
          <div class="border-l-2 border-blue-600 pl-6 relative space-y-8">
            <div v-for="(edu, index) in education" :key="index" class="relative">
              <span class="w-4 h-4 rounded-full bg-blue-600 absolute -left-[31px] top-1 border-2 border-white"></span>
              <h4 class="text-xl font-bold text-gray-800 uppercase mb-1">{{ edu.degree }}</h4>
              <h5 class="inline-block bg-blue-50 text-blue-800 font-medium px-3 py-1 mb-2 text-sm">{{ edu.year }}</h5>
              <p class="italic font-medium text-gray-600">{{ edu.institute }}</p>
              <p v-if="edu.details" class="text-gray-600 mt-2">{{ edu.details }}</p>
            </div>
          </div>
        </div>

        <!-- Experience Column -->
        <div>
          <h3 class="text-2xl font-semibold mb-6 text-gray-800 font-poppins">Professional Experience</h3>
          <div class="border-l-2 border-blue-600 pl-6 relative space-y-8">
            <div v-for="(exp, index) in experience" :key="index" class="relative">
              <span class="w-4 h-4 rounded-full bg-blue-600 absolute -left-[31px] top-1 border-2 border-white"></span>
              <h4 class="text-xl font-bold text-gray-800 uppercase mb-1">{{ exp.role }}</h4>
              <h5 class="inline-block bg-blue-50 text-blue-800 font-medium px-3 py-1 mb-2 text-sm">{{ exp.duration }}</h5>
              <p class="italic font-medium text-gray-600">{{ exp.company }}</p>
              <ul v-if="exp.tasks" class="list-disc list-inside text-gray-600 mt-2">
                <li v-for="task in exp.tasks" :key="task">{{ task }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const education = [
  { degree: 'Laravel with projects', year: '2021 - 2022', institute: 'Udemy, Inc', details: '-> Built 3 real-world apps with Auth, Api, Payment Gateway' },
  { degree: 'Facebook Marketing', year: '2021 - 2022', institute: 'Udemy, Inc', details: '-> Ran ads for e-commerce & lead generation' },
  { degree: 'Laravel with projects', year: '2020', institute: 'Rabbil Hasan' },
  { degree: 'Online Marketing', year: '2017', institute: 'Areful Eeslam Presents' },
  { degree: 'Database Programming Using Oracle 8i', year: 'Jan 2004 - Jun 2004', institute: 'Institute Of Information Technology (IIT)' },
  { degree: 'Mcom', year: '2002 - 2004', institute: 'National University | Bangladesh' },
  { degree: 'DISM', year: '1999 - 2001', institute: 'APTECH Computer Education' }
]

const experience = [
  { role: 'Laravel/Vue/Nuxt Developer', duration: 'July 2020 - Present', company: 'Freelance', tasks: ['Web Development', 'Software Development.'] },
  { role: 'Head of Information Technology', duration: 'April 2017 - June 2020', company: 'ACE CREATIONS LTD' },
  { role: 'Web Manager', duration: 'July 2014 - April 2017', company: "Bangladesh NGO's Network for Radio and Communications" },
  { role: 'Web Manager', duration: 'Nov 2011 - March 2014', company: 'AGNI Systems Limited' },
  { role: 'IT Manager', duration: 'March 2010 - Octomer 2011', company: 'Getco Online Limited' },
  { role: 'Zonal Corporate Account Manager', duration: 'April 2007 - January 2010', company: 'Orascom Telecom' }
]
</script>