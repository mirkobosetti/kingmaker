<template>
  <PageTitle :title="activeCityName ? activeCityName : 'CITIES'" />


  <div class="flex flex-col justify-center items-center mb-40">
    <div class="flex justify-center items-center flex-col gap-4 ">
      <div class="text-darkgreen text-center" v-if="!cities.cities.length && !activeCityName">
        <p class="text-2xl">No cities added yet</p>
        <p>Click on the
          <router-link class="underline" to="/map">map</router-link>
          to add a city in a cell
        </p>
      </div>

      <div v-else-if="!activeCityName" class="flex flex-col gap-3">
        <div v-for="city in cities.cities" @click="activeCityName = city.name" :key="city.name" class="flex items-center cursor-pointer justify-between gap-5 bg-lightgreen px-3 py-1 rounded-md">
          <span class="uppercase font-extrabold text-3xl text-white">{{ city.name }}</span>
        </div>
      </div>

      <button v-if="activeCityName" @click="back" class="bg-lightgreen text-white border-2 border-darkgreen hover:bg-darkgreen font-bold rounded-md w-40 h-8">Back</button>

    </div>

    <div v-if="activeCityName" class="grid grid-cols-3 w-full">

      <StructureInfo :name="structures[displayedStructure].name" :img="structures[displayedStructure].img" :description="structures[displayedStructure].description" :lots="structures[displayedStructure].lots" :cost="structures[displayedStructure].cost" :construction="structures[displayedStructure].construction" :itemBonus="structures[displayedStructure].itemBonus" :effects="structures[displayedStructure].effects" :upgradeFrom="structures[displayedStructure].upgradeFrom" :upgradeTo="structures[displayedStructure].upgradeTo" @back="previusStructure" @next="nextStructure" />

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

      <CityInfo :name=activeCityName :size=1 :level=1 :consumption=0 :exesInfluence=44 :maxItemBonus=98 />
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import Checkbox from '@/components/Checkbox.vue';
import StructureInfo from '@/components/StructureInfo.vue';
import CityInfo from '@/components/CityInfo.vue';
import { api } from '@/api';
import { useCitiesStore } from '@/stores/cities';

const cities = useCitiesStore();

onBeforeMount(async () => {
  const response = await api.get("cities");

  if (response.status !== 200) toast.error('Failed to fetch map data');
  else cities.cities = response.data;
});

const displayedStructure = ref(0);
const nextStructure = () => {
  if (displayedStructure.value < structures.length - 1) {
    displayedStructure.value++;
  }
};
const previusStructure = () => {
  if (displayedStructure.value > 0) {
    displayedStructure.value--;
  }
};

const structures = [{
  name: 'ACADEMY',
  img: require('@/assets/buildings/2x1/Academy.png'),
  description: 'An academy gives your citizens—and the PCs themselves— an institution where advanced study in many fields can be pursued, researched, and referenced.',
  lots: 2,
  cost: {
    rp: 52,
    ore: 0,
    stone: 12,
    luxuries: 6,
    lumber: 12,
    foot: 0,
  },
  construction: 'Scholarship (expert) DC 27',
  itemBonus: '+2 item bonus to Creative Solution',
  effects: 'While in a settlement with an Academy, you gain a +2 item bonus to Lore checks made to Recall Knowledge while Investigating, to all checks made while Researching (Gamemastery Guide 154), and to Decipher Writing.',
  upgradeFrom: "Library",
  upgradeTo: "military academy, university"
} , {
  name: 'Alchemy Lab',
  img: require('@/assets/buildings/1x1/Alchemy Lab.png'),
  description: 'An alchemy laboratory serves as a factory for alchemists and their apprentices for the crafting of potions, elixirs, and all manner of alchemical items. An infamous kingdom’s laboratory might specialize in poisons as well.',
  lots: 1,
  cost: {
    rp: 18,
    ore: 2,
    stone: 5,
    luxuries: 0,
    lumber: 0,
    foot: 0,
  },
  construction: 'Construction Industry (trained) DC 16',
  itemBonus: '+1 item bonus to Demolish',
  effects: 'Treat the settlement’s level as one level higher than its actual level for the purposes of determining which alchemical items are readily available for sale in that settlement. This effect stacks up to three times. Checks attempted to Identify Alchemy in any settlement with at least one alchemy laboratory gain a +1 item bonus.'

}]

const activeCityName = ref('');

function back() {
  activeCityName.value = '';
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
