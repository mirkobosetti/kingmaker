<template>
  <div class="full-overlay">
    <div class="modal">
      <h2>{{ cellId }}</h2>
      <p>{{ cellDescription }}</p>
      <p>{{ cellType }}</p>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cellId: String,
  cellDescription: String,
  cellType: Number, // 0: unexplored, 1: explored, 2: city, 3: expanded
});

const emit = defineEmits(['close']);
</script>

<style scoped>
.full-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

.modal h2 {
  margin-top: 0;
}

.modal button {
  margin-top: 10px;
}

.modal button:hover {
  cursor: pointer;
}

.modal button:active {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>