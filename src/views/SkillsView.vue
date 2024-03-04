<template>
  <div class="flex flex-col justify-center items-center mb-40 mt-6">

    <div class="relative bg-darkgreen border-2 border-lightgreen rounded-t-3xl text-white uppercase text-center text-lg p-1 font-extrabold w-80 mb-16">
      skills
      <!-- 11 e 16 -->
      <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -left-20 scale-x-[-1] -z-20" />
      <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -right-20 -z-20" />
    </div>

    <div v-for="(skill, i) in skills" :key="i" class="flex gap-3 justify-center items-center mt-3">
      <div class="uppercase text-darkgreen font-extrabold text-3xl min-w-56">{{ skill.name }}</div>

      <input disabled :value="totalSkillValue(skill)" type="text" class="outline-none border-2 border-green-800 text-center w-20 h-12 bg-gray-200 text-lightgreen text-xl">

      <span class="uppercase text-darkgreen font-extrabold text-3xl">=</span>

      <div class="flex flex-col w-20 relative">
        <span v-if="i === 0" class="text-darkgreen text-sm uppercase font-bold absolute left-1/2 -top-5 transform -translate-x-1/2">Ability</span>
        <span class="uppercase text-white bg-darkgreen font-extrabold text-xs w-full text-center">{{ skill.ability.name }}</span>
        <input v-model="skill.ability.value" disabled type="text" class="outline-none border-2 border-green-800 text-center w-full h-8 bg-gray-200 text-lightgreen text-xl">
      </div>

      <div class="relative">
        <span v-if="i === 0" class="text-darkgreen text-sm uppercase font-bold absolute left-1/2 -top-5 transform -translate-x-1/2">prof</span>
        <input v-model="skill.proficiency" type="text" class="outline-none border-2 border-green-800 text-center w-20 h-12 bg-white text-lightgreen text-xl">
      </div>

      <div class="flex gap-0.5">
        <div class="relative">
          <span v-if="i === 0" class="text-white bg-darkgreen w-5 text-center text-sm uppercase font-bold absolute left-1/2 -top-5 transform -translate-x-1/2">t</span>
          <input :value="skill.trained ? 'X' : ''" type="text" class="outline-none border-2 border-green-800 text-center w-5 h-12 bg-white text-lightgreen text-xl">
        </div>
        <div class="relative">
          <span v-if="i === 0" class="text-white bg-darkgreen w-5 text-center text-sm uppercase font-bold absolute left-1/2 -top-5 transform -translate-x-1/2">e</span>
          <input :value="skill.expert ? 'X' : ''" type="text" class="outline-none border-2 border-green-800 text-center w-5 h-12 bg-white text-lightgreen text-xl">
        </div>
        <div class="relative">
          <span v-if="i === 0" class="text-white bg-darkgreen w-5 text-center text-sm uppercase font-bold absolute left-1/2 -top-5 transform -translate-x-1/2">m</span>
          <input :value="skill.master ? 'X' : ''" type="text" class="outline-none border-2 border-green-800 text-center w-5 h-12 bg-white text-lightgreen text-xl">
        </div>
        <div class="relative">
          <span v-if="i === 0" class="text-white bg-darkgreen w-5 text-center text-sm uppercase font-bold absolute left-1/2 -top-5 transform -translate-x-1/2">l</span>
          <input :value="skill.legendary ? 'X' : ''" type="text" class="outline-none border-2 border-green-800 text-center w-5 h-12 bg-white text-lightgreen text-xl">
        </div>
      </div>

      <div class="relative">
        <span v-if="i === 0" class="text-darkgreen text-sm uppercase font-bold absolute left-1/2 -top-5 transform -translate-x-1/2">status</span>
        <input v-model="skill.status" type="text" class="outline-none border-2 border-green-800 text-center w-20 h-12 bg-white text-lightgreen text-xl">
      </div>

      <div class="relative">
        <span v-if="i === 0" class="text-darkgreen text-sm uppercase font-bold absolute left-1/2 -top-5 transform -translate-x-1/2">circ</span>
        <input v-model="skill.circumstance" type="text" class="outline-none border-2 border-green-800 text-center w-20 h-12 bg-white text-lightgreen text-xl">
      </div>

      <div class="relative">
        <span v-if="i === 0" class="text-darkgreen text-sm uppercase font-bold absolute left-1/2 -top-5 transform -translate-x-1/2">item</span>
        <input v-model="skill.item" type="text" class="outline-none border-2 border-green-800 text-center w-20 h-12 bg-white text-lightgreen text-xl">
      </div>

      <div class="relative">
        <span v-if="i === 0" class="text-darkgreen text-sm uppercase font-bold absolute left-1/2 -top-5 transform -translate-x-1/2">other</span>
        <input v-model="skill.other" type="text" class="outline-none border-2 border-green-800 text-center w-20 h-12 bg-white text-lightgreen text-xl">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  {
    name: 'agriculture',
    ability: {
      name: 'stability',
      value: 1
    },
    proficiency: 3,
    trained: true,
    expert: false,
    master: false,
    legendary: false,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
  {
    name: 'arts',
    ability: {
      name: 'culture',
      value: 0
    },
    proficiency: 2,
    trained: false,
    expert: false,
    master: false,
    legendary: false,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
  {
    name: 'boating',
    ability: {
      name: 'economy',
      value: 0
    },
    proficiency: 2,
    trained: false,
    expert: false,
    master: false,
    legendary: false,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
  {
    name: 'defense',
    ability: {
      name: 'stability',
      value: 0
    },
    proficiency: 2,
    trained: false,
    expert: false,
    master: false,
    legendary: false,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
  {
    name: 'engineering',
    ability: {
      name: 'stability',
      value: 0
    },
    proficiency: 2,
    trained: false,
    expert: false,
    master: false,
    legendary: false,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
  {
    name: 'exploration',
    ability: {
      name: 'economy',
      value: 0
    },
    proficiency: 2,
    trained: false,
    expert: false,
    master: false,
    legendary: false,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
  {
    name: 'folklore',
    ability: {
      name: 'culture',
      value: 0
    },
    proficiency: 2,
    trained: false,
    expert: false,
    master: false,
    legendary: false,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
  {
    name: 'industry',
    ability: {
      name: 'economy',
      value: 0
    },
    proficiency: 2,
    trained: false,
    expert: false,
    master: false,
    legendary: false,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
  {
    name: 'intrigue',
    ability: {
      name: 'loyalty',
      value: 0
    },
    proficiency: 2,
    trained: false,
    expert: false,
    master: false,
    legendary: false,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
  {
    name: 'magic',
    ability: {
      name: 'culture',
      value: 0
    },
    proficiency: 2,
    trained: false,
    expert: false,
    master: false,
    legendary: false,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
  {
    name: 'politics',
    ability: {
      name: 'loyalty',
      value: 0
    },
    proficiency: 2,
    trained: false,
    expert: false,
    master: false,
    legendary: false,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
  {
    name: 'scholarship',
    ability: {
      name: 'culture',
      value: 0
    },
    proficiency: 2,
    trained: false,
    expert: false,
    master: false,
    legendary: false,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
  {
    name: 'statecraft',
    ability: {
      name: 'loyalty',
      value: 0
    },
    proficiency: 2,
    trained: false,
    expert: false,
    master: false,
    legendary: false,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
  {
    name: 'trade',
    ability: {
      name: 'economy',
      value: 0
    },
    proficiency: 2,
    trained: false,
    expert: false,
    master: false,
    legendary: false,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
  {
    name: 'warfare',
    ability: {
      name: 'loyalty',
      value: 0
    },
    proficiency: 2,
    trained: false,
    expert: false,
    master: false,
    legendary: false,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
  {
    name: 'wilderness',
    ability: {
      name: 'stability',
      value: 0
    },
    proficiency: 2,
    trained: false,
    expert: false,
    master: false,
    legendary: false,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
])

const totalSkillValue = (skill) => {
  let value = skill.ability.value + skill.proficiency + skill.status + skill.circumstance + skill.item + skill.other

  if (skill.legendary) value += 4
  else if (skill.master) value += 3
  else if (skill.expert) value += 2
  else if (skill.trained) value += 2

  return value
}
</script>