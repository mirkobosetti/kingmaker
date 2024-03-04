<template>
    <div class="mx-auto my-0 flex flex-col overflow-scroll">

    <nav class="flex items-center justify-center gap-8 w-full flex-wrap py-5 fixed top-0 z-20 backdrop-blur-xl">
      <router-link class="py-2 px-5 bg-lightgreen border-2 border-darkgreen text-white rounded-md hover:bg-darkgreen" to="/map">Map</router-link>
      <router-link class="py-2 px-5 bg-lightgreen border-2 border-darkgreen text-white rounded-md hover:bg-darkgreen" to="/kingdom">Kingdom</router-link>
      <router-link class="py-2 px-5 bg-lightgreen border-2 border-darkgreen text-white rounded-md hover:bg-darkgreen" to="/skills">Skills</router-link>
      <router-link class="py-2 px-5 bg-lightgreen border-2 border-darkgreen text-white rounded-md hover:bg-darkgreen" to="/feats">Feats</router-link>
      <router-link class="py-2 px-5 bg-lightgreen border-2 border-darkgreen text-white rounded-md hover:bg-darkgreen" to="/abilities">Abilities</router-link>
      <router-link class="py-2 px-5 bg-lightgreen border-2 border-darkgreen text-white rounded-md hover:bg-darkgreen" to="/city?name=city1">City 1</router-link>
      <router-link class="py-2 px-5 bg-lightgreen border-2 border-darkgreen text-white rounded-md hover:bg-darkgreen" to="/city?name=city2">City 2</router-link>
    </nav>

    <div class="pt-20">
      <router-view/>
    </div>
  </div>
</template>
