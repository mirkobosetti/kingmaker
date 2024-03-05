import { defineStore } from "pinia";
import { ref } from "vue";

export const useCitiesStore = defineStore("cities", () => {
  const cities = ref([
    {
      name: 'Brenejrne',
    }
  ])

  return {
    cities
  };
});
