<template>
  <div class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
    <div class="bg-white p-5 rounded-md text-center shadow-lg">
      <div class="text-red-500">ID: {{ cellId }}</div>
      <textarea id="cellTextarea" :value="cellDescription" @input="emit('descriptionChanged', $event.target.value)" class="w-full h-32 p-2 mt-2" />
      <div class="text-purple-500">
        <select :value="cellType" @input="emit('typeChanged', $event.target.value)" class="bg-purple-100 p-1 rounded-md">
          <option value="0">Unexplored</option>
          <option value="1">Explored</option>
          <option value="2">City</option>
          <option value="3">Expanded</option>
        </select>
      </div>
      <button @click="emit('close')" class="bg-red-500 text-white px-3 py-1 mt-2 rounded-md">Close</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cellId: String,
  cellDescription: String,
  cellType: Number, // 0: unexplored, 1: explored, 2: city, 3: expanded
});

const emit = defineEmits(['close', 'descriptionChanged', 'typeChanged']);
</script>