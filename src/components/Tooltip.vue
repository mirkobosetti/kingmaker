<template>
    <div class="tooltip">
        <slot></slot>

        <span class="tooltiptext left-1/2 top-12 transform -translate-x-1/2 text-sm font-normal">{{ text }}</span>
    </div>
</template>

<script setup>
defineProps({
    text: String
})
</script>

<style scoped>
.tooltip {
    position: relative;
    /* display: inline-block; */
    text-transform: none;
    cursor: help;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 100%;
    min-width: 120px;
    background-color: #275025;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 1em;
    position: absolute;
    z-index: 1;
}

.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #275025 transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
}
</style>