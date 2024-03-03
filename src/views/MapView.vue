<template>
  <div class="map">
    <img alt="Map" src="@/assets/map.jpg" />
    <div @click="showCellModal('1.' + i, '1.' + i, 0)" class="exagon" v-for="i in 29" :key="'1.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '-16px' }">1.{{ i }}</div>
    <div class="exagon" v-for="i in 29" :key="'2.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '34px' }">2.{{ i }}</div>
    <div class="exagon" v-for="i in 29" :key="'3.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '84px' }">3.{{ i }}</div>
    <div class="exagon" v-for="i in 29" :key="'4.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '134px' }">4.{{ i }}</div>
    <div class="exagon" v-for="i in 29" :key="'5.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '184px' }">5.{{ i }}</div>
    <div class="exagon" v-for="i in 29" :key="'6.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '234px' }">6.{{ i }}</div>
    <div class="exagon" v-for="i in 29" :key="'7.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '284px' }">7.{{ i }}</div>
    <div class="exagon" v-for="i in 29" :key="'8.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '334px' }">8.{{ i }}</div>
    <div class="exagon" v-for="i in 29" :key="'9.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '384px' }">9.{{ i }}</div>
    <div class="exagon" v-for="i in 29" :key="'10.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '434px' }">10.{{ i }}</div>
    <div class="exagon" v-for="i in 29" :key="'11.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '484px' }">11.{{ i }}</div>
  </div>

  <CellModal v-if="showModal" :cellId="cellId" :cellDescription="cellDescription" :cellType="cellType" @close="hideCellModal" />

</template>

<script setup>
import { ref } from 'vue';
import CellModal from '@/components/CellModal.vue';

const showModal = ref(false);
const cellId = ref('');
const cellDescription = ref('');
const cellType = ref(0);

const showCellModal = (id, description, type) => {
  showModal.value = true;
  cellId.value = id;
  cellDescription.value = description;
  cellType.value = type;
};

const hideCellModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
.map {
  position: relative;
  overflow: hidden;
}

.map img {
  width: 100%;
  max-width: 100vw;
  z-index: -1;
}

.exagon {
  position: absolute;
  width: 57px;
  height: 65px;
  background-color: transparent;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.exagon:hover {
  background-color: rgba(255, 0, 0, 0.3);
  cursor: cell;
  box-shadow: 0 0 5px 0 rgba(255, 0, 0, 0.3);
}
</style>
