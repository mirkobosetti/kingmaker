<template>
    <div class="m-8 p-5 flex flex-col gap-3 items-center justify-center bg-white bg-opacity-50 rounded-xl -mt-7 border-2 border-lightgreen">

        <div class="uppercase text-xl text-darkgreen">{{ name }}</div>

        <div class="w-3/4 h-0.5 bg-darkgreen mb-4"></div>

        <div class="flex gap-10 justify-center items-center min-h-20">
            <div class="text-darkgreen text-3xl cursor-pointer hover:text-lightgreen" @click="emits('back')">◀</div>
            <img :src="img" alt="alchemy lab" class="cursor-grab rounded-xl" :class="{ 'w-20': lots == 1, 'w-36': lots == 2 }" draggable />
            <div class="text-darkgreen text-3xl cursor-pointer hover:text-lightgreen" @click="emits('next')">▶</div>
        </div>

        <div class="flex gap-4 justify-between items-center">
            <div v-if="cost.rp">
                <span class="text-darkgreen text-xl">{{ cost.rp }}</span>
                <span class="text-lightgreen text-sm">RP</span>
            </div>
            <div v-if="cost.food">
                <span class="text-darkgreen text-xl">{{ cost.food }}</span>
                <span class="text-lightgreen text-sm">Food</span>
            </div>
            <div v-if="cost.lumber">
                <span class="text-darkgreen text-xl">{{ cost.lumber }}</span>
                <span class="text-lightgreen text-sm">Lumber</span>
            </div>
            <div v-if="cost.luxuries">
                <span class="text-darkgreen text-xl">{{ cost.luxuries }}</span>
                <span class="text-lightgreen text-sm">Luxuries</span>
            </div>
            <div v-if="cost.ore">
                <span class="text-darkgreen text-xl">{{ cost.ore }}</span>
                <span class="text-lightgreen text-sm">Ore</span>
            </div>
            <div v-if="cost.stone">
                <span class="text-darkgreen text-xl">{{ cost.stone }}</span>
                <span class="text-lightgreen text-sm">Stone</span>
            </div>
        </div>

        <div>
            <div class="text-darkgreen">Description:</div>
            <div class="text-lightgreen text-justify">{{ description }}</div>
        </div>

        <!-- <div><span class="text-darkgreen">Lots:</span> <span class="text-lightgreen">{{ lots }}</span></div> -->
        <div class="flex justify-between w-full">
            <div class="text-darkgreen">Construction:</div>
            <div class="text-lightgreen">{{ construction }}</div>
        </div>
        <div class="flex justify-between w-full">
            <div class="text-darkgreen">Item Bonus:</div>
            <div class="text-lightgreen">{{ itemBonus }}</div>
        </div>
        <div class="flex justify-between w-full" v-if="upgradeFrom">
            <div class="text-darkgreen">Upgrade From:</div>
            <div class="text-lightgreen underline cursor-pointer">{{ upgradeFrom }}</div>
        </div>
        <div class="flex justify-between w-full" v-if="upgradeTo">
            <div class="text-darkgreen">Upgrade To:</div>
            <div class="text-lightgreen underline cursor-pointer">{{ upgradeTo }}</div>
        </div>
        <div>
            <div class="text-darkgreen">Effects:</div>
            <div class="text-lightgreen text-justify">{{ effects }}</div>
        </div>

    </div>
</template>

<script setup>
defineProps({
    name: String,
    img: String,
    description: String,
    lots: Number,
    cost: Object,
    construction: String,
    itemBonus: String,
    effects: String,
    upgradeFrom: String,
    upgradeTo: String
})

const emits = defineEmits(['back', 'next'])
</script>