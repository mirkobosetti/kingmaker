<template>
  <div class="relative">
    <img id="map" alt="Map" class="-z-10 w-full" src="@/assets/map.jpg" />
    <div @click="showCellModal('1.' + i, getCellDescription('1.' + i), getCellType('1.' + i))" class="exagon" :class="{ active: cellId == '1.' + i, explored: isExplored('1.' + i), city: hasCity('1.' + i), expanded: isExpanded('1.' + i) }" v-for="i in 29" :key="'1.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '-16px' }">
      <img v-if="hasCity('1.' + i)" class="w-8" src="@/assets/city.svg" />
    </div>
    <div @click="showCellModal('2.' + i, getCellDescription('2.' + i), getCellType('2.' + i))" class="exagon" :class="{ active: cellId == '2.' + i }" v-for="i in 29" :key="'2.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '34px' }"></div>
    <div @click="showCellModal('3.' + i, getCellDescription('3.' + i), getCellType('3.' + i))" class="exagon" :class="{ active: cellId == '3.' + i }" v-for="i in 29" :key="'3.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '84px' }"></div>
    <div @click="showCellModal('4.' + i, getCellDescription('4.' + i), getCellType('4.' + i))" class="exagon" :class="{ active: cellId == '4.' + i }" v-for="i in 29" :key="'4.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '134px' }"></div>
    <div @click="showCellModal('5.' + i, getCellDescription('5.' + i), getCellType('5.' + i))" class="exagon" :class="{ active: cellId == '5.' + i }" v-for="i in 29" :key="'5.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '184px' }"></div>
    <div @click="showCellModal('6.' + i, getCellDescription('6.' + i), getCellType('6.' + i))" class="exagon" :class="{ active: cellId == '6.' + i }" v-for="i in 29" :key="'6.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '234px' }"></div>
    <div @click="showCellModal('7.' + i, getCellDescription('7.' + i), getCellType('7.' + i))" class="exagon" :class="{ active: cellId == '7.' + i }" v-for="i in 29" :key="'7.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '284px' }"></div>
    <div @click="showCellModal('8.' + i, getCellDescription('8.' + i), getCellType('8.' + i))" class="exagon" :class="{ active: cellId == '8.' + i }" v-for="i in 29" :key="'8.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '334px' }"></div>
    <div @click="showCellModal('9.' + i, getCellDescription('9.' + i), getCellType('9.' + i))" class="exagon" :class="{ active: cellId == '9.' + i }" v-for="i in 29" :key="'9.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '384px' }"></div>
    <div @click="showCellModal('10.' + i, getCellDescription('10.' + i), getCellType('10.' + i))" class="exagon" :class="{ active: cellId == '10.' + i }" v-for="i in 29" :key="'10.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '434px' }"></div>
    <div @click="showCellModal('11.' + i, getCellDescription('11.' + i), getCellType('11.' + i))" class="exagon" :class="{ active: cellId == '11.' + i }" v-for="i in 29" :key="'11.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '484px' }"></div>
  </div>

  <CellModal @descriptionChanged="setCellDescription($event)" @typeChanged=setCellType($event) v-if="showModal" :cellId="cellId" :cellDescription="cellDescription" :cellType="cellType" @close="hideCellModal" />

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

  // focus the textarea
  setTimeout(() => {
    document.getElementById('cellTextarea').focus();
  }, 100);
};

const hideCellModal = () => {
  showModal.value = false;
  cellId.value = '';
  cellDescription.value = '';
  cellType.value = 0;
};

const getCellDescription = (id) => localStorage.getItem(id + "_desc") || '';
const setCellDescription = (description) => localStorage.setItem(cellId.value + "_desc", description);
const getCellType = (id) => localStorage.getItem(id + "_type") || 0;
const setCellType = (type) => localStorage.setItem(cellId.value + "_type", type);

const isExplored = (id) => getCellType(id) == 1;
const hasCity = (id) => getCellType(id) == 2;
const isExpanded = (id) => getCellType(id) == 3;

// when i press esc key, hide the modal
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hideCellModal();
  }
});
</script>

<style scoped>
#map {
  min-width: 1616px;
  max-width: 1616px;
  width: 1616px;
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

.exagon.active,
.exagon:hover {
  cursor: cell;
  box-shadow: inset 0 0 20px 6px #ff0000b5;
}

.exagon.explored {
  background-color: rgba(0, 255, 0, 0.3);
}

.exagon.city,
.exagon.expanded {
  background-color: rgba(0, 0, 255, 0.3);
}
</style>
