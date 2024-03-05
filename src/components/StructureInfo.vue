<template>
    <div class="uppercase text-xl text-darkgreen">{{ name }}</div>
    <div class="flex gap-2 justify-center items-center">
        <div class="text-darkgreen text-3xl cursor-pointer" @click="emits('back')">◀</div>
        <img :src="img" alt="alchemy lab" class="w-20" />
        <div class="text-darkgreen text-3xl cursor-pointer"@click="emits('next')">▶</div>
    </div>
    <div class="p-10">
        <div class="text-lightgreen">{{ description }}</div>
        <div><span class="text-darkgreen">Lots:</span> <span class="text-lightgreen">{{ lots }}</span></div>
        <div><span class="text-darkgreen">Cost:</span> <span class="text-lightgreen">{{ cost }}</span></div>
        <div><span class="text-darkgreen">Construction:</span> <span class="text-lightgreen">{{ construction }}</span></div>
        <div><span class="text-darkgreen">Item Bonus:</span> <span class="text-lightgreen">{{ itemBonus }}</span></div>
        <div><span class="text-darkgreen">Effects:</span> <span class="text-lightgreen">{{ effects }}</span></div>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    img: String,
    description: String,
    lots: Number,
    cost: String,
    construction: String,
    itemBonus: String,
    effects: String
})

const emits = defineEmits(['back', 'next'])
</script>