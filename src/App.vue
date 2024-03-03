<template>
    <div class="mx-auto my-0 flex flex-col overflow-scroll">

    <nav class="flex items-center justify-center gap-8 w-full flex-wrap mb-5 fixed top-2">
      <router-link class="py-2 px-5 bg-green-300 text-black rounded-md" to="/map">Map</router-link>
      <router-link class="py-2 px-5 bg-green-300 text-black rounded-md" to="/kingdom">Kingdom</router-link>
      <router-link class="py-2 px-5 bg-green-300 text-black rounded-md" to="/skills">Skills</router-link>
      <router-link class="py-2 px-5 bg-green-300 text-black rounded-md" to="/faa">Feats & Abilities</router-link>
      <router-link class="py-2 px-5 bg-green-300 text-black rounded-md" to="/city?name=city1">City 1</router-link>
      <router-link class="py-2 px-5 bg-green-300 text-black rounded-md" to="/city?name=city2">City 2</router-link>
    </nav>

    <div class="pt-16">
      <router-view/>
    </div>
  </div>
</template>
