<template>
  <div class="flex flex-col w-full overflow-hidden">

    <nav class="z-20 backdrop-blur-xl h-16 flex justify-center items-center">
      <img src="@/assets/kingmaker.png" alt="kingmaker logo" class="sm:w-48 hidden sm:block fixed left-3" />
      <img src="@/assets/pathfinder.png" alt="kingmaker logo" class="sm:w-48 hidden sm:block fixed right-3" />
      <!-- tailwind hide in mobile -->
      <router-link class="py-2 px-2 sm:px-3 md:px-5 bg-lightgreen border-2 border-l-4 border-darkgreen text-white rounded-l-md hover:bg-darkgreen" to="/map">Map</router-link>
      <router-link class="py-2 px-2 sm:px-3 md:px-5 bg-lightgreen border-2 border-darkgreen text-white hover:bg-darkgreen" to="/kingdom">Kingdom</router-link>
      <router-link class="py-2 px-2 sm:px-3 md:px-5 bg-lightgreen border-2 border-darkgreen text-white hover:bg-darkgreen" to="/skills">Skills</router-link>
      <router-link class="py-2 px-2 sm:px-3 md:px-5 bg-lightgreen border-2 border-darkgreen text-white hover:bg-darkgreen" to="/feats">Feats</router-link>
      <router-link class="py-2 px-2 sm:px-3 md:px-5 bg-lightgreen border-2 border-darkgreen text-white hover:bg-darkgreen" to="/abilities">Abilities</router-link>
      <router-link class="py-2 px-2 sm:px-3 md:px-5 bg-lightgreen border-2 border-r-4 border-darkgreen text-white rounded-r-md hover:bg-darkgreen" to="/cities">Cities</router-link>
    </nav>

    <div class="overflow-y-auto -mt-16 pt-16 h-screen">
       <!-- style="height: calc(100vh - 4rem);"> -->
      <router-view />
    </div>
  </div>
</template>
