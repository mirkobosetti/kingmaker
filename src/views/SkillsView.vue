<template>
  <div class="flex flex-col justify-center items-center mb-40 mt-6">

    <Tooltip text="Every nation has its own distinct areas of specialization, the things in which it invests its time, talent, and treasure, and the pursuits and features for which the nation becomes renowned for—these are tracked as a kingdom’s skills. At 1st level, the maximum number of skills in which a kingdom can have trained proficiency is six: two determined by the kingdom’s initial choice of government (see page 509) and up to four others determined by leadership roles (page 510). As a kingdom levels up, it can acquire training in additional skills and increase proficiencies to expert, master, or legendary. Choices about proficiencies cannot be changed after they have been made." class="relative bg-darkgreen border-2 border-lightgreen rounded-t-3xl text-white uppercase text-center text-lg p-1 font-extrabold w-80 mb-16">
      SKILLS
      <!-- 11 e 16 -->
      <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -left-20 scale-x-[-1] -z-20" />
      <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -right-20 -z-20" />
    </Tooltip>

    <div v-for="(skill, i) in skills" :key="i" class="flex gap-3 justify-center items-center mt-3">
      <div class="uppercase text-darkgreen font-extrabold text-3xl min-w-56">{{ skill.name }}</div>

      <input disabled :value="totalSkillValue(skill)" type="text" class="outline-none border-2 border-green-800 text-center w-20 h-12 bg-gray-200 text-lightgreen text-xl">

      <span class="uppercase text-darkgreen font-extrabold text-3xl">=</span>

      <div class="flex flex-col w-20 relative">
        <span v-if="i === 0" class="text-darkgreen text-sm uppercase font-bold absolute left-1/2 -top-5 transform -translate-x-1/2">Ability</span>
        <span class="uppercase text-white bg-darkgreen font-extrabold text-xs w-full text-center">{{ skill.scaling }}</span>
        <input :value="kingdom.ablityScores[skill.scaling].modifier()" disabled type="text" class="outline-none border-2 border-green-800 text-center w-full h-8 bg-gray-200 text-lightgreen text-xl">
      </div>

      <div class="relative">
        <span v-if="i === 0" class="text-darkgreen text-sm uppercase font-bold absolute left-1/2 -top-5 transform -translate-x-1/2">prof</span>
        <input :value="calculateProf(skill)" disabled type="text" class="outline-none border-2 border-green-800 text-center w-20 h-12 bg-gray-200 text-lightgreen text-xl">
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
import Tooltip from '@/components/Tooltip.vue'
import { useKingdomStore } from '@/stores/kingdom'

const kingdom = useKingdomStore()

const skills = ref([
  {
    name: 'agriculture',
    scaling: 'stability',
    trained: true,
    expert: true,
    master: true,
    legendary: true,
    status: 0,
    circumstance: 0,
    item: 0,
    other: 0,
  },
  {
    name: 'arts',
    scaling: 'culture',
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
    scaling: 'economy',
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
    scaling: 'stability',
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
    scaling: 'stability',
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
    scaling: 'economy',
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
    scaling: 'culture',
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
    scaling: 'economy',
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
    scaling: 'loyalty',
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
    scaling: 'culture',
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
    scaling: 'loyalty',
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
    scaling: 'culture',
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
    scaling: 'loyalty',
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
    scaling: 'economy',
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
    scaling: 'loyalty',
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
    scaling: 'stability',
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

const calculateProf = (skill) => {
  if (skill.legendary) return 8
  else if (skill.master) return 6
  else if (skill.expert) return 4
  else if (skill.trained) return 2
  else return 0
}

const totalSkillValue = (skill) => {
  let value = +skill.status + +skill.circumstance + +skill.item + +skill.other

  value += kingdom.ablityScores[skill.scaling].modifier()

  value += calculateProf(skill)

  return value
}
</script>