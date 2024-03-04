<template>
    <div class="mx-auto my-0 flex flex-col overflow-scroll">

    <nav class="flex items-center justify-center gap-0 w-full flex-wrap py-5 fixed top-0 z-20 backdrop-blur-xl">
      <img src="@/assets/kingmaker.png" alt="kingmaker logo" class="w-48 fixed left-3" />
      <img src="@/assets/pathfinder.png" alt="kingmaker logo" class="w-48 fixed right-3" />
      <router-link class="py-2 px-5 bg-lightgreen border-2 border-l-4 border-darkgreen text-white rounded-l-md hover:bg-darkgreen" to="/map">Map</router-link>
      <router-link class="py-2 px-5 bg-lightgreen border-2 border-darkgreen text-white hover:bg-darkgreen" to="/kingdom">Kingdom</router-link>
      <router-link class="py-2 px-5 bg-lightgreen border-2 border-darkgreen text-white hover:bg-darkgreen" to="/skills">Skills</router-link>
      <router-link class="py-2 px-5 bg-lightgreen border-2 border-darkgreen text-white hover:bg-darkgreen" to="/feats">Feats</router-link>
      <router-link class="py-2 px-5 bg-lightgreen border-2 border-darkgreen text-white hover:bg-darkgreen" to="/abilities">Abilities</router-link>
      <router-link class="py-2 px-5 bg-lightgreen border-2 border-r-4 border-darkgreen text-white rounded-r-md hover:bg-darkgreen" to="/cities">Cities</router-link>
    </nav>

    <div class="pt-20">
      <router-view/>
    </div>
  </div>
</template>
