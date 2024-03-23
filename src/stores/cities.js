import { defineStore } from "pinia";
import { ref } from "vue";

export const useCitiesStore = defineStore("cities", () => {
  const cities = ref([])
  const draggedStructureName = ref('')

  return {
    cities,
    draggedStructureName
  };
});
