<template>
  <div class="dirt-square">
    <div class="small-square" v-for="i in 9" :key="i">
      <div class="cell-block" v-for="j in 4" :key="j"></div>
    </div>
    <div class="side top">
      <label class="water"><Checkbox /></label>
      <label class="bridge"><Checkbox /></label>
      <label class="woodwall"><Checkbox /></label>
      <label class="stonewall"><Checkbox /></label>
    </div>
    <div class="side right"></div>
    <div class="side down">
      <label class="water"><Checkbox /></label>
      <label class="bridge"><Checkbox /></label>
      <label class="woodwall"><Checkbox /></label>
      <label class="stonewall"><Checkbox /></label>
    </div>
    <div class="side left"></div>
  </div>
</template>

<script setup>
import Checkbox from '@/components/Checkbox.vue';
</script>

<style scoped>
.dirt-square {
  position: relative;
  margin-top: 2em;
  width: 85%;
  aspect-ratio: 1 / 1;
  position: relative;
  background-color: #b49d6d;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1.2em;
  padding: 5%;
  border: 2px solid black;
}

@media (min-width: 768px) {
  .dirt-square {
    width: 60%;
    padding: 4em;
  }
}

.small-square {
  background-color: #a7a87a;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 4px 5px #95895c;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.cell-block {
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

.cell-block:first-child {
  border-right: 1px dashed white;
  border-bottom: 1px dashed white;
}

.cell-block:nth-child(2) {
  border-left: 1px dashed white;
  border-bottom: 1px dashed white;
}

.cell-block:nth-child(3) {
  border-right: 1px dashed white;
  border-top: 1px dashed white;
}

.cell-block:last-child {
  border-left: 1px dashed white;
  border-top: 1px dashed white;
}

.cell-block:hover {
  background-color: #c4c4c4;
  cursor: pointer;
}

.side {
  position: absolute;
  background-color: white;
  z-index: 1;
  border: 2px solid black;
  display: flex;
  align-items: center;
}

.top {
  top: -15px;
  left: 15%;
  right: 0;
  width: 70%;
}

.right {
  top: 15%;
  right: -15px;
  bottom: 0;
  height: 70%;
}

.down {
  bottom: -15px;
  left: 15%;
  right: 0;
  width: 70%;
}

.left {
  top: 15%;
  left: -15px;
  bottom: 0;
  height: 70%;
}

.water {
  background-color: #4d4dff;
  width: 25%;
  height: 100%;
}

.bridge {
  background-color: #a7a87a;
  width: 25%;
  height: 100%;
}

.woodwall {
  background-color: #8b4513;
  width: 25%;
  height: 100%;
}

.stonewall {
  background-color: #a9a9a9;
  width: 25%;
  height: 100%;
}
</style>
