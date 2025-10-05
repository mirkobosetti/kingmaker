<template>
  <PageTitle title="Map" />

  <div class="flex flex-col justify-center items-center flex-wrap">
    <div class="flex gap-5 items-end justify-evenly h-16">
      <div class="flex flex-col gap-1 items-center">
        <img
          v-show="isCharacterMoved('Thorn')"
          src="@/assets/characters/thieve.png"
          class="h-14 z-10 opacity-40"
          alt="Legend"
          draggable="false"
          @click="resetCharacter('Thorn')"
        />
        <img
          src="@/assets/characters/thieve.png"
          class="h-14 z-10"
          alt="Legend"
          draggable="true"
          @dragstart="handleDragStart"
          @dragend="handleDragEnd($event, 'Thorn')"
        />
        <span class="text-lightgreen">Thorn</span>
      </div>
      <div class="flex flex-col gap-1 items-center">
        <img
          v-show="isCharacterMoved('Potus')"
          src="@/assets/characters/alchemist.png"
          class="h-12 z-10 opacity-40"
          alt="Legend"
          draggable="false"
          @click="resetCharacter('Potus')"
        />
        <img
          src="@/assets/characters/alchemist.png"
          class="h-12 z-10"
          alt="Legend"
          draggable="true"
          @dragstart="handleDragStart"
          @dragend="handleDragEnd($event, 'Potus')"
        />
        <span class="text-lightgreen">Potus</span>
      </div>
      <div class="flex flex-col gap-1 items-center">
        <img
          v-show="isCharacterMoved('Primus')"
          src="@/assets/characters/paladin.png"
          class="h-16 z-10 opacity-40"
          alt="Legend"
          draggable="false"
          @click="resetCharacter('Primus')"
        />
        <img
          src="@/assets/characters/paladin.png"
          class="h-16 z-10"
          alt="Legend"
          draggable="true"
          @dragstart="handleDragStart"
          @dragend="handleDragEnd($event, 'Primus')"
        />
        <span class="text-lightgreen">Primus</span>
      </div>
      <div class="flex flex-col gap-1 items-center">
        <img
          v-show="isCharacterMoved('Group')"
          src="@/assets/characters/group.png"
          class="h-16 z-10 opacity-40"
          alt="Legend"
          draggable="false"
          @click="resetCharacter('Group')"
        />
        <img
          src="@/assets/characters/group.png"
          class="h-16 z-10"
          alt="Legend"
          draggable="true"
          @dragstart="handleDragStart"
          @dragend="handleDragEnd($event, 'Group')"
        />
        <span class="text-lightgreen">Group</span>
      </div>
      <div class="flex flex-col gap-1 items-center">
        <img
          v-show="isCharacterMoved('Santiago')"
          src="@/assets/characters/goblin.png"
          class="h-10 z-10 opacity-40"
          alt="Legend"
          draggable="false"
          @click="resetCharacter('Santiago')"
        />
        <img
          src="@/assets/characters/goblin.png"
          class="h-10 z-10"
          alt="Legend"
          draggable="true"
          @dragstart="handleDragStart"
          @dragend="handleDragEnd($event, 'Santiago')"
        />
        <span class="text-lightgreen">Santiago</span>
      </div>
      <div class="flex flex-col gap-1 items-center">
        <img
          v-show="isCharacterMoved('Chiara')"
          src="@/assets/characters/elfranged.png"
          class="h-14 z-10 opacity-40"
          alt="Legend"
          draggable="false"
          @click="resetCharacter('Chiara')"
        />
        <img
          src="@/assets/characters/elfranged.png"
          class="h-14 z-10"
          alt="Legend"
          draggable="true"
          @dragstart="handleDragStart"
          @dragend="handleDragEnd($event, 'Chiara')"
        />
        <span class="text-lightgreen">Chiara</span>
      </div>
      <div class="flex flex-col gap-1 items-center">
        <img
          v-show="isCharacterMoved('Dorian')"
          src="@/assets/characters/elegantelf.png"
          class="h-14 z-10 opacity-40"
          alt="Legend"
          draggable="false"
          @click="resetCharacter('Dorian')"
        />
        <img
          src="@/assets/characters/elegantelf.png"
          class="h-14 z-10"
          alt="Legend"
          draggable="true"
          @dragstart="handleDragStart"
          @dragend="handleDragEnd($event, 'Dorian')"
        />
        <span class="text-lightgreen">Dorian</span>
      </div>
    </div>

    <div class="relative mt-12 overflow-hidden rounded-2xl">
      <img id="map" alt="Map" class="-z-10 w-full" src="@/assets/map.jpg" />
      <div
        @click="showCellModal('1.' + i)"
        class="exagon"
        :class="{
          active: cellId == '1.' + i,
          explored: map.isExplored('1.' + i),
          city: map.hasCity('1.' + i),
          expanded: map.isExpanded('1.' + i),
        }"
        v-for="i in 29"
        :key="'1.' + i"
        :style="{ left: `${i - 3 + 56.3 * (i - 1)}px`, top: '-16px' }"
      >
        <img v-if="map.hasCity('1.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div
          v-if="map.getCellDescription('1.' + i)"
          class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden"
        >
          {{ map.getCellDescription("1." + i) }}
        </div>
      </div>
      <div
        @click="showCellModal('2.' + i)"
        class="exagon"
        :class="{
          active: cellId == '2.' + i,
          explored: map.isExplored('2.' + i),
          city: map.hasCity('2.' + i),
          expanded: map.isExpanded('2.' + i),
        }"
        v-for="i in 29"
        :key="'2.' + i"
        :style="{ left: `${i - 31 + 56.3 * (i - 1)}px`, top: '34px' }"
      >
        <img v-if="map.hasCity('2.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div
          v-if="map.getCellDescription('2.' + i)"
          class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden"
        >
          {{ map.getCellDescription("2." + i) }}
        </div>
      </div>
      <div
        @click="showCellModal('3.' + i)"
        class="exagon"
        :class="{
          active: cellId == '3.' + i,
          explored: map.isExplored('3.' + i),
          city: map.hasCity('3.' + i),
          expanded: map.isExpanded('3.' + i),
        }"
        v-for="i in 29"
        :key="'3.' + i"
        :style="{ left: `${i - 3 + 56.3 * (i - 1)}px`, top: '84px' }"
      >
        <img v-if="map.hasCity('3.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div
          v-if="map.getCellDescription('3.' + i)"
          class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden"
        >
          {{ map.getCellDescription("3." + i) }}
        </div>
      </div>
      <div
        @click="showCellModal('4.' + i)"
        class="exagon"
        :class="{
          active: cellId == '4.' + i,
          explored: map.isExplored('4.' + i),
          city: map.hasCity('4.' + i),
          expanded: map.isExpanded('4.' + i),
        }"
        v-for="i in 29"
        :key="'4.' + i"
        :style="{ left: `${i - 31 + 56.3 * (i - 1)}px`, top: '134px' }"
      >
        <img v-if="map.hasCity('4.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div
          v-if="map.getCellDescription('4.' + i)"
          class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden"
        >
          {{ map.getCellDescription("4." + i) }}
        </div>
      </div>
      <div
        @click="showCellModal('5.' + i)"
        class="exagon"
        :class="{
          active: cellId == '5.' + i,
          explored: map.isExplored('5.' + i),
          city: map.hasCity('5.' + i),
          expanded: map.isExpanded('5.' + i),
        }"
        v-for="i in 29"
        :key="'5.' + i"
        :style="{ left: `${i - 3 + 56.3 * (i - 1)}px`, top: '184px' }"
      >
        <img v-if="map.hasCity('5.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div
          v-if="map.getCellDescription('5.' + i)"
          class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden"
        >
          {{ map.getCellDescription("5." + i) }}
        </div>
      </div>
      <div
        @click="showCellModal('6.' + i)"
        class="exagon"
        :class="{
          active: cellId == '6.' + i,
          explored: map.isExplored('6.' + i),
          city: map.hasCity('6.' + i),
          expanded: map.isExpanded('6.' + i),
        }"
        v-for="i in 29"
        :key="'6.' + i"
        :style="{ left: `${i - 31 + 56.3 * (i - 1)}px`, top: '234px' }"
      >
        <img v-if="map.hasCity('6.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div
          v-if="map.getCellDescription('6.' + i)"
          class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden"
        >
          {{ map.getCellDescription("6." + i) }}
        </div>
      </div>
      <div
        @click="showCellModal('7.' + i)"
        class="exagon"
        :class="{
          active: cellId == '7.' + i,
          explored: map.isExplored('7.' + i),
          city: map.hasCity('7.' + i),
          expanded: map.isExpanded('7.' + i),
        }"
        v-for="i in 29"
        :key="'7.' + i"
        :style="{ left: `${i - 3 + 56.3 * (i - 1)}px`, top: '284px' }"
      >
        <img v-if="map.hasCity('7.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div
          v-if="map.getCellDescription('7.' + i)"
          class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden"
        >
          {{ map.getCellDescription("7." + i) }}
        </div>
      </div>
      <div
        @click="showCellModal('8.' + i)"
        class="exagon"
        :class="{
          active: cellId == '8.' + i,
          explored: map.isExplored('8.' + i),
          city: map.hasCity('8.' + i),
          expanded: map.isExpanded('8.' + i),
        }"
        v-for="i in 29"
        :key="'8.' + i"
        :style="{ left: `${i - 31 + 56.3 * (i - 1)}px`, top: '334px' }"
      >
        <img v-if="map.hasCity('8.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div
          v-if="map.getCellDescription('8.' + i)"
          class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden"
        >
          {{ map.getCellDescription("8." + i) }}
        </div>
      </div>
      <div
        @click="showCellModal('9.' + i)"
        class="exagon"
        :class="{
          active: cellId == '9.' + i,
          explored: map.isExplored('9.' + i),
          city: map.hasCity('9.' + i),
          expanded: map.isExpanded('9.' + i),
        }"
        v-for="i in 29"
        :key="'9.' + i"
        :style="{ left: `${i - 3 + 56.3 * (i - 1)}px`, top: '384px' }"
      >
        <img v-if="map.hasCity('9.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div
          v-if="map.getCellDescription('9.' + i)"
          class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden"
        >
          {{ map.getCellDescription("9." + i) }}
        </div>
      </div>
      <div
        @click="showCellModal('10.' + i)"
        class="exagon"
        :class="{
          active: cellId == '10.' + i,
          explored: map.isExplored('10.' + i),
          city: map.hasCity('10.' + i),
          expanded: map.isExpanded('10.' + i),
        }"
        v-for="i in 29"
        :key="'10.' + i"
        :style="{ left: `${i - 31 + 56.3 * (i - 1)}px`, top: '434px' }"
      >
        <img v-if="map.hasCity('10.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div
          v-if="map.getCellDescription('10.' + i)"
          class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden"
        >
          {{ map.getCellDescription("10." + i) }}
        </div>
      </div>
      <div
        @click="showCellModal('11.' + i)"
        class="exagon"
        :class="{
          active: cellId == '11.' + i,
          explored: map.isExplored('11.' + i),
          city: map.hasCity('11.' + i),
          expanded: map.isExpanded('11.' + i),
        }"
        v-for="i in 29"
        :key="'11.' + i"
        :style="{ left: `${i - 3 + 56.3 * (i - 1)}px`, top: '484px' }"
      >
        <img v-if="map.hasCity('11.' + i)" class="w-8 rounded-full bg-red-500 p-1" src="@/assets/city.svg" />
        <div
          v-if="map.getCellDescription('11.' + i)"
          class="text-white text-xs text-center p-2 line-clamp-2 overflow-hidden"
        >
          {{ map.getCellDescription("11." + i) }}
        </div>
      </div>
    </div>
  </div>

  <CellModal
    @descriptionChanged="
      cellDescription = $event;
      map.setCellDescription(cellId, $event);
    "
    @typeChanged="
      cellType = $event;
      map.setCellType(cellId, $event);
    "
    @workSiteChanged="map.setCellWorkSite(cellId, $event)"
    @cityNameChanged="map.setCellCityName(cellId, $event)"
    v-if="showModal"
    :cellId="cellId"
    :cellDescription="cellDescription"
    :cellType="cellType"
    :cellWorkSite="cellWorkSite"
    :cellCityName="map.getCellCityName(cellId)"
    @close="hideCellModal"
    @save="saveCell"
    @reset="resetCell"
    @createCity="createCity(cellId)"
    :canExpand="hasCityOrExpandedNeighbour(cellId)"
  />
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import CellModal from "@/components/CellModal.vue";
import { useMapStore } from "@/stores/map";
import { useCitiesStore } from "@/stores/cities";
import { api } from "@/api";
import { toast } from "vue3-toastify";

const cities = useCitiesStore();
const map = useMapStore();
const showModal = ref(false);
const cellId = ref("");
const cellDescription = ref("");
const cellType = ref(0);
const cellWorkSite = ref(0);

// Fetch map data from the server
onBeforeMount(async () => {
  try {
    const response = await api.get("cells");
    console.log(response);

    if (response.data) {
      map.cells = response.data;
    }
  } catch (error) {
    // toast.error("Failed to fetch map data");
    map.cells = [
      {
        _id: "65f78a265c6b3fb8dc4566aa",
        id: "4.23",
        type: "1",
        cityname: null,
        description: "",
        worksite: null,
      },
      {
        _id: "65f78a285c6b3fb8dc4566cf",
        id: "3.24",
        type: "1",
      },
      {
        _id: "65f78a285c6b3fb8dc4566d8",
        id: "1.28",
        type: "1",
      },
      {
        _id: "65f78a285c6b3fb8dc4566da",
        id: "7.20",
        type: "1",
      },
      {
        _id: "65fee853ce4877c44fd69608",
        id: "8.21",
        type: "1",
      },
      {
        _id: "660851abd7c9227ea713b658",
        id: "9.17",
        type: "1",
        cityname: null,
        description: "Lucertole\nIsoletta",
        worksite: null,
      },
      {
        _id: "662aca9aadb8ab33db18dfb5",
        id: "10.21",
        description: "orso gufo",
        cityname: null,
        type: null,
        worksite: null,
      },
      {
        _id: "65f78a265c6b3fb8dc4566ab",
        id: "2.24",
        type: "1",
      },
      {
        _id: "65f78a265c6b3fb8dc4566b1",
        id: "6.18",
        type: "1",
      },
      {
        _id: "65f78a275c6b3fb8dc4566bb",
        id: "1.21",
        type: "1",
      },
      {
        _id: "65f78a275c6b3fb8dc4566c3",
        id: "1.22",
        type: "1",
      },
      {
        _id: "65f78a285c6b3fb8dc4566d6",
        id: "1.26",
        type: "1",
      },
      {
        _id: "65f78a285c6b3fb8dc4566d9",
        id: "1.29",
        type: "1",
      },
      {
        _id: "660851bdd7c9227ea713b659",
        id: "8.17",
        type: "1",
        cityname: null,
        description: "bruciato",
        worksite: null,
      },
      {
        _id: "660851c8d7c9227ea713b65a",
        id: "7.16",
        type: "1",
      },
      {
        _id: "66117ca81c9ef387357e5ea5",
        id: "8.23",
        type: "1",
      },
      {
        _id: "66117df01c9ef387357e5eae",
        id: "7.25",
        type: "1",
      },
      {
        _id: "66117df41c9ef387357e5eaf",
        id: "8.24",
        type: "3",
        cityname: null,
        description: "🐙 cultisti",
        worksite: null,
      },
      {
        _id: "662a634636b85e037c16340f",
        id: "9.16",
        type: "1",
      },
      {
        _id: "65f78a265c6b3fb8dc45669d",
        id: "5.19",
        type: "3",
        cityname: null,
        description: "farm",
        worksite: "1",
      },
      {
        _id: "65f78a265c6b3fb8dc4566a1",
        id: "3.20",
        type: "1",
      },
      {
        _id: "65f78a265c6b3fb8dc4566a3",
        id: "2.26",
        type: "1",
      },
      {
        _id: "65f78a265c6b3fb8dc4566a7",
        id: "3.21",
        description: "",
        type: "1",
      },
      {
        _id: "65f78a265c6b3fb8dc4566af",
        id: "2.28",
        type: "1",
      },
      {
        _id: "65f78a255c6b3fb8dc45669c",
        id: "5.18",
        description: "lumber",
        type: "3",
        worksite: "2",
        cityname: "",
      },
      {
        _id: "65f78a265c6b3fb8dc4566a6",
        id: "2.21",
        description: "Farm",
        type: "3",
        worksite: "1",
      },
      {
        _id: "65f78a265c6b3fb8dc4566ac",
        id: "2.23",
        type: "1",
      },
      {
        _id: "65f78a265c6b3fb8dc4566b2",
        id: "6.17",
        type: "1",
      },
      {
        _id: "65f78a285c6b3fb8dc4566d2",
        id: "2.19",
        type: "1",
      },
      {
        _id: "66117ca11c9ef387357e5ea4",
        id: "8.22",
        type: "1",
      },
      {
        _id: "65f78a255c6b3fb8dc45669a",
        id: "5.20",
        description: "road",
        type: "3",
      },
      {
        _id: "65f78a275c6b3fb8dc4566c9",
        id: "3.9",
        description: "",
      },
      {
        _id: "65feefc5ce4877c44fd69609",
        id: "9.19",
        description: "funghi gassosi",
        type: "1",
      },
      {
        _id: "661172bf1c9ef387357e5ea3",
        id: "9.21",
        type: "1",
      },
      {
        _id: "65f78a275c6b3fb8dc4566b6",
        id: "4.18",
        description: "tempio",
        type: "1",
        cityname: null,
        worksite: null,
      },
      {
        _id: "65f78a285c6b3fb8dc4566ce",
        id: "3.25",
        description: "cascate",
        type: "1",
      },
      {
        _id: "66117cd11c9ef387357e5ea9",
        id: "7.23",
        type: "3",
        cityname: null,
        description: "casa nobile",
        worksite: null,
      },
      {
        _id: "66117ce91c9ef387357e5eac",
        id: "4.24",
        type: "1",
      },
      {
        _id: "65f78a265c6b3fb8dc4566b4",
        id: "5.16",
      },
      {
        _id: "65f78a275c6b3fb8dc4566c2",
        id: "1.23",
        type: "1",
      },
      {
        _id: "65f78a285c6b3fb8dc4566dc",
        id: "7.21",
        description: "tempio fumo nero",
        type: "1",
      },
      {
        _id: "65fb20ab34ab404d3ceb81b5",
        id: "6.20",
        type: 2,
        description: "",
        cityname: "lunaris",
      },
      {
        _id: "662a607536b85e037c16340e",
        id: "10.16",
        description: "troll",
        cityname: null,
        type: "1",
        worksite: null,
      },
      {
        _id: "65f78a255c6b3fb8dc456699",
        id: "6.19",
        description: "Farm",
        type: "3",
        cityname: null,
        worksite: "1",
      },
      {
        _id: "65f78a275c6b3fb8dc4566c5",
        id: "5.14",
      },
      {
        _id: "661172b81c9ef387357e5ea2",
        id: "9.20",
        type: "1",
      },
      {
        _id: "66117cdd1c9ef387357e5eaa",
        id: "6.23",
        type: "3",
        cityname: null,
        description: null,
        worksite: null,
      },
      {
        _id: "65f78a275c6b3fb8dc4566c8",
        id: "2.14",
      },
      {
        _id: "65f78a275c6b3fb8dc4566cc",
        id: "5.22",
        type: "1",
      },
      {
        _id: "65fef921ce4877c44fd6960a",
        id: "9.18",
        description: "⚠️ torre corrotta\nsigillo divino spirale",
        cityname: null,
        type: "1",
        worksite: null,
      },
      {
        _id: "66117dff1c9ef387357e5eb1",
        id: "8.25",
        type: "1",
      },
      {
        _id: "65f78a275c6b3fb8dc4566c1",
        id: "",
      },
      {
        _id: "65f78a285c6b3fb8dc4566d1",
        id: "1.19",
        type: "1",
      },
      {
        _id: "66117ccb1c9ef387357e5ea8",
        id: "7.22",
        type: "1",
      },
      {
        _id: "66117cee1c9ef387357e5ead",
        id: "6.22",
        type: "3",
        cityname: null,
        description: null,
        worksite: "0",
      },
      {
        _id: "66117dfb1c9ef387357e5eb0",
        id: "7.24",
        type: "1",
        cityname: null,
        description: null,
        worksite: null,
      },
      {
        _id: "65f78a265c6b3fb8dc45669f",
        id: "6.21",
        description: "koboldi",
        type: "3",
        cityname: null,
        worksite: null,
      },
      {
        _id: "65f78a265c6b3fb8dc4566b0",
        id: "3.23",
        type: "1",
      },
      {
        _id: "65f78a275c6b3fb8dc4566b7",
        id: "3.19",
        type: "3",
        cityname: null,
        description: "lumber",
        worksite: "1",
      },
      {
        _id: "65f78a275c6b3fb8dc4566c7",
        id: "10.6",
        description: "Pitax lv.15",
        type: "0",
      },
      {
        _id: "65f78a275c6b3fb8dc4566cb",
        id: "10.7",
        description: "",
      },
      {
        _id: "65f78a285c6b3fb8dc4566d3",
        id: "1.18",
        type: "1",
      },
      {
        _id: "65f78a285c6b3fb8dc4566d5",
        id: "1.25",
        type: "1",
      },
      {
        _id: "65ff1bc7ce4877c44fd6960e",
        id: "7.18",
        type: "1",
        cityname: null,
        description: "50g per ogni esplorazione",
        worksite: null,
      },
      {
        _id: "65f78a265c6b3fb8dc4566b3",
        id: "5.17",
        type: "1",
      },
      {
        _id: "65f78a275c6b3fb8dc4566b5",
        id: "4.19",
        description: "lumber",
        type: "3",
        worksite: "2",
      },
      {
        _id: "65f78a275c6b3fb8dc4566ba",
        id: "3.18",
        type: "1",
      },
      {
        _id: "664a0c5238858b39585e6898",
        id: "10.17",
        type: "1",
      },
      {
        _id: "65f78a265c6b3fb8dc4566a9",
        id: "4.22",
        type: "1",
      },
      {
        _id: "65ff145ece4877c44fd6960c",
        id: "8.18",
        type: "1",
        cityname: null,
        description: "Vecchio e pantera",
        worksite: null,
      },
      {
        _id: "66117cad1c9ef387357e5ea6",
        id: "9.22",
        type: "1",
      },
      {
        _id: "66117cb31c9ef387357e5ea7",
        id: "9.23",
        type: "1",
      },
      {
        _id: "65f78a265c6b3fb8dc4566a0",
        id: "4.20",
        type: "3",
        cityname: null,
        description: "farm",
        worksite: "1",
      },
      {
        _id: "65f78a265c6b3fb8dc4566a2",
        id: "2.20",
        description: "",
        type: "2",
        cityname: "bordellum",
        worksite: null,
      },
      {
        _id: "65f78a265c6b3fb8dc4566a8",
        id: "4.21",
        type: "1",
      },
      {
        _id: "65f78a275c6b3fb8dc4566c4",
        id: "1.20",
        type: "1",
      },
      {
        _id: "65f78a275c6b3fb8dc4566ca",
        id: "9.6",
        description: "",
      },
      {
        _id: "65f78a285c6b3fb8dc4566cd",
        id: "2.18",
        type: "1",
      },
      {
        _id: "65f78a285c6b3fb8dc4566db",
        id: "8.20",
        cityname: null,
        description: "ortiche",
        type: "1",
        worksite: null,
      },
      {
        _id: "66117ce21c9ef387357e5eab",
        id: "5.23",
        type: "1",
      },
      {
        _id: "65f78a265c6b3fb8dc45669e",
        id: "7.19",
        description: "xp farm, ciocca di capelli verdi",
        type: "1",
      },
      {
        _id: "65f78a265c6b3fb8dc4566a5",
        id: "2.22",
        description: "Alchemista",
        type: "1",
        cityname: null,
        worksite: null,
      },
      {
        _id: "65f78a275c6b3fb8dc4566b8",
        id: "4.17",
        type: "1",
        cityname: null,
        description: null,
        worksite: null,
      },
      {
        _id: "65f78a275c6b3fb8dc4566b9",
        id: "3.17",
        type: "1",
      },
      {
        _id: "65f78a275c6b3fb8dc4566c6",
        id: "5.21",
        type: "1",
      },
      {
        _id: "65ff0f07ce4877c44fd6960b",
        id: "8.19",
        description: "🍄 Capanna\npozioni",
        type: "1",
        cityname: null,
        worksite: null,
      },
      {
        _id: "65ff18c9ce4877c44fd6960d",
        id: "7.17",
        type: "1",
        description: "Driade +2 Natura TW",
        cityname: null,
        worksite: null,
      },
      {
        _id: "65f78a265c6b3fb8dc4566a4",
        id: "3.22",
        description: "",
        type: "1",
        cityname: null,
        worksite: null,
      },
      {
        _id: "65f78a265c6b3fb8dc4566ad",
        id: "2.25",
        type: "1",
      },
      {
        _id: "65f78a265c6b3fb8dc4566ae",
        id: "2.27",
        type: "1",
      },
      {
        _id: "65f78a285c6b3fb8dc4566d0",
        id: "1.24",
        type: "1",
      },
      {
        _id: "65f78a285c6b3fb8dc4566d4",
        id: "2.29",
        type: "1",
      },
      {
        _id: "65f78a285c6b3fb8dc4566d7",
        id: "1.27",
        type: "1",
      },
      {
        _id: "68e2578ea51c89c43b43d489",
        id: "6.16",
        type: "1",
        cityname: null,
        description: null,
        worksite: null,
      },
    ];
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
    document.getElementById("cellTextarea").focus();
  }, 100);
};

const saveCell = async () => {
  const response = await api.put(`cells/${cellId.value}`, { ...map.getCellById(cellId.value) });

  if (response.status !== 200) toast.error("Failed to save cell");
  else hideCellModal();
};

const resetCell = async () => {
  const resDeleteCity = await api.delete(`cities/${map.getCellCityName(cellId.value)}`);

  if (resDeleteCity.status !== 200) toast.error("Failed to delete city");
  else {
    const resDeleteCell = await api.delete(`cells/${cellId.value}`);

    if (resDeleteCell.status !== 200) toast.error("Failed to delete cell");
    else {
      map.setCellDescription(cellId.value, "");
      map.setCellType(cellId.value, 0);
      map.setCellWorkSite(cellId.value, 0);
      map.setCellCityName(cellId.value, "");
      hideCellModal();
    }
  }
};

const hideCellModal = () => {
  showModal.value = false;
  cellId.value = "";
  cellDescription.value = "";
  cellType.value = 0;
  cellWorkSite.value = 0;
};

const createCity = async (id) => {
  const name = map.getCellCityName(id);
  const resCreateCity = await api.post("cities", { name });

  if (resCreateCity.status !== 201) toast.error("Failed to create city");
  else {
    const resSaveCell = await api.put(`cells/${cellId.value}`, { ...map.getCellById(cellId.value) });

    if (resSaveCell.status !== 200) toast.error("Failed to save cell");
    else {
      map.setCellType(id, 2);
      cities.cities.push({ name });
      hideCellModal();
    }
  }
};

/**
 * Check if a cell neighbour is a city or an expanded cell
 * if row(x) is odd change check for nord and sud to match the half exagon shift
 */
const hasCityOrExpandedNeighbour = (id) => {
  const [x, y] = id.split(".");
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
  e.target.style.opacity = "0";
}

function handleDragEnd(e, name) {
  e.target.style.opacity = "1";
  // set position of the dragged element to be the same as the mouse position
  e.target.style.position = "absolute";
  e.target.style.left = e.clientX - e.target.width / 2 + "px";
  e.target.style.top = e.clientY - e.target.height / 2 + "px";
  movedCharacters.value.push({ name, element: e.target });
}

const movedCharacters = ref([]);

function resetCharacter(name) {
  const character = movedCharacters.value.find((c) => c.name === name);
  if (character) {
    character.element.style.position = "static";
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
