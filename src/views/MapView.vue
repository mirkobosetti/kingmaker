<template>
  <div class="relative overflow-hidden">
    <img alt="Map" class="-z-10 w-full" src="@/assets/map.jpg" />
    <div @click="showCellModal('1.' + i, '1.' + i, 0)" class="exagon" v-for="i in 29" :key="'1.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '-16px' }"></div>
    <div @click="showCellModal('2.' + i, '2.' + i, 0)" class="exagon" v-for="i in 29" :key="'2.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '34px' }"></div>
    <div @click="showCellModal('3.' + i, '3.' + i, 0)" class="exagon" v-for="i in 29" :key="'3.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '84px' }"></div>
    <div @click="showCellModal('4.' + i, '4.' + i, 0)" class="exagon" v-for="i in 29" :key="'4.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '134px' }"></div>
    <div @click="showCellModal('5.' + i, '5.' + i, 0)" class="exagon" v-for="i in 29" :key="'5.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '184px' }"></div>
    <div @click="showCellModal('6.' + i, '6.' + i, 0)" class="exagon" v-for="i in 29" :key="'6.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '234px' }"></div>
    <div @click="showCellModal('7.' + i, '7.' + i, 0)" class="exagon" v-for="i in 29" :key="'7.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '284px' }"></div>
    <div @click="showCellModal('8.' + i, '8.' + i, 0)" class="exagon" v-for="i in 29" :key="'8.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '334px' }"></div>
    <div @click="showCellModal('9.' + i, '9.' + i, 0)" class="exagon" v-for="i in 29" :key="'9.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '384px' }"></div>
    <div @click="showCellModal('10.' + i, '10.' + i, 0)" class="exagon" v-for="i in 29" :key="'10.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '434px' }"></div>
    <div @click="showCellModal('11.' + i, '11.' + i, 0)" class="exagon" v-for="i in 29" :key="'11.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '484px' }"></div>
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
