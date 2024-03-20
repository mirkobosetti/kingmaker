<template>
  <div class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
    <div class="bg-white p-5 rounded-md text-center shadow-lg min-w-80 flex flex-col gap-2">
      <!-- <div class="text-darkgreen">ID: {{ cellId }}</div> -->

      <textarea id="cellTextarea" :value="cellDescription" @input="descriptionChanged" class="w-full h-32 p-2 my-2 text-lightgreen outline-lightgreen resize-none rounded text-center" placeholder="Description" rows="3" cols="10" maxlength="50"></textarea>

      <div class="flex gap-2 items-center">
        <span class="text-darkgreen font-extrabold text-nowrap">Cell type</span>

        <select :disabled="!!cellCityName" :value="cellType" @input="typeChanged" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen flex-1 uppercase">
          <option value="0">Unexplored</option>
          <option value="1">Explored</option>
          <option value="2">City</option>
          <option value="3" v-if="canExpand">Expanded</option>
        </select>
      </div>

      <div class="flex gap-2 items-center" v-if="cellType == 3">
        <span class="text-darkgreen font-extrabold text-nowrap">Work site</span>

        <select :value="cellWorkSite" @input="workSiteChanged" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen flex-1 uppercase">
          <option value="0"></option>
          <option value="1">Farmland</option>
          <option value="2">Lumber Camp</option>
          <option value="3">Mine</option>
          <option value="4">Quarry</option>
        </select>
      </div>

      <div class="flex gap-2 items-center" v-if="cellType == 2">
        <span class="text-darkgreen font-extrabold text-nowrap">City name</span>

        <input :disabled="!!backup.cellCityName" :value="cellCityName" @input="cityNameChanged" type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center uppercase text-lightgreen w-full">
      </div>

      <div v-if="toSave" class="flex gap-2">
        <button @click.stop.prevent="cancel" class="bg-red-500 text-white px-3 py-1 mt-2 rounded-md hover:bg-red-400">Cancel</button>
        <button v-if="!backup.cellCityName && cellType == 2" :disabled="!cellCityName" @click.stop.prevent="emit('createCity')" class="bg-darkgreen text-white px-3 py-1 mt-2 rounded-md hover:bg-lightgreen flex-1">Create City</button>
        <button v-else @click.stop.prevent="emit('save')" class="bg-darkgreen text-white px-3 py-1 mt-2 rounded-md hover:bg-lightgreen flex-1">Save</button>
      </div>

      <div v-else class="flex gap-2">
        <button @click.stop.prevent="emit('reset')" class="bg-red-500 text-white px-3 py-1 mt-2 rounded-md hover:bg-red-400">Reset</button>
        <button @click.stop.prevent="emit('close')" class="bg-darkgreen text-white px-3 py-1 mt-2 rounded-md hover:bg-lightgreen flex-1">Close</button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  cellId: String,
  cellDescription: String,
  cellType: Number, // 0: unexplored, 1: explored, 2: city, 3: expanded,
  cellWorkSite: Number, // 0: none, 1: farmland, 2: lumber camp, 3: mine, 4: quarry
  cellCityName: String, // if this prop is not empty, the cell is a created city
  canExpand: Boolean // if the cell has a city or an expanded neighbour
});

const backup = {
  cellDescription: props.cellDescription,
  cellType: props.cellType,
  cellWorkSite: props.cellWorkSite,
  cellCityName: props.cellCityName
}

const emit = defineEmits(['close', 'save', 'reset', 'descriptionChanged', 'typeChanged', 'workSiteChanged', 'cityNameChanged', 'createCity']);

const toSave = ref(false);

const descriptionChanged = (event) => {
  emit('descriptionChanged', event.target.value);
  toSave.value = true;
}

const typeChanged = (event) => {
  emit('typeChanged', event.target.value);
  toSave.value = true;
}

const workSiteChanged = (event) => {
  emit('workSiteChanged', event.target.value);
  toSave.value = true;
}

const cityNameChanged = (event) => {
  emit('cityNameChanged', event.target.value);
  toSave.value = true;
}

const cancel = () => {
  emit('descriptionChanged', backup.cellDescription);
  emit('typeChanged', backup.cellType);
  emit('workSiteChanged', backup.cellWorkSite);
  emit('cityNameChanged', backup.cellCityName);

  emit('close');
}

// when i press esc key, hide the modal
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (toSave.value) {
      emit('save');
    } else {
      emit('close');
    }
  }
});
</script>