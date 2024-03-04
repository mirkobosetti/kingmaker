<template>
  <div class="flex flex-col justify-center items-center mb-40 mt-6">

    <div class="relative bg-darkgreen border-2 border-lightgreen rounded-t-3xl text-white uppercase text-center text-lg p-1 font-extrabold w-80 mb-8">

      {{ activeCityName ? activeCityName : 'CITIES' }}
      <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -left-20 scale-x-[-1] -z-20" />
      <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -right-20 -z-20" />
    </div>

    <div class="flex justify-center items-center flex-col gap-4 ">
      <div class="text-darkgreen text-2xl" v-if="!cities.length && !activeCityName">
        No cities added yet
      </div>

      <div v-else-if="!activeCityName" class="flex flex-col gap-3">
        <div v-for="city in cities" @click="activeCityName = city.name" :key="city.name" class="flex items-center cursor-pointer justify-between gap-5 bg-lightgreen px-3 py-1 rounded-md">
          <span class="uppercase font-extrabold text-3xl text-white">{{ city.name }}</span>
          <button @click.stop.prevent="deleteCity(city.name)" class="bg-red-400 text-white border-2 border-red-500 hover:bg-red-500 font-bold rounded-md w-8 h-8">x</button>
        </div>
      </div>

      <div class="flex flex-col items-center" v-if="!activeCityName">
        <input v-model="newCityName" type="text" id="city" class="w-40 h-8 rounded-md border-2 border-lightgreen bg-darkgreen text-white text-center border-b-0 rounded-b-none" />
        <button @click="newCity" class="bg-lightgreen text-white border-2 border-darkgreen hover:bg-darkgreen font-bold rounded-md w-40 h-8 border-t-0 rounded-t-none">Add City</button>
      </div>

      <button v-if="activeCityName" @click="back" class="bg-lightgreen text-white border-2 border-darkgreen hover:bg-darkgreen font-bold rounded-md w-40 h-8">Back</button>

    </div>

    <div v-if="activeCityName" class="grid grid-cols-3 w-full">

      <div class="flex flex-col gap-3 items-center justify-center">
        <StructureInfo :name="alchemyLab.name" :img="alchemyLab.img" :description="alchemyLab.description" :lots="alchemyLab.lots" :cost="alchemyLab.cost" :construction="alchemyLab.construction" :itemBonus="alchemyLab.itemBonus" :effects="alchemyLab.effects" />
      </div>

      <div class="dirt-square">
        <div class="small-square" v-for="i in 9" :key="i">
          <div class="cell-block" v-for="j in 4" :key="j"></div>
        </div>

        <div class="side top">
          <label class="water flex justify-center gap-2 items-center text-white text-nowrap">
            <Checkbox />
            Water
          </label>
          <label class="bridge water flex justify-center gap-2 items-center text-white text-nowrap">
            <Checkbox />
            Bridge
          </label>
          <label class="woodwall water flex justify-center gap-2 items-center text-white text-nowrap">
            <Checkbox />
            Wood Wall
          </label>
          <label class="stonewall water flex justify-center gap-2 items-center text-white text-nowrap">
            <Checkbox />
            Stone Wall
          </label>
        </div>

      </div>
      <div class="flex items-center justify-center">info</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from '@/components/Checkbox.vue';
import StructureInfo from '@/components/StructureInfo.vue';

const alchemyLab = {
  name: 'Alchemy Lab',
  img: require('@/assets/buildings/1x1/Alchemy Lab.png'),
  description: 'An alchemy laboratory serves as a factory for alchemists and their apprentices for the crafting of potions, elixirs, and all manner of alchemical items. An infamous kingdom’s laboratory might specialize in poisons as well.',
  lots: 1,
  cost: '18 RP, 2 Ore, 5 Stone',
  construction: 'Construction Industry (trained) DC 16',
  itemBonus: '+1 item bonus to Demolish',
  effects: 'Treat the settlement’s level as one level higher than its actual level for the purposes of determining which alchemical items are readily available for sale in that settlement. This effect stacks up to three times. Checks attempted to Identify Alchemy in any settlement with at least one alchemy laboratory gain a +1 item bonus.'
}

const newCityName = ref('');

function newCity() {
  cities.value.push({ name: newCityName.value });
  newCityName.value = '';
}

const cities = ref([
  {
    name: 'Brenejrne',
  }
])

const activeCityName = ref('Brenejrne');

function back() {
  activeCityName.value = '';
}

function deleteCity(name) {
  cities.value = cities.value.filter(city => city.name !== name);
}
</script>

<style scoped>
.dirt-square {
  position: relative;
  margin-top: 2em;
  /* width: 85%; */
  aspect-ratio: 1 / 1;
  position: relative;
  background-color: #b49d6d;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1.2em;
  padding: 5%;
  border: 2px solid black;
}

/* @media (min-width: 768px) {
  .dirt-square {
    width: 60%;
  }
}

@media (min-width: 1024px) {
  .dirt-square {
    width: 50%;
  }
}

@media (min-width: 1280px) {
  .dirt-square {
    width: 40%;
  }
} */

.small-square {
  background-color: #a7a87a;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 4px 5px #95895c;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.cell-block {
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

.cell-block:first-child {
  border-right: 1px dashed white;
  border-bottom: 1px dashed white;
}

.cell-block:nth-child(2) {
  border-left: 1px dashed white;
  border-bottom: 1px dashed white;
}

.cell-block:nth-child(3) {
  border-right: 1px dashed white;
  border-top: 1px dashed white;
}

.cell-block:last-child {
  border-left: 1px dashed white;
  border-top: 1px dashed white;
}

.cell-block:hover {
  background-color: #c4c4c4;
  cursor: pointer;
}

.side {
  position: absolute;
  background-color: white;
  z-index: 1;
  border: 2px solid black;
  display: flex;
  align-items: center;
}

.top {
  top: -15px;
  left: 15%;
  right: 0;
  width: 70%;
}

.right {
  top: 15%;
  right: -15px;
  bottom: 0;
  height: 70%;
}

.down {
  bottom: -15px;
  left: 15%;
  right: 0;
  width: 70%;
}

.left {
  top: 15%;
  left: -15px;
  bottom: 0;
  height: 70%;
}

.water {
  background-color: #4d4dff;
  width: 25%;
  height: 100%;
}

.bridge {
  background-color: #a7a87a;
  width: 25%;
  height: 100%;
}

.woodwall {
  background-color: #8b4513;
  width: 25%;
  height: 100%;
}

.stonewall {
  background-color: #a9a9a9;
  width: 25%;
  height: 100%;
}
</style>
