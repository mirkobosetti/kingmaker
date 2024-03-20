<template>
    <div class="m-8 p-5 flex flex-col gap-3 items-center justify-between bg-white bg-opacity-50 rounded-xl -mt-7 border-2 border-lightgreen">
        <div class="flex flex-col gap-3 justify-center items-center w-full">
            <div class="flex gap-5 items-end">
                <span class="uppercase text-xl text-darkgreen ">{{ name }}</span>
                <div>
                    <span class="text-lightgreen mr-2">Lv.</span>
                    <input type="number" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center text-lightgreen text-xl w-8 h-5" :value="level">
                </div>
            </div>
            <div class="w-3/4 h-0.5 bg-darkgreen mb-4"></div>
        </div>
        

        <div class="flex gap-1">
            <span class="text-lightgreen">Settlement:</span>
            <span class="text-darkgreen rounded-lg px-3" :class="{ 'text-white bg-lightgreen': size == 1 }">Village</span>
            <span class="text-darkgreen rounded-lg px-3" :class="{ 'text-white bg-lightgreen': size == 2 }">Town</span>
            <span class="text-darkgreen rounded-lg px-3" :class="{ 'text-white bg-lightgreen': size == 3 }">City</span>
            <span class="text-darkgreen rounded-lg px-3" :class="{ 'text-white bg-lightgreen': size == 4 }">Metropolis</span>
        </div>

        <div class="flex gap-2">
            <span class="text-lightgreen">Consumption:</span>
            <span class="text-darkgreen">{{ consumption }}</span>
        </div>

        <div class="flex items-center cursor-pointer">
            <input type="checkbox" class="h-6 w-6 m-2 accent-lightgreen" :value=overcrowded>
            <span class="text-darkgreen rounded-lg px-3" :class="{ 'text-white bg-lightgreen': overcrowded }">Overcrowded</span>
        </div>

        <div class="flex gap-2">
            <span class="text-lightgreen">Max Item Bonus:</span>
            <span class="text-darkgreen">{{ maxItemBonus }}</span>
        </div>

        <div class="flex gap-2">
            <span class="text-lightgreen">Exes Influence:</span>
            <span class="text-darkgreen">{{ exesInfluence }}</span>
        </div>

        <div class="flex gap-2 items-center my-2">
            <span class="text-lightgreen">Infrastructure:</span>
            <div class="flex flex-col">
                <div class="flex items-center cursor-pointer">
                    <input type="checkbox" class="h-6 w-6 m-2 accent-lightgreen" :value=magicStreetlamps>
                    <span class="text-darkgreen rounded-lg px-3" :class="{ 'text-white bg-lightgreen': magicStreetlamps }">Magic Streetlamps</span>
                </div>
                <div class="flex items-center cursor-pointer">
                    <input type="checkbox" class="h-6 w-6 m-2 accent-lightgreen" :value=pawedStreets>
                    <span class="text-darkgreen rounded-lg px-3" :class="{ 'text-white bg-lightgreen': pawedStreets }">Pawed Streets</span>
                </div>
                <div class="flex items-center cursor-pointer">
                    <input type="checkbox" class="h-6 w-6 m-2 accent-lightgreen" :value=sewerSystem>
                    <span class="text-darkgreen rounded-lg px-3" :class="{ 'text-white bg-lightgreen': sewerSystem }">Sewer System</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
defineProps({
    name: String,
    size: Number,
    level: Number,
    consumption: Number,
    overcrowded: Boolean,
    maxItemBonus: Number,
    exesInfluence: Number,
    magicStreetlamps: Boolean,
    pawedStreets: Boolean,
    sewerSystem: Boolean,
})

// const emits = defineEmits(['back', 'next'])
</script>