<template>
  <PageTitle title="Map" />

  <div class="flex flex-col justify-center items-center flex-wrap">

    <div class="flex gap-5 items-end justify-evenly h-16">
      <div class="flex flex-col gap-1 items-center">
        <img v-show="isCharacterMoved('Mirko')" src="@/assets/characters/thieve.png" class="h-14 z-10 opacity-40" alt="Legend" draggable="false" @click="resetCharacter('Mirko')" />
        <img src="@/assets/characters/thieve.png" class="h-14 z-10" alt="Legend" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd($event, 'Mirko')" />
        <span class="text-lightgreen">Mirko</span>
      </div>
      <div class="flex flex-col gap-1 items-center">
        <img v-show="isCharacterMoved('Fabio')" src="@/assets/characters/alchemist.png" class="h-12 z-10 opacity-40" alt="Legend" draggable="false" @click="resetCharacter('Fabio')" />
        <img src="@/assets/characters/alchemist.png" class="h-12 z-10" alt="Legend" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd($event, 'Fabio')" />
        <span class="text-lightgreen">Fabio</span>
      </div>
      <div class="flex flex-col gap-1 items-center">
        <img v-show="isCharacterMoved('Oscar')" src="@/assets/characters/paladin.png" class="h-16 z-10 opacity-40" alt="Legend" draggable="false" @click="resetCharacter('Oscar')" />
        <img src="@/assets/characters/paladin.png" class="h-16 z-10" alt="Legend" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd($event, 'Oscar')" />
        <span class="text-lightgreen">Oscar</span>
      </div>
      <div class="flex flex-col gap-1 items-center">
        <img v-show="isCharacterMoved('Group')" src="@/assets/characters/group.png" class="h-16 z-10 opacity-40" alt="Legend" draggable="false" @click="resetCharacter('Group')" />
        <img src="@/assets/characters/group.png" class="h-16 z-10" alt="Legend" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd($event, 'Group')" />
        <span class="text-lightgreen">Group</span>
      </div>
      <div class="flex flex-col gap-1 items-center">
        <img v-show="isCharacterMoved('Santiago')" src="@/assets/characters/goblin.png" class="h-10 z-10 opacity-40" alt="Legend" draggable="false" @click="resetCharacter('Santiago')" />
        <img src="@/assets/characters/goblin.png" class="h-10 z-10" alt="Legend" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd($event, 'Santiago')" />
        <span class="text-lightgreen">Santiago</span>
      </div>
      <div class="flex flex-col gap-1 items-center">
        <img v-show="isCharacterMoved('Chiara')" src="@/assets/characters/elfranged.png" class="h-14 z-10 opacity-40" alt="Legend" draggable="false" @click="resetCharacter('Chiara')" />
        <img src="@/assets/characters/elfranged.png" class="h-14 z-10" alt="Legend" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd($event, 'Chiara')" />
        <span class="text-lightgreen">Chiara</span>
      </div>
      <div class="flex flex-col gap-1 items-center">
        <img v-show="isCharacterMoved('Garcia')" src="@/assets/characters/elegantelf.png" class="h-14 z-10 opacity-40" alt="Legend" draggable="false" @click="resetCharacter('Garcia')" />
        <img src="@/assets/characters/elegantelf.png" class="h-14 z-10" alt="Legend" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd($event, 'Garcia')" />
        <span class="text-lightgreen">Garcia</span>
      </div>
    </div>


    <div class="relative mt-12 overflow-hidden">
      <img id="map" alt="Map" class="-z-10 w-full" src="@/assets/map.jpg" />
      <div @click="showCellModal('1.' + i)" class="exagon" :class="{ active: cellId == '1.' + i, explored: map.isExplored('1.' + i), city: map.hasCity('1.' + i), expanded: map.isExpanded('1.' + i) }" v-for="i in 29" :key="'1.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '-16px' }">
        <img v-if="map.hasCity('1.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('1.' + i)" class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden">{{ map.getCellDescription('1.' + i) }}</div>
      </div>
      <div @click="showCellModal('2.' + i)" class="exagon" :class="{ active: cellId == '2.' + i, explored: map.isExplored('2.' + i), city: map.hasCity('2.' + i), expanded: map.isExpanded('2.' + i) }" v-for="i in 29" :key="'2.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '34px' }">
        <img v-if="map.hasCity('2.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('2.' + i)" class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden">{{ map.getCellDescription('2.' + i) }}</div>
      </div>
      <div @click="showCellModal('3.' + i)" class="exagon" :class="{ active: cellId == '3.' + i, explored: map.isExplored('3.' + i), city: map.hasCity('3.' + i), expanded: map.isExpanded('3.' + i) }" v-for="i in 29" :key="'3.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '84px' }">
        <img v-if="map.hasCity('3.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('3.' + i)" class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden">{{ map.getCellDescription('3.' + i) }}</div>
      </div>
      <div @click="showCellModal('4.' + i)" class="exagon" :class="{ active: cellId == '4.' + i, explored: map.isExplored('4.' + i), city: map.hasCity('4.' + i), expanded: map.isExpanded('4.' + i) }" v-for="i in 29" :key="'4.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '134px' }">
        <img v-if="map.hasCity('4.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('4.' + i)" class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden">{{ map.getCellDescription('4.' + i) }}</div>
      </div>
      <div @click="showCellModal('5.' + i)" class="exagon" :class="{ active: cellId == '5.' + i, explored: map.isExplored('5.' + i), city: map.hasCity('5.' + i), expanded: map.isExpanded('5.' + i) }" v-for="i in 29" :key="'5.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '184px' }">
        <img v-if="map.hasCity('5.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('5.' + i)" class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden">{{ map.getCellDescription('5.' + i) }}</div>
      </div>
      <div @click="showCellModal('6.' + i)" class="exagon" :class="{ active: cellId == '6.' + i, explored: map.isExplored('6.' + i), city: map.hasCity('6.' + i), expanded: map.isExpanded('6.' + i) }" v-for="i in 29" :key="'6.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '234px' }">
        <img v-if="map.hasCity('6.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('6.' + i)" class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden">{{ map.getCellDescription('6.' + i) }}</div>
      </div>
      <div @click="showCellModal('7.' + i)" class="exagon" :class="{ active: cellId == '7.' + i, explored: map.isExplored('7.' + i), city: map.hasCity('7.' + i), expanded: map.isExpanded('7.' + i) }" v-for="i in 29" :key="'7.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '284px' }">
        <img v-if="map.hasCity('7.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('7.' + i)" class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden">{{ map.getCellDescription('7.' + i) }}</div>
      </div>
      <div @click="showCellModal('8.' + i)" class="exagon" :class="{ active: cellId == '8.' + i, explored: map.isExplored('8.' + i), city: map.hasCity('8.' + i), expanded: map.isExpanded('8.' + i) }" v-for="i in 29" :key="'8.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '334px' }">
        <img v-if="map.hasCity('8.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('8.' + i)" class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden">{{ map.getCellDescription('8.' + i) }}</div>
      </div>
      <div @click="showCellModal('9.' + i)" class="exagon" :class="{ active: cellId == '9.' + i, explored: map.isExplored('9.' + i), city: map.hasCity('9.' + i), expanded: map.isExpanded('9.' + i) }" v-for="i in 29" :key="'9.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '384px' }">
        <img v-if="map.hasCity('9.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('9.' + i)" class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden">{{ map.getCellDescription('9.' + i) }}</div>
      </div>
      <div @click="showCellModal('10.' + i,)" class="exagon" :class="{ active: cellId == '10.' + i, explored: map.isExplored('10.' + i), city: map.hasCity('10.' + i), expanded: map.isExpanded('10.' + i) }" v-for="i in 29" :key="'10.' + i" :style="{ left: `${i - 31 + (56.3 * (i - 1))}px`, top: '434px' }">
        <img v-if="map.hasCity('10.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('10.' + i)" class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden">{{ map.getCellDescription('11.' + i) }}</div>
      </div>
      <div @click="showCellModal('11.' + i,)" class="exagon" :class="{ active: cellId == '11.' + i, explored: map.isExplored('11.' + i), city: map.hasCity('11.' + i), expanded: map.isExpanded('11.' + i) }" v-for="i in 29" :key="'11.' + i" :style="{ left: `${i - 3 + (56.3 * (i - 1))}px`, top: '484px' }">
        <img v-if="map.hasCity('11.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div v-if="map.getCellDescription('11.' + i)" class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden">{{ map.getCellDescription('11.' + i) }}</div>
      </div>
    </div>
  </div>

  <CellModal @descriptionChanged="cellDescription = $event; map.setCellDescription(cellId, $event)" @typeChanged="cellType = $event; map.setCellType(cellId, $event)" @workSiteChanged="map.setCellWorkSite(cellId, $event)" @cityNameChanged="map.setCellCityName(cellId, $event)" v-if=showModal :cellId="cellId" :cellDescription="cellDescription" :cellType="cellType" :cellWorkSite="cellWorkSite" :cellCityName="map.getCellCityName(cellId)" @close="hideCellModal" @save="saveCell" @reset="resetCell" @createCity="createCity(cellId)" :canExpand="hasCityOrExpandedNeighbour(cellId)" />

</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import CellModal from '@/components/CellModal.vue';
import { useMapStore } from '@/stores/map'
import { useCitiesStore } from '@/stores/cities';
import { api } from '@/api';
import { toast } from 'vue3-toastify';

const cities = useCitiesStore();
const map = useMapStore()
const showModal = ref(false);
const cellId = ref('');
const cellDescription = ref('');
const cellType = ref(0);
const cellWorkSite = ref(0);

// Fetch map data from the server
onBeforeMount(async () => {
  const response = await api.get("cells");

  if (response.status !== 200) toast.error('Failed to fetch map data');
  else {
    map.cells = response.data;

    cities.cities = [];
    for (const cell of map.cells) {
      if (cell.type == 2) {
        cities.cities.push({ name: cell.cityname });
      }
    }
  }
});

const showCellModal = (id) => {
  showModal.value = true;
  cellId.value = id;
  cellDescription.value = map.getCellDescription(id);
  cellType.value = map.getCellType(id) || 0;
  cellWorkSite.value = map.getCellWorkSite(id);

  // focus the textarea
  setTimeout(() => {
    document.getElementById('cellTextarea').focus();
  }, 100);
};

const saveCell = async () => {
  const response = await api.put(`cells/${cellId.value}`, { ...map.getCellById(cellId.value) });

  if (response.status !== 200) toast.error('Failed to save cell');
  else hideCellModal()
};

const resetCell = async () => {
  const response = await api.delete(`cells/${cellId.value}`);

  if (response.status !== 200) toast.error('Failed to reset cell');
  else hideCellModal()
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
    `${+x - 1}.${+y + (x % 2 == 0 ? -1 : +1)}`, // sud ovest

    `${+x + 1}.${+y}`, // nord est
    `${+x + 1}.${+y + (x % 2 == 0 ? -1 : +1)}`, // nord ovest
  ];

  return neighbours.some((neighbour) => map.hasCity(neighbour) || map.isExpanded(neighbour));
};

function handleDragStart(e) {
  e.target.style.opacity = '0';
}

function handleDragEnd(e, name) {
  e.target.style.opacity = '1';
  // set position of the dragged element to be the same as the mouse position
  e.target.style.position = 'absolute';
  e.target.style.left = e.clientX - e.target.width / 2 + 'px';
  e.target.style.top = e.clientY - e.target.height / 2 + 'px';
  movedCharacters.value.push({ name, element: e.target });
}

const movedCharacters = ref([]);

function resetCharacter(name) {
  const character = movedCharacters.value.find((c) => c.name === name);
  if (character) {
    character.element.style.position = 'static';
    movedCharacters.value = movedCharacters.value.filter((c) => c.name !== name);
  }
}

function isCharacterMoved(name) {
  return movedCharacters.value.some((c) => c.name === name);
}
</script>

<style scoped>
#map {
  min-width: 1616px;
  max-width: 1616px;
  width: 1616px;
}

.exagon {
  position: absolute;
  width: 58px;
  height: 67px;
  background-color: #5e5e5e94;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
}

.exagon.explored {
  background-color: transparent;
}

.exagon.city,
.exagon.expanded {
  background-color: transparent;
  box-shadow: inset 0 0 17px 9px #275025;
}

.exagon.active,
.exagon:hover {
  cursor: cell;
  box-shadow: inset 0 0 20px 6px #ff0000b5;
}
</style>
