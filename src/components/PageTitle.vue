<template>
    <div class="w-full flex justify-center items-center mt-6 mb-10">
        <Tooltip class="relative bg-darkgreen border-2 border-lightgreen rounded-t-3xl text-white uppercase text-center text-lg p-1 font-extrabold w-48 sm:w-80 mb-8" :text>
            {{ title }}
            <img src="../assets/erb.png" alt="ability scores" class="absolute w-48 sm:w-60 -left-6 sm:-left-20 scale-x-[-1] -z-20" />
            <img src="../assets/erb.png" alt="ability scores" class="absolute w-48 sm:w-60 -right-6 sm:-right-20 -z-20" />
        </Tooltip>
    </div>
</template>

<script setup>
import Tooltip from './Tooltip.vue';

defineProps({
    title: String,
    text: String
})
</script>