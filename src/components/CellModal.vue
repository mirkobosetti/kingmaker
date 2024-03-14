<template>
  <div class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
    <div class="bg-white p-5 rounded-md text-center shadow-lg min-w-80 flex flex-col gap-2">
      <div class="text-darkgreen">ID: {{ cellId }}</div>

      <textarea id="cellTextarea" :value="cellDescription" @input="emit('descriptionChanged', $event.target.value)" class="w-full h-32 p-2 my-2 text-lightgreen outline-lightgreen resize-none rounded text-center" placeholder="Description" rows="3" cols="10" maxlength="50"></textarea>

      <div class="flex gap-2 items-center">
        <span class="text-darkgreen font-extrabold text-nowrap">Cell type</span>

        <select :disabled="!!cellCityName" :value="cellType" @input="emit('typeChanged', $event.target.value)" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen flex-1 uppercase">
          <option value="0">Unexplored</option>
          <option value="1">Explored</option>
          <option value="2" v-if="!canExpand">City</option>
          <option value="3" v-if="canExpand">Expanded</option>
        </select>
      </div>

      <div class="flex gap-2 items-center" v-if="cellType == 3">
        <span class="text-darkgreen font-extrabold text-nowrap">Work site</span>
        
        <select :value="cellWorkSite" @input="emit('workSiteChanged', $event.target.value)" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen flex-1 uppercase">
          <option value="0"></option>
          <option value="1">Farmland</option>
          <option value="2">Lumber Camp</option>
          <option value="3">Mine</option>
          <option value="4">Quarry</option>
        </select>
      </div>

      <div class="flex gap-2 items-center" v-if="cellType == 2">
        <span class="text-darkgreen font-extrabold text-nowrap">City name</span>
        
        <input :disabled="!!cellCityName" :value="cellCityName" @input="emit('cityNameChanged', $event.target.value)" type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center uppercase text-lightgreen w-full">
      </div>
      <button v-if="!cellCityName && cellType == 2" @click.stop.prevent="emit('createCity')" class="bg-darkgreen text-white px-3 py-1 mt-2 rounded-md hover:bg-lightgreen">Create City</button>
      <button @click.stop.prevent="emit('close')" class="bg-darkgreen text-white px-3 py-1 mt-2 rounded-md hover:bg-lightgreen">Close</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cellId: String,
  cellDescription: String,
  cellType: Number, // 0: unexplored, 1: explored, 2: city, 3: expanded,
  cellWorkSite: Number, // 0: none, 1: farmland, 2: lumber camp, 3: mine, 4: quarry
  cellCityName: String, // if this prop is not empty, the cell is a created city
  canExpand: Boolean // if the cell has a city or an expanded neighbour
});

const emit = defineEmits(['close', 'descriptionChanged', 'typeChanged', 'workSiteChanged', 'cityNameChanged', 'createCity']);
</script>