<template>
  <PageTitle title="Feats" text="A kingdom gains feats as it increases in level. Some feats are general-purpose abilities that apply all the time. Others grant benefits to specific kingdom activities or events or allow kingdoms to perform special activities. Each time a kingdom gains a feat, players can select any feat whose level does not exceed their kingdom's level and whose prerequisites their kingdom satisfies." />

  <div class="flex flex-col justify-center items-center mb-40">
    <!-- list all information about the feat, checklist left to select if possible -->
    <table class="table-auto">
      <thead>
        <tr class="text-white uppercase bg-darkgreen h-10">
          <th class="px-2"></th>
          <th class="px-2">name</th>
          <th class="px-2">level</th>
          <th class="px-2">prerequisite</th>
          <th class="px-2">benefits</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(feat, i) in feats" :key="i" class="h-10" :style="i % 2 === 0 ? 'background-color: rgb(247 219 146)' : 'background-color: rgb(253 243 186)'">
          <td class="text-center"><input type="checkbox" class="h-6 w-6 m-2 accent-lightgreen" :class="{ 'bg-gray-200': isDisabled(feat) }" :disabled="isDisabled(feat)"></td>
          <td class="text-center">{{ feat.name }}</td>
          <td class="text-center">{{ feat.level }}</td>
          <td class="text-center">{{ feat.prerequisite }}</td>
          <td class="text-center">{{ feat.benefits }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const feats = ref([
  {
    name: 'Civil Service',
    level: 1,
    prerequisite: '—',
    benefits: 'Citizens bolster vacant leadership roles'
  },
  {
    name: 'Cooperative Leadership',
    level: 1,
    prerequisite: '—',
    benefits: 'Leaders gain increased bonuses to aid each other'
  },
  {
    name: 'Crush Dissent',
    level: 1,
    prerequisite: 'Trained in Warfare',
    benefits: 'Quell Dissent more efficiently'
  },
  {
    name: 'Fortified Fiefs',
    level: 1,
    prerequisite: 'Trained in Defense',
    benefits: 'Gain bonuses to Fortify, and Construct or Rebuild certain buildings easier'
  },
  {
    name: 'Insider Trading',
    level: 1,
    prerequisite: 'Trained in Industry',
    benefits: '+1 to Work Camp, Establish Trade Agreement, and Trade Commodities activities'
  },
  {
    name: 'Kingdom Assurance',
    level: 1,
    prerequisite: 'Trained in at least three skills',
    benefits: 'Receive a fixed result on a skill check'
  },
  {
    name: 'Muddle Through',
    level: 1,
    prerequisite: 'Trained in Wilderness',
    benefits: 'Ruin accumulates more slowly'
  },
  {
    name: 'Practical Magic',
    level: 1,
    prerequisite: 'Trained in Magic',
    benefits: '+1 to Magic checks, use Magic instead of Engineering'
  },
  {
    name: 'Pull Together',
    level: 1,
    prerequisite: 'Trained in Politics',
    benefits: 'Your citizens help mitigate failures'
  },
  {
    name: 'Skill Training',
    level: 1,
    prerequisite: '—',
    benefits: 'Become trained in a Kingdom skill'
  },
  {
    name: 'Endure Anarchy',
    level: 3,
    prerequisite: 'Loyalty 14',
    benefits: 'Recover from Unrest more quickly and lessen its effects'
  },
  {
    name: 'Inspiring Entertainment',
    level: 3,
    prerequisite: 'Culture 14',
    benefits: 'Use Culture on checks to determine Unrest'
  },
  {
    name: 'Liquidate Resources',
    level: 3,
    prerequisite: 'Economy 14',
    benefits: 'Draw upon reserve funds to avoid Ruin'
  },
  {
    name: 'Quick Recovery',
    level: 3,
    prerequisite: 'Stability 14',
    benefits: '+2 to checks to end ongoing harmful events'
  },
  {
    name: 'Free and Fair',
    level: 7,
    prerequisite: '—',
    benefits: 'Use New Leadership and other activities more efficiently'
  },
  {
    name: 'Quality of Life',
    level: 7,
    prerequisite: '—',
    benefits: 'Cost of living expenses are reduced'
  },
  {
    name: 'Fame and Fortune',
    level: 11,
    prerequisite: '—',
    benefits: 'Gain RP when you critically succeed at Kingdom skills'
  }
])

const isDisabled = (feat) => {
  return feat.level > 1 || feat.prerequisite !== '—'
}

</script>