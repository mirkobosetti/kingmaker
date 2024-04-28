<template>
  <div class="px-5 pb-20">
    <img src="@/assets/kingmaker.png" alt="kingmaker logo" class="h-28 mx-auto" />

    <div class="flex gap-3 w-full">
      <div class="relative aspect-square border-2 border-darkgreen rounded-xl overflow-hidden flex-1 min-h-52 max-h-60">
        <router-link key="Map" to="/map">
          <img src="@/assets/menumap.png" alt="map" class="h-full w-full object-cover" />
          <div
            class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-2xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          >
            Map
          </div>
        </router-link>
      </div>
      <div class="flex flex-col gap-3">
        <div
          class="relative border-2 border-darkgreen bg-lightgreen rounded-xl overflow-hidden aspect-square max-w-20 px-2"
        >
          <router-link key="Battle" to="/battle">
            <div
              class="absolute bottom-0 left-1/2 -translate-x-1/2 text-white text-2xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            >
              Battle
            </div>
            <img src="@/assets/axe.svg" alt="battle" />
          </router-link>
        </div>
        <div class="relative border-2 border-darkgreen rounded-xl overflow-hidden flex-1 max-w-20">
          <router-link key="Kobold" to="/kobold">
            <div
              class="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-2xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            >
              Kobold
            </div>
            <img src="@/assets/koboldspa.jpg" alt="kobold s.p.a." class="h-full w-full object-cover" />
          </router-link>
        </div>
      </div>
    </div>

    <div class="flex gap-3 mt-3 w-full h-16">
      <div class="border-2 border-darkgreen bg-lightgreen rounded-xl overflow-hidden flex-1 p-2">
        <router-link key="Items" to="/items" class="flex justify-between items-center h-full">
          <div class="text-white text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Items</div>
          <img src="@/assets/backpack.svg" alt="items" class="h-full" />
        </router-link>
      </div>
      <div class="border-2 border-darkgreen bg-lightgreen rounded-xl overflow-hidden flex-1 p-2">
        <router-link key="Items" to="/kingdom" class="flex justify-between items-center h-full">
          <img src="@/assets/castle.svg" alt="items" class="h-full" />
          <div class="text-white text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Kingdom</div>
        </router-link>
      </div>
    </div>

    <div class="flex gap-3 mt-3 w-full">
      <div class="flex flex-col gap-3 flex-1">
        <div class="border-2 border-darkgreen bg-lightgreen rounded-xl overflow-hidden flex-1">
          <router-link key="Cities" to="/skills" class="h-full flex justify-around items-center">
            <img src="@/assets/skills.svg" alt="skills" class="w-11" />
            <div class="text-white text-2xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Skills</div>
          </router-link>
        </div>
        <div class="border-2 border-darkgreen bg-lightgreen rounded-xl overflow-hidden flex-1">
          <router-link key="Cities" to="/feats" class="h-full flex justify-around items-center">
            <img src="@/assets/feats.svg" alt="skills" class="w-11" />
            <div class="text-white text-2xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Feats</div>
          </router-link>
        </div>
      </div>
      <div
        class="relative border-2 border-darkgreen rounded-xl overflow-hidden aspect-square max-w-48"
        style="width: inherit"
      >
        <router-link key="Cities" to="/cities">
          <img src="@/assets/menucities.png" alt="map" class="aspect-square" />
          <div
            class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-2xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          >
            Cities
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const links = [
  { name: "Map", path: "/map" }, // ✅
  { name: "Kingdom", path: "/kingdom" }, // ✅
  { name: "Skills", path: "/skills" },
  { name: "Feats", path: "/feats" },
  { name: "Items", path: "/items" }, // ✅
  { name: "Battle", path: "/battle" }, // ✅
  { name: "Kobold", path: "/kobold" }, // ✅
  { name: "Cities", path: "/cities" }, // ✅
];
</script>
