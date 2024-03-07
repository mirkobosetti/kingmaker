<template>
  <div class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
    <div class="bg-white p-5 rounded-md text-center shadow-lg min-w-80 flex flex-col gap-2">
      <div class="text-red-500">ID: {{ cellId }}</div>
      <textarea id="cellTextarea" :value="cellDescription" @input="emit('descriptionChanged', $event.target.value)" class="w-full h-32 p-2 mt-2" placeholder="Description" rows="3" cols="10" maxlength="50"></textarea>
      <div class="text-purple-500">
        <select :value="cellType" @input="emit('typeChanged', $event.target.value)" class="bg-purple-100 p-1 rounded-md">
          <option value="0">Unexplored</option>
          <option value="1">Explored</option>
          <option value="2">City</option>
          <option value="3">Expanded</option>
        </select>
      </div>

      <div class="text-orange-500" v-if="cellType == 3">
        <select :value="cellWorkSite" @input="emit('workSiteChanged', $event.target.value)" class="bg-orange-100 p-1 rounded-md">
          <option value="0"></option>
          <option value="1">Farmland</option>
          <option value="2">Lumber Camp</option>
          <option value="3">Mine</option>
          <option value="4">Quarry</option>
        </select>
      </div>
      <button @click.stop.prevent="emit('close')" class="bg-red-500 text-white px-3 py-1 mt-2 rounded-md">Close</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cellId: String,
  cellDescription: String,
  cellType: Number, // 0: unexplored, 1: explored, 2: city, 3: expanded,
  cellWorkSite: Number, // 0: none, 1: farmland, 2: lumber camp, 3: mine, 4: quarry
});

const emit = defineEmits(['close', 'descriptionChanged', 'typeChanged', 'workSiteChanged']);
</script>