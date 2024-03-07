<template>
  <PageTitle title="Map" />

  <div class="flex flex-col justify-center items-center flex-wrap">

    <div class="relative mt-12 overflow-hidden">
      <img id="map" alt="Map" class="-z-10 w-full" src="@/assets/map.jpg" />
      <div @click="showCellModal('1.' + i)" class="exagon" :class="{ active: cellId == '1.' + i, explored: map.isExplored('1.' + i), city: map.hasCity('1.' + i), expanded: map.isExpanded('1.' + i) }" v-for="i in 29" :key="'1.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '-16px' }">
        <img v-if="map.hasCity('1.' + i)" class="w-8" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('1.' + i)" class="text-white text-xs">{{ map.getCellDescription('1.' + i) }}</div>
      </div>
      <div @click="showCellModal('2.' + i)" class="exagon" :class="{ active: cellId == '2.' + i, explored: map.isExplored('2.' + i), city: map.hasCity('2.' + i), expanded: map.isExpanded('2.' + i) }" v-for="i in 29" :key="'2.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '34px' }">
        <img v-if="map.hasCity('2.' + i)" class="w-8" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('2.' + i)" class="text-white text-xs">{{ map.getCellDescription('2.' + i) }}</div>
      </div>
      <div @click="showCellModal('3.' + i)" class="exagon" :class="{ active: cellId == '3.' + i, explored: map.isExplored('3.' + i), city: map.hasCity('3.' + i), expanded: map.isExpanded('3.' + i) }" v-for="i in 29" :key="'3.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '84px' }">
        <img v-if="map.hasCity('3.' + i)" class="w-8" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('3.' + i)" class="text-white text-xs">{{ map.getCellDescription('3.' + i) }}</div>
      </div>
      <div @click="showCellModal('4.' + i)" class="exagon" :class="{ active: cellId == '4.' + i, explored: map.isExplored('4.' + i), city: map.hasCity('4.' + i), expanded: map.isExpanded('4.' + i) }" v-for="i in 29" :key="'4.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '134px' }">
        <img v-if="map.hasCity('4.' + i)" class="w-8" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('4.' + i)" class="text-white text-xs">{{ map.getCellDescription('4.' + i) }}</div>
      </div>
      <div @click="showCellModal('5.' + i)" class="exagon" :class="{ active: cellId == '5.' + i, explored: map.isExplored('5.' + i), city: map.hasCity('5.' + i), expanded: map.isExpanded('5.' + i) }" v-for="i in 29" :key="'5.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '184px' }">
        <img v-if="map.hasCity('5.' + i)" class="w-8" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('5.' + i)" class="text-white text-xs">{{ map.getCellDescription('5.' + i) }}</div>
      </div>
      <div @click="showCellModal('6.' + i)" class="exagon" :class="{ active: cellId == '6.' + i, explored: map.isExplored('6.' + i), city: map.hasCity('6.' + i), expanded: map.isExpanded('6.' + i) }" v-for="i in 29" :key="'6.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '234px' }">
        <img v-if="map.hasCity('6.' + i)" class="w-8" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('6.' + i)" class="text-white text-xs">{{ map.getCellDescription('6.' + i) }}</div>
      </div>
      <div @click="showCellModal('7.' + i)" class="exagon" :class="{ active: cellId == '7.' + i, explored: map.isExplored('7.' + i), city: map.hasCity('7.' + i), expanded: map.isExpanded('7.' + i) }" v-for="i in 29" :key="'7.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '284px' }">
        <img v-if="map.hasCity('7.' + i)" class="w-8" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('7.' + i)" class="text-white text-xs">{{ map.getCellDescription('7.' + i) }}</div>
      </div>
      <div @click="showCellModal('8.' + i)" class="exagon" :class="{ active: cellId == '8.' + i, explored: map.isExplored('8.' + i), city: map.hasCity('8.' + i), expanded: map.isExpanded('8.' + i) }" v-for="i in 29" :key="'8.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '334px' }">
        <img v-if="map.hasCity('8.' + i)" class="w-8" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('8.' + i)" class="text-white text-xs">{{ map.getCellDescription('8.' + i) }}</div>
      </div>
      <div @click="showCellModal('9.' + i)" class="exagon" :class="{ active: cellId == '9.' + i, explored: map.isExplored('9.' + i), city: map.hasCity('9.' + i), expanded: map.isExpanded('9.' + i) }" v-for="i in 29" :key="'9.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '384px' }">
        <img v-if="map.hasCity('9.' + i)" class="w-8" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('9.' + i)" class="text-white text-xs">{{ map.getCellDescription('9.' + i) }}</div>
      </div>
      <div @click="showCellModal('10.' + i, )" class="exagon" :class="{ active: cellId == '10.' + i, explored: map.isExplored('10.' + i), city: map.hasCity('10.' + i), expanded: map.isExpanded('10.' + i) }" v-for="i in 29" :key="'10.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '434px' }">
        <img v-if="map.hasCity('10.' + i)" class="w-8" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('10.' + i)" class="text-white text-xs">{{ map.getCellDescription('11.' + i) }}</div>
      </div>
      <div @click="showCellModal('11.' + i, )" class="exagon" :class="{ active: cellId == '11.' + i, explored: map.isExplored('11.' + i), city: map.hasCity('11.' + i), expanded: map.isExpanded('11.' + i) }" v-for="i in 29" :key="'11.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '484px' }">
        <img v-if="map.hasCity('11.' + i)" class="w-8" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('11.' + i)" class="text-white text-xs">{{ map.getCellDescription('11.' + i) }}</div>
      </div>
    </div>
  </div>

  <CellModal
    @descriptionChanged="map.setCellDescription(cellId, $event)"
    @typeChanged="cellType = $event; map.setCellType(cellId, $event)"
    @workSiteChanged="map.setCellWorkSite(cellId, $event)"
    @cityNameChanged="map.setCellCityName(cellId, $event)"
    v-if=showModal
    :cellId="cellId"
    :cellDescription="cellDescription"
    :cellType="cellType"
    :cellWorkSite="cellWorkSite"
    :cellCityName="map.getCellCityName(cellId)"
    @close="hideCellModal"
    @createCity="createCity(cellId)"
    :canExpand="hasCityOrExpandedNeighbour(cellId)"
  />

</template>

<script setup>
import { ref } from 'vue';
import CellModal from '@/components/CellModal.vue';
import { useMapStore } from '@/stores/map'
import { useCitiesStore } from '@/stores/cities';

const cities = useCitiesStore();
const map = useMapStore()
const showModal = ref(false);
const cellId = ref('');
const cellDescription = ref('');
const cellType = ref(0);
const cellWorkSite = ref(0);

const showCellModal = (id) => {
  showModal.value = true;
  cellId.value = id;
  cellDescription.value = map.getCellDescription(id);
  cellType.value = map.getCellType(id);
  cellWorkSite.value = map.getCellWorkSite(id);

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
  cellWorkSite.value = 0;
};

const createCity = (id) => {
  map.setCellType(id, 2);
  cities.cities.push({ name: map.getCellCityName(id) });
  hideCellModal();
};

/**
 * Check if a cell neighbour is a city or an expanded cell
 * if row(x) is odd change check for nord and sud to match the half exagon shift
 */
const hasCityOrExpandedNeighbour = (id) => {
  const [x, y] = id.split('.');
  // working on odd lines
  const neighbours = [
    `${+x}.${+y - 1}`, // ovest
    `${+x}.${+y + 1}`, // est

    `${+x - 1}.${+y}`, // sud est
    `${+x - 1}.${+y + (x%2==0 ? -1: +1)}`, // sud ovest

    `${+x + 1}.${+y}`, // nord est
    `${+x + 1}.${+y + (x%2==0 ? -1: +1)}`, // nord ovest
  ];

  return neighbours.some((neighbour) => map.hasCity(neighbour) || map.isExpanded(neighbour));
};

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
  background-color: #78903590;
}

.exagon.city,
.exagon.expanded {
  background-color: #27502590;
}
</style>
