<template>
  <PageTitle title="Kobold S.P.A." />

  <div class="flex flex-col justify-center items-center mb-40 px-5">
    <div class="grid divide-y divide-neutral-200 w-2/3">
      <h1 class="mb-5">!todo kobold spa stock price chart !todo</h1>
      <div class="py-5" v-for="sub in subCompanies" :key="sub.name">
        <details class="group">
          <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
            <span>{{ sub.name }}</span>
            <span class="transition group-open:rotate-180">
              <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
            {{ sub.description }}
          </p>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const subCompanies = ref([
  {
    name: 'RapaSol',
    description: 'RapaSol si occupa della produzione di rapanelli solari',
    employees: 20,
  },
  {
    name: 'Gassinger',
    description: 'Gassinger si occupa della produzione di gas',
    employees: 2,
  },
  {
    name: 'Dragon Bull',
    description: 'Gassinger si occupa della produzione di bevande energetiche',
    employees: 2,
  },
  {
    name: 'K.R.M.',
    description: 'K.R.M. si occupa del riciclaggio di denaro sporco',
    employees: 2,
  },
])
</script>