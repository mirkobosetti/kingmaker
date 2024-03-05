<template>
    <div class="uppercase text-xl text-darkgreen">{{ name }}</div>
    <div class="uppercase">{{ size }}</div>
</template>

<script setup>
defineProps({
    name: String,
    size: Number
})

// const emits = defineEmits(['back', 'next'])
</script>