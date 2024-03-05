<template>
  <div class="flex flex-col justify-center items-center mb-40 mt-6">

    <div class="relative bg-darkgreen border-2 border-lightgreen rounded-t-3xl text-white uppercase text-center text-lg p-1 font-extrabold w-80 mb-16">
      KINGDOM
      <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -left-20 scale-x-[-1] -z-20" />
      <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -right-20 -z-20" />
    </div>

    <div class="flex gap-3 items-end">
      <span class="text-3xl text-darkgreen uppercase font-extrabold">kingdom name</span>
      <input v-model="kingdom.name" type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center text-3xl uppercase text-lightgreen">

      <div class="border-2 border-darkgreen rounded-tl-3xl h-24 flex flex-col justify-between overflow-hidden bg-white items-center">
        <div class="px-3 pt-1">
          <span class="text-xs text-darkgreen uppercase font-extrabold">Max</span>
          <input v-model="kingdom.maxLevel" :class="{ 'text-red-500': (kingdom.maxLevel > 20 || kingdom.maxLevel < 1) }" type="number" min="1" max="20" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center w-12 text-lightgreen text-xl">
        </div>
        <input v-model="kingdom.currentLevel" :class="{ 'text-red-500': (kingdom.currentLevel > 20 || kingdom.currentLevel < 1 || kingdom.currentLevel > kingdom.maxLevel) }" type="number" min="1" max="20" class="outline-none border-none bg-transparent text-center w-12 text-lightgreen text-xl">
        <span class="text-white uppercase font-extrabold w-full bg-darkgreen text-center">level</span>
      </div>

      <div class="border-2 border-darkgreen rounded-tr-3xl h-24 flex flex-col justify-center overflow-hidden bg-white items-center">
        <div class="border-b-4 border-darkgreen flex flex-col items-center w-24">
          <input v-model="kingdom.fame" type="text" class="outline-none border-none bg-transparent text-center w-12 text-lightgreen text-xl">
          <span class="text-xs text-darkgreen uppercase font-extrabold">Fame</span>
        </div>
        <div class="border-t-4 border-darkgreen flex flex-col items-center w-24">
          <span class="text-xs text-darkgreen uppercase font-extrabold">Infamy</span>
          <input v-model="kingdom.infamy" type="text" class="outline-none border-none bg-transparent text-center w-12 text-lightgreen text-xl">
        </div>
      </div>
    </div>

    <!-- div with 2 columns using grid -->
    <div class="grid grid-cols-2 gap-20 mt-12">
      <div class="flex flex-col items-center gap-3">
        <Tooltip class="relative bg-darkgreen border-2 border-lightgreen rounded-t-3xl text-white uppercase text-center text-lg p-1 font-extrabold w-9/12 mb-3" text="A kingdom has four ability scores: Culture, Economy, Loyalty, and Stability. These function like the ability scores of a character, providing modifiers on die rolls and checks. As the kingdom prospers and grows, these scores can increase. And if the nation falls on hard times or goes through corruption, scandal, defeat, or disaster, Ruin will accrue that degrades these abilities">
          ABILITY SCORES
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -left-20 scale-x-[-1] -z-20" />
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -right-20 -z-20" />
        </Tooltip>

        <div class="flex justify-between text-xs w-full px-4">
          <span class="uppercase text-darkgreen font-extrabold">modifier</span>
          <span class="uppercase text-darkgreen font-extrabold">score</span>
        </div>

        <div class="flex w-full px-4">
          <input :value="kingdom.ablityScores.culture.modifier()" disabled type="text" class="bg-gray-200 outline-none border-2 border-green-800 text-center w-12 h-12 text-lightgreen text-xl">
          <Tooltip class="uppercase text-white font-extrabold text-lg bg-lightgreen flex h-full items-center px-8 flex-1 justify-center" text="Culture measures the interest and dedication of your nation and its people to the arts and sciences, to religion and reason, and to the subjects that your society chooses to learn about and to teach. Are your people well‐versed in rhetoric and philosophy? Do they value learning and research, music and dance? Do they embrace society in all its diverse splendor? If they do, your kingdom likely has a robust Culture score.">CULTURE</Tooltip>
          <input :value="kingdom.ablityScores.culture.total()" disabled type="text" class="bg-gray-200 outline-none border-2 border-green-800 text-center w-12 h-12 text-lightgreen text-xl">
        </div>
        <div class="flex w-full px-4">
          <input :value="kingdom.ablityScores.economy.modifier()" disabled type="text" class="bg-gray-200 outline-none border-2 border-green-800 text-center w-12 h-12 text-lightgreen text-xl">
          <div class="uppercase text-white font-extrabold text-lg bg-lightgreen flex h-full items-center px-8 flex-1 justify-center">economy</div>
          <input :value="kingdom.ablityScores.economy.total()" disabled type="text" class="bg-gray-200 outline-none border-2 border-green-800 text-center w-12 h-12 text-lightgreen text-xl">
        </div>
        <div class="flex w-full px-4">
          <input :value="kingdom.ablityScores.loyalty.modifier()" disabled type="text" class="bg-gray-200 outline-none border-2 border-green-800 text-center w-12 h-12 text-lightgreen text-xl">
          <div class="uppercase text-white font-extrabold text-lg bg-lightgreen flex h-full items-center px-8 flex-1 justify-center">loyalty</div>
          <input :value="kingdom.ablityScores.loyalty.total()" disabled type="text" class="bg-gray-200 outline-none border-2 border-green-800 text-center w-12 h-12 text-lightgreen text-xl">
        </div>
        <div class="flex w-full px-4">
          <input :value="kingdom.ablityScores.stability.modifier()" disabled type="text" class="bg-gray-200 outline-none border-2 border-green-800 text-center w-12 h-12 text-lightgreen text-xl">
          <div class="uppercase text-white font-extrabold text-lg bg-lightgreen flex h-full items-center px-8 flex-1 justify-center">stability</div>
          <input :value="kingdom.ablityScores.stability.total()" disabled type="text" class="bg-gray-200 outline-none border-2 border-green-800 text-center w-12 h-12 text-lightgreen text-xl">
        </div>

        <div class="flex flex-col gap-0.5 w-full mt-7">
          <div class="w-full h-1 bg-lightgreen"></div>
          <div class="w-full h-0.5 bg-lightgreen"></div>
        </div>

        <div class="flex flex-col w-full justify-center">
          <Tooltip class="uppercase text-darkgreen text-lg font-extrabold w-full text-center" text="The more powerful a kingdom grows, the more difficult it becomes to control it. The base Control DC for your kingdom is set by the kingdom’s level—fortunately, as you increase in level, your ability to successfully utilize your skills grows as well.">control dc</Tooltip>
          <div class="flex px-4 justify-evenly items-center">
            <input :value="kingdom.controlDC.base() + map.countByType(2) + map.countByType(3)" type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">

            <div>=</div>

            <div class="flex flex-col items-center">
              <input disabled :value="kingdom.controlDC.base()" type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center text-lightgreen text-xl w-24">
              <span class="text-xs text-darkgreen uppercase font-extrabold">base</span>
            </div>

            <div>+</div>

            <div class="flex flex-col items-center">
              <input :value="map.countByType(2) + map.countByType(3)" disabled type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center text-lightgreen text-xl w-24">
              <span class="text-xs text-darkgreen uppercase font-extrabold">size</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-0.5 w-full my-7">
          <div class="w-full h-1 bg-lightgreen"></div>
          <div class="w-full h-0.5 bg-lightgreen"></div>
        </div>

        <div class="relative bg-darkgreen border-2 border-lightgreen rounded-t-3xl text-white uppercase text-center text-lg p-1 font-extrabold w-9/12 mb-3">
          ruin
          <!-- 11 e 16 -->
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -left-20 scale-x-[-1] -z-20" />
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -right-20 -z-20" />
        </div>

        <div class="flex justify-between text-xs w-full px-4 gap-1">
          <span class="uppercase text-darkgreen font-extrabold flex-1">type</span>
          <span class="uppercase text-darkgreen font-extrabold">score</span>
          <span class="uppercase text-darkgreen font-extrabold">penality</span>
          <span class="uppercase text-darkgreen font-extrabold">threshold</span>
        </div>

        <div class="flex w-full px-4 gap-1">
          <div class="uppercase text-white font-extrabold text-lg bg-lightgreen flex h-full items-center px-8 flex-1 justify-center">corruption</div>
          <input v-model="kingdom.ruins.corruption.score" type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <input v-model="kingdom.ruins.corruption.penality" type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <input v-model="kingdom.ruins.corruption.threshold" type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
        </div>
        <div class="flex w-full px-4 gap-1">
          <div class="uppercase text-white font-extrabold text-lg bg-lightgreen flex h-full items-center px-8 flex-1 justify-center">crime</div>
          <input v-model="kingdom.ruins.crime.score" type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <input v-model="kingdom.ruins.crime.penality" type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <input v-model="kingdom.ruins.crime.threshold" type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
        </div>
        <div class="flex w-full px-4 gap-1">
          <div class="uppercase text-white font-extrabold text-lg bg-lightgreen flex h-full items-center px-8 flex-1 justify-center">decay</div>
          <input v-model="kingdom.ruins.decay.score" type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <input v-model="kingdom.ruins.decay.penality" type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <input v-model="kingdom.ruins.decay.threshold" type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
        </div>
        <div class="flex w-full px-4 gap-1">
          <div class="uppercase text-white font-extrabold text-lg bg-lightgreen flex h-full items-center px-8 flex-1 justify-center">strife</div>
          <input v-model="kingdom.ruins.strife.score" type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <input v-model="kingdom.ruins.strife.penality" type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <input v-model="kingdom.ruins.strife.threshold" type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
        </div>
      </div>

      <div class="flex flex-col items-center">
        <div class="flex gap-2 w-full items-end">
          <span class="text-xl text-darkgreen uppercase font-extrabold text-nowrap">charter</span>
          <select v-model="kingdom.charter" @change="kingdom.charterFreeAbilityBoost = ''" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen text-xl flex-1 uppercase">
            <option></option>
            <option v-for="charter in kingdom.charters" :value="charter">{{ charter }}</option>
          </select>
          <div v-if="kingdom.charter == 'exploration' || kingdom.charter == 'grant' || kingdom.charter == 'open'" @click="kingdom.charterFreeAbilityBoost = 'culture'" class="outline-none border-2 border-green-800 flex items-center justify-center w-6 h-6 text-white hover:bg-darkgreen cursor-pointer text-xl" :class="{ 'bg-darkgreen': kingdom.charterFreeAbilityBoost == 'culture', 'bg-lightgreen': kingdom.charterFreeAbilityBoost != 'culture' }">C</div>
          <div v-if="kingdom.charter == 'conquest' || kingdom.charter == 'expansion' || kingdom.charter == 'open'" @click="kingdom.charterFreeAbilityBoost = 'economy'" class="outline-none border-2 border-green-800 flex items-center justify-center w-6 h-6 text-white hover:bg-darkgreen cursor-pointer text-xl" :class="{ 'bg-darkgreen': kingdom.charterFreeAbilityBoost == 'economy', 'bg-lightgreen': kingdom.charterFreeAbilityBoost != 'economy' }">E</div>
          <div v-if="kingdom.charter == 'expansion' || kingdom.charter == 'exploration' || kingdom.charter == 'open'" @click="kingdom.charterFreeAbilityBoost = 'loyalty'" class="outline-none border-2 border-green-800 flex items-center justify-center w-6 h-6 text-white hover:bg-darkgreen cursor-pointer text-xl" :class="{ 'bg-darkgreen': kingdom.charterFreeAbilityBoost == 'loyalty', 'bg-lightgreen': kingdom.charterFreeAbilityBoost != 'loyalty' }">L</div>
          <div v-if="kingdom.charter == 'conquest' || kingdom.charter == 'grant' || kingdom.charter == 'open'" @click="kingdom.charterFreeAbilityBoost = 'stability'" class="outline-none border-2 border-green-800 flex items-center justify-center w-6 h-6 text-white hover:bg-darkgreen cursor-pointer text-xl" :class="{ 'bg-darkgreen': kingdom.charterFreeAbilityBoost == 'stability', 'bg-lightgreen': kingdom.charterFreeAbilityBoost != 'stability' }">S</div>
        </div>
        <div class="flex gap-2 w-full">
          <span class="text-xl text-darkgreen uppercase font-extrabold text-nowrap">heartland</span>
          <select v-model="kingdom.heartland" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen text-xl w-full uppercase">
            <option></option>
            <option v-for="heartland in kingdom.heartlands" :value="heartland">{{ heartland }}</option>
          </select>
        </div>
        <div class="flex gap-2 w-full items-end">
          <span class="text-xl text-darkgreen uppercase font-extrabold text-nowrap">government</span>
          <select v-model="kingdom.government" @change="kingdom.governmentFreeAbilityBoost = ''" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen text-xl flex-1 uppercase">
            <option></option>
            <option v-for="government in kingdom.governments" :value="government">{{ government }}</option>
          </select>
          <div v-if="kingdom.government == 'despotism' || kingdom.government == 'oligarchy' || kingdom.government == 'republic'" @click="kingdom.governmentFreeAbilityBoost = 'culture'" class="outline-none border-2 border-green-800 flex items-center justify-center w-6 h-6 text-white hover:bg-darkgreen cursor-pointer text-xl" :class="{ 'bg-darkgreen': kingdom.governmentFreeAbilityBoost == 'culture', 'bg-lightgreen': kingdom.governmentFreeAbilityBoost != 'culture' }">C</div>
          <div v-if="kingdom.government == 'feudalism' || kingdom.government == 'republic' || kingdom.government == 'yeomanry'" @click="kingdom.governmentFreeAbilityBoost = 'economy'" class="outline-none border-2 border-green-800 flex items-center justify-center w-6 h-6 text-white hover:bg-darkgreen cursor-pointer text-xl" :class="{ 'bg-darkgreen': kingdom.governmentFreeAbilityBoost == 'economy', 'bg-lightgreen': kingdom.governmentFreeAbilityBoost != 'economy' }">E</div>
          <div v-if="kingdom.government == 'despotism' || kingdom.government == 'feudalism' || kingdom.government == 'thaumocracy'" @click="kingdom.governmentFreeAbilityBoost = 'loyalty'" class="outline-none border-2 border-green-800 flex items-center justify-center w-6 h-6 text-white hover:bg-darkgreen cursor-pointer text-xl" :class="{ 'bg-darkgreen': kingdom.governmentFreeAbilityBoost == 'loyalty', 'bg-lightgreen': kingdom.governmentFreeAbilityBoost != 'loyalty' }">L</div>
          <div v-if="kingdom.government == 'oligarchy' || kingdom.government == 'thaumocracy' || kingdom.government == 'yeomanry'" @click="kingdom.governmentFreeAbilityBoost = 'stability'" class="outline-none border-2 border-green-800 flex items-center justify-center w-6 h-6 text-white hover:bg-darkgreen cursor-pointer text-xl" :class="{ 'bg-darkgreen': kingdom.governmentFreeAbilityBoost == 'stability', 'bg-lightgreen': kingdom.governmentFreeAbilityBoost != 'stability' }">S</div>
        </div>
        <div class="flex gap-2 w-full">
          <span class="text-xl text-darkgreen uppercase font-extrabold text-nowrap">capital city</span>
          <select v-model="kingdom.capital" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen text-xl flex-1 uppercase">
            <option></option>
            <option v-for="city in cities.cities" :value="city.name">{{ city.name }}</option>
          </select>
          <!-- <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen text-xl w-full uppercase"> -->
        </div>
        <div class="flex gap-2 w-full mt-4">
          <span class="text-lg text-darkgreen uppercase font-extrabold text-nowrap -mb-1 flex items-end">experience points</span>
          <input v-model="kingdom.experiencePoints" type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen text-xl w-full uppercase">
        </div>
        <div class="flex gap-2 w-full">
          <span class="text-lg text-darkgreen uppercase font-extrabold text-nowrap -mb-1 flex items-end">resource dice</span>
          <input v-model="kingdom.resourceDice" type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen text-xl w-full uppercase">
        </div>

        <div class="flex gap-2 w-full justify-center mt-5 items-end">
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <Tooltip class="text-xs text-darkgreen font-extrabold text-wrap text-center" text="Size is the sum of map cities and explorated cells">SIZE</Tooltip>
            <input disabled :value="map.countByType(2) + map.countByType(3)" type="text" class="bg-gray-200 outline-none border-2 border-green-800 text-center w-12 h-12 text-lightgreen text-xl">
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">rp</span>
            <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">unrest</span>
            <input v-model="kingdom.unrest" type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">unrest penality</span>
            <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">consumption</span>
            <input v-model="kingdom.consumption" type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          </div>
        </div>

        <div class="relative bg-darkgreen border-2 border-lightgreen rounded-t-3xl text-white uppercase text-center text-lg p-1 font-extrabold w-9/12 mb-5 mt-5">
          leaders
          <!-- 11 e 16 -->
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -left-20 scale-x-[-1] -z-20" />
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -right-20 -z-20" />
        </div>

        <div class="flex gap-3 px-4 mt-1" v-for="leader in Object.values(kingdom.leaders)">
          <div class="flex flex-col gap-0.5">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">inv</span>
            <input :value="kingdom.ablityScores[leader.scaling].modifier()" type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-10 h-10 bg-white text-lightgreen text-xl">
          </div>
          <div>
            <span class="text-2xl text-darkgreen uppercase font-extrabold text-wrap text-center">{{ leader.title }}</span>
            <div class="flex gap-1 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-nowrap">character name</span>
              <input v-model="leader.name" type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen text-xl w-full h-6">
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="w-full flex gap-24 justify-center mt-12 items-start">
      <div class="flex flex-col justify-center items-center">
        <!-- commodities -->
        <div class="relative bg-darkgreen border-2 border-lightgreen rounded-t-3xl text-white uppercase text-center text-lg p-1 font-extrabold w-9/12 mb-3">
          commodities
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -left-20 scale-x-[-1] -z-20" />
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -right-20 -z-20" />
        </div>

        <div class="flex gap-2 w-full justify-center mt-4 items-end">
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">food</span>
            <input v-model="kingdom.commodities.food.current" type="number" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
            <div class="flex gap-0.5 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">max</span>
              <input v-model="kingdom.commodities.food.max" type="number" class="text-center outline-none border-b-2 border-green-800 bg-transparent text-lightgreen text-xs mt-1 w-5">
            </div>
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">lumber</span>
            <input v-model="kingdom.commodities.lumber.current" type="number" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
            <div class="flex gap-0.5 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">max</span>
              <input v-model="kingdom.commodities.lumber.max" type="number" class="text-center outline-none border-b-2 border-green-800 bg-transparent text-lightgreen text-xs mt-1 w-5">
            </div>
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">luxuries</span>
            <input v-model="kingdom.commodities.luxuries.current" type="number" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
            <div class="flex gap-0.5 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">max</span>
              <input v-model="kingdom.commodities.luxuries.max" type="number" class="text-center outline-none border-b-2 border-green-800 bg-transparent text-lightgreen text-xs mt-1 w-5">
            </div>
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">ore</span>
            <input v-model="kingdom.commodities.ore.current" type="number" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
            <div class="flex gap-0.5 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">max</span>
              <input v-model="kingdom.commodities.ore.max" type="number" class="text-center outline-none border-b-2 border-green-800 bg-transparent text-lightgreen text-xs mt-1 w-5">
            </div>
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">stone</span>
            <input v-model="kingdom.commodities.stone.current" type="number" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
            <div class="flex gap-0.5 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">max</span>
              <input v-model="kingdom.commodities.stone.max" type="number" class="text-center outline-none border-b-2 border-green-800 bg-transparent text-lightgreen text-xs mt-1 w-5">
            </div>
          </div>
        </div>

      </div>
      <div class="flex flex-col justify-center items-center">
        <!-- work sites -->
        <Tooltip class="relative bg-darkgreen border-2 border-lightgreen rounded-t-3xl text-white uppercase text-center text-lg p-1 font-extrabold w-9/12 mb-3">
          WORK SITES
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -left-20 scale-x-[-1] -z-20" />
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -right-20 -z-20" />
        </Tooltip>

        <div class="flex gap-2 w-full justify-center items-end">
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">farmlands</span>
            <input disabled :value="map.countByWorkSite(1)" type="number" class="outline-none border-2 border-green-800 bg-gray-200 text-center w-12 h-12 text-lightgreen text-xl">
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">lumber camps</span>
            <input disabled :value="map.countByWorkSite(2)" type="number" class="outline-none border-2 border-green-800 bg-gray-200 text-center w-12 h-12 text-lightgreen text-xl">
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">mines</span>
            <input disabled :value="map.countByWorkSite(3)" type="number" class="outline-none border-2 border-green-800 bg-gray-200 text-center w-12 h-12 text-lightgreen text-xl">
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">quarries</span>
            <input disabled :value="map.countByWorkSite(4)" type="number" class="outline-none border-2 border-green-800 bg-gray-200 text-center w-12 h-12 text-lightgreen text-xl">
          </div>
        </div>

      </div>
      <div class="flex gap-2 pt-1">
        <!-- trade agreement -->
        <div class="flex gap-0.5 flex-col items-center flex-1">
          <span class="text-md text-darkgreen uppercase font-extrabold text-wrap text-center h-18 w-20">trade agreement</span>
          <input type="number" class="outline-none border-2 border-green-800 bg-transparent text-center w-20 h-20 bg-white text-lightgreen text-xl">
        </div>

        <!-- event check dc -->
        <div class="flex gap-0.5 flex-col items-center flex-1">
          <span class="text-md text-darkgreen uppercase font-extrabold text-wrap text-center h-18 w-20">event check dc</span>
          <input type="number" class="outline-none border-2 border-green-800 bg-transparent text-center w-20 h-20 bg-white text-lightgreen text-xl">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tooltip from '@/components/Tooltip.vue';
import { useKingdomStore } from '@/stores/kingdom'
import { useCitiesStore } from '@/stores/cities';
import { useMapStore } from '@/stores/map'

const kingdom = useKingdomStore()
const cities = useCitiesStore();
const map = useMapStore()
</script>