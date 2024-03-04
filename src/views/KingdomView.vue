<template>
  <div class="flex flex-col justify-center items-center mb-40">
    <img src="../assets/kingmaker.png" alt="kingmaker logo" class="w-64" />

    <div class="flex gap-3 items-end">
      <span class="text-3xl text-darkgreen uppercase font-extrabold">kingdom name</span>
      <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center text-3xl uppercase text-lightgreen">

      <div class="border-2 border-darkgreen rounded-tl-3xl h-24 flex flex-col justify-between overflow-hidden bg-white items-center">
        <div class="px-3 pt-1">
          <span class="text-xs text-darkgreen uppercase font-extrabold">Max</span>
          <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center w-12 text-lightgreen text-xl">
        </div>
        <input type="text" class="outline-none border-none bg-transparent text-center w-12 text-lightgreen text-xl">
        <span class="text-white uppercase font-extrabold w-full bg-darkgreen text-center">level</span>
      </div>
      <div class="border-2 border-darkgreen rounded-tr-3xl h-24 flex flex-col justify-center overflow-hidden bg-white items-center">
        <div class="border-b-4 border-darkgreen flex flex-col items-center w-24">
          <input type="text" class="outline-none border-none bg-transparent text-center w-12 text-lightgreen text-xl">
          <span class="text-xs text-darkgreen uppercase font-extrabold">Fame</span>
        </div>
        <div class="border-t-4 border-darkgreen flex flex-col items-center w-24">
          <span class="text-xs text-darkgreen uppercase font-extrabold">Infamy</span>
          <input type="text" class="outline-none border-none bg-transparent text-center w-12 text-lightgreen text-xl">
        </div>
      </div>
    </div>

    <!-- div with 2 columns using grid -->
    <div class="grid grid-cols-2 gap-20 mt-12">
      <div class="flex flex-col items-center gap-3">
        <div class="relative bg-darkgreen border-2 border-lightgreen rounded-t-3xl text-white uppercase text-center text-lg p-1 font-extrabold w-9/12 mb-3">
          ability scores
          <!-- 11 e 16 -->
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -left-20 scale-x-[-1] -z-20" />
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -right-20 -z-20" />
        </div>

        <div class="flex justify-between text-xs w-full px-4">
          <span class="uppercase text-darkgreen font-extrabold">modifier</span>
          <span class="uppercase text-darkgreen font-extrabold">score</span>
        </div>

        <div class="flex w-full px-4">
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <div class="uppercase text-white font-extrabold text-lg bg-lightgreen flex h-full items-center px-8 flex-1 justify-center">culture</div>
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
        </div>
        <div class="flex w-full px-4">
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <div class="uppercase text-white font-extrabold text-lg bg-lightgreen flex h-full items-center px-8 flex-1 justify-center">economy</div>
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
        </div>
        <div class="flex w-full px-4">
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <div class="uppercase text-white font-extrabold text-lg bg-lightgreen flex h-full items-center px-8 flex-1 justify-center">loyality</div>
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
        </div>
        <div class="flex w-full px-4">
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <div class="uppercase text-white font-extrabold text-lg bg-lightgreen flex h-full items-center px-8 flex-1 justify-center">stability</div>
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
        </div>

        <div class="flex flex-col gap-0.5 w-full mt-7">
          <div class="w-full h-1 bg-lightgreen"></div>
          <div class="w-full h-0.5 bg-lightgreen"></div>
        </div>

        <div class="flex flex-col w-full justify-center">
          <div class="uppercase text-darkgreen text-lg font-extrabold w-full text-center">control dc</div>
          <div class="flex px-4 justify-evenly items-center">
            <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">

            <div>=</div>

            <div class="flex flex-col items-center">
              <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center text-lightgreen text-xl w-24">
              <span class="text-xs text-darkgreen uppercase font-extrabold">base</span>
            </div>

            <div>+</div>

            <div class="flex flex-col items-center">
              <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center text-lightgreen text-xl w-24">
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
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
        </div>
        <div class="flex w-full px-4 gap-1">
          <div class="uppercase text-white font-extrabold text-lg bg-lightgreen flex h-full items-center px-8 flex-1 justify-center">crime</div>
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
        </div>
        <div class="flex w-full px-4 gap-1">
          <div class="uppercase text-white font-extrabold text-lg bg-lightgreen flex h-full items-center px-8 flex-1 justify-center">decay</div>
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
        </div>
        <div class="flex w-full px-4 gap-1">
          <div class="uppercase text-white font-extrabold text-lg bg-lightgreen flex h-full items-center px-8 flex-1 justify-center">stife</div>
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
        </div>
      </div>

      <div class="flex flex-col items-center">
        <div class="flex gap-2 w-full">
          <span class="text-xl text-darkgreen uppercase font-extrabold text-nowrap">charter</span>
          <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-right pr-3 text-lightgreen text-xl w-full">
        </div>
        <div class="flex gap-2 w-full">
          <span class="text-xl text-darkgreen uppercase font-extrabold text-nowrap">heartland</span>
          <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-right pr-3 text-lightgreen text-xl w-full">
        </div>
        <div class="flex gap-2 w-full">
          <span class="text-xl text-darkgreen uppercase font-extrabold text-nowrap">government</span>
          <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-right pr-3 text-lightgreen text-xl w-full">
        </div>
        <div class="flex gap-2 w-full">
          <span class="text-xl text-darkgreen uppercase font-extrabold text-nowrap">capital city</span>
          <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-right pr-3 text-lightgreen text-xl w-full">
        </div>
        <div class="flex gap-2 w-full mt-2">
          <span class="text-lg text-darkgreen uppercase font-extrabold text-nowrap">experience points</span>
          <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-right pr-3 text-lightgreen text-xl w-full">
        </div>
        <div class="flex gap-2 w-full">
          <span class="text-lg text-darkgreen uppercase font-extrabold text-nowrap">resource dice</span>
          <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-right pr-3 text-lightgreen text-xl w-full">
        </div>

        <div class="flex gap-2 w-full justify-center mt-5 items-end">
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">size</span>
            <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">rp</span>
            <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">unrest</span>
            <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">unrest penality</span>
            <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">consumption</span>
            <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          </div>
        </div>

        <div class="relative bg-darkgreen border-2 border-lightgreen rounded-t-3xl text-white uppercase text-center text-lg p-1 font-extrabold w-9/12 mb-5 mt-5">
          leaders
          <!-- 11 e 16 -->
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -left-20 scale-x-[-1] -z-20" />
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -right-20 -z-20" />
        </div>

        <div class="flex gap-3 px-4 mt-1">
          <div class="flex flex-col gap-0.5">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">inv</span>
            <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-10 h-10 bg-white text-lightgreen text-xl">
          </div>
          <div>
            <span class="text-2xl text-darkgreen uppercase font-extrabold text-wrap text-center">ruler</span>
            <div class="flex gap-1 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-nowrap">character name</span>
              <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen text-xl w-full h-6">
            </div>
          </div>
        </div>

        <div class="flex gap-3 px-4 mt-1">
          <div class="flex flex-col gap-0.5">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">inv</span>
            <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-10 h-10 bg-white text-lightgreen text-xl">
          </div>
          <div>
            <span class="text-2xl text-darkgreen uppercase font-extrabold text-wrap text-center">counselor</span>
            <div class="flex gap-1 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-nowrap">character name</span>
              <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen text-xl w-full h-6">
            </div>
          </div>
        </div>

        <div class="flex gap-3 px-4 mt-1">
          <div class="flex flex-col gap-0.5">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">inv</span>
            <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-10 h-10 bg-white text-lightgreen text-xl">
          </div>
          <div>
            <span class="text-2xl text-darkgreen uppercase font-extrabold text-wrap text-center">general</span>
            <div class="flex gap-1 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-nowrap">character name</span>
              <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen text-xl w-full h-6">
            </div>
          </div>
        </div>

        <div class="flex gap-3 px-4 mt-1">
          <div class="flex flex-col gap-0.5">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">inv</span>
            <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-10 h-10 bg-white text-lightgreen text-xl">
          </div>
          <div>
            <span class="text-2xl text-darkgreen uppercase font-extrabold text-wrap text-center">emissary</span>
            <div class="flex gap-1 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-nowrap">character name</span>
              <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen text-xl w-full h-6">
            </div>
          </div>
        </div>

        <div class="flex gap-3 px-4 mt-1">
          <div class="flex flex-col gap-0.5">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">inv</span>
            <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-10 h-10 bg-white text-lightgreen text-xl">
          </div>
          <div>
            <span class="text-2xl text-darkgreen uppercase font-extrabold text-wrap text-center">magister</span>
            <div class="flex gap-1 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-nowrap">character name</span>
              <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen text-xl w-full h-6">
            </div>
          </div>
        </div>

        <div class="flex gap-3 px-4 mt-1">
          <div class="flex flex-col gap-0.5">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">inv</span>
            <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-10 h-10 bg-white text-lightgreen text-xl">
          </div>
          <div>
            <span class="text-2xl text-darkgreen uppercase font-extrabold text-wrap text-center">treasurer</span>
            <div class="flex gap-1 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-nowrap">character name</span>
              <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen text-xl w-full h-6">
            </div>
          </div>
        </div>

        <div class="flex gap-3 px-4 mt-1">
          <div class="flex flex-col gap-0.5">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">inv</span>
            <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-10 h-10 bg-white text-lightgreen text-xl">
          </div>
          <div>
            <span class="text-2xl text-darkgreen uppercase font-extrabold text-wrap text-center">viceroy</span>
            <div class="flex gap-1 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-nowrap">character name</span>
              <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen text-xl w-full h-6">
            </div>
          </div>
        </div>

        <div class="flex gap-3 px-4 mt-1">
          <div class="flex flex-col gap-0.5">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">inv</span>
            <input type="text" class="outline-none border-2 border-green-800 bg-transparent text-center w-10 h-10 bg-white text-lightgreen text-xl">
          </div>
          <div>
            <span class="text-2xl text-darkgreen uppercase font-extrabold text-wrap text-center">warden</span>
            <div class="flex gap-1 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-nowrap">character name</span>
              <input type="text" class="outline-none border-b-2 border-b-green-800 bg-transparent text-center pr-3 text-lightgreen text-xl w-full h-6">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex gap-24 justify-center mt-12">
      <div class="flex flex-col justify-center items-center">
        <!-- commodities -->
        <div class="relative bg-darkgreen border-2 border-lightgreen rounded-t-3xl text-white uppercase text-center text-lg p-1 font-extrabold w-9/12 mb-3">
          commodities
          <!-- 11 e 16 -->
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -left-20 scale-x-[-1] -z-20" />
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -right-20 -z-20" />
        </div>

        <div class="flex gap-2 w-full justify-center mt-4 items-end">
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">food</span>
            <input type="number" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
            <div class="flex gap-0.5 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">max</span>
              <input type="number" class="text-center outline-none border-b-2 border-green-800 bg-transparent text-lightgreen text-xs mt-1 w-5">
            </div>
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">lumber</span>
            <input type="number" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
            <div class="flex gap-0.5 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">max</span>
              <input type="number" class="text-center outline-none border-b-2 border-green-800 bg-transparent text-lightgreen text-xs mt-1 w-5">
            </div>
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">luxuries</span>
            <input type="number" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
            <div class="flex gap-0.5 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">max</span>
              <input type="number" class="text-center outline-none border-b-2 border-green-800 bg-transparent text-lightgreen text-xs mt-1 w-5">
            </div>
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">ore</span>
            <input type="number" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
            <div class="flex gap-0.5 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">max</span>
              <input type="number" class="text-center outline-none border-b-2 border-green-800 bg-transparent text-lightgreen text-xs mt-1 w-5">
            </div>
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">stone</span>
            <input type="number" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
            <div class="flex gap-0.5 items-end">
              <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">max</span>
              <input type="number" class="text-center outline-none border-b-2 border-green-800 bg-transparent text-lightgreen text-xs mt-1 w-5">
            </div>
          </div>
        </div>

      </div>
      <div class="flex flex-col justify-center items-center">
        <!-- work sites -->
        <div class="relative bg-darkgreen border-2 border-lightgreen rounded-t-3xl text-white uppercase text-center text-lg p-1 font-extrabold w-9/12 mb-3">
          work sites
          <!-- 11 e 16 -->
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -left-20 scale-x-[-1] -z-20" />
          <img src="../assets/frompdf/16.png" alt="ability scores" class="absolute w-60 -right-20 -z-20" />
        </div>

        <div class="flex gap-2 w-full justify-center items-end">
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">farmlands</span>
            <input type="number" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">lumber camps</span>
            <input type="number" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">mines</span>
            <input type="number" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
          </div>
          <div class="flex gap-0.5 flex-col items-center flex-1">
            <span class="text-xs text-darkgreen uppercase font-extrabold text-wrap text-center">quarries</span>
            <input type="number" class="outline-none border-2 border-green-800 bg-transparent text-center w-12 h-12 bg-white text-lightgreen text-xl">
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