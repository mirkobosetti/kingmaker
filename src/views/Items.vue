<template>
  <PageTitle title="Items" />

  <div class="flex flex-col justify-center items-center flex-wrap -mt-12">
    <div class="flex gap-1 mb-6">
      <h1 class="text-lightgreen text-xl">You have</h1>
      <input
        type="number"
        class="font-medium text-stone-400 bg-transparent outline-none w-12 border-b-2 border-stone-400 hover:border-stone-500 focus:border-stone-500 text-center"
        v-model="money_platinum"
      />
      <input
        type="number"
        class="font-medium text-yellow-400 bg-transparent outline-none w-12 border-b-2 border-yellow-400 hover:border-yellow-500 focus:border-yellow-500 text-center"
        v-model="money_gold"
      />
      <input
        type="number"
        class="font-medium text-stone-500 bg-transparent outline-none w-12 border-b-2 border-stone-500 hover:border-stone-600 focus:border-stone-600 text-center"
        v-model="money_silver"
      />
      <input
        type="number"
        class="font-medium text-amber-600 bg-transparent outline-none w-12 border-b-2 border-amber-600 hover:border-amber-700 focus:border-amber-700 text-center"
        v-model="money_copper"
      />
      <h1 class="text-lightgreen text-xl">$</h1>
    </div>

    <!-- search bar -->
    <div class="flex gap-1 mt-4 w-1/4">
      <input
        type="text"
        class="font-medium text-darkgreen outline-none w-full px-3 py-2 rounded border hover:shadow-lg hover:border-lightgreen focus:border-lightgreen"
        placeholder="Search or add items..."
        v-model="searchText"
      />
    </div>

    <div class="text-darkgreen text-center mt-12" v-if="!filteredItems.length">
      <p class="text-2xl">No items found</p>
      <p class="mt-4" v-if="searchText">
        Click
        <button
          @click="addNewItem"
          class="text-white outline-none px-2 rounded border hover:shadow-lg hover:border-lightgreen bg-lightgreen hover:bg-darkgreen"
        >
          Add
        </button>
        to add
        <input
          type="number"
          class="font-medium text-darkgreen outline-none w-8 px-1 rounded border hover:shadow-lg hover:border-lightgreen focus:border-lightgreen text-center"
          v-model="newItemCount"
        />
        <span class="uppercase text-xl ml-2 mr-1 underline">{{ searchText }}</span>
        each costing
        <input
          type="number"
          class="font-medium text-darkgreen outline-none w-12 px-1 rounded border hover:shadow-lg hover:border-lightgreen focus:border-lightgreen text-center"
          v-model="newItemGoldSellValue"
          placeholder="0.00"
        />
        <span class="uppercase ml-1">gp</span>
      </p>
    </div>

    <div v-else>
      <table class="table-auto mt-4">
        <thead class="select-none">
          <tr>
            <th
              class="px-4 py-2 text-lightgreen hover:text-darkgreen uppercase text-xl cursor-pointer"
              @click="setTableOrder('quantity', false)"
            >
              <span>Quantity</span>
              <span v-if="order == 'quantity'">
                {{ orderAscending ? "↓" : "↑" }}
              </span>
            </th>
            <th
              class="px-4 py-2 text-lightgreen hover:text-darkgreen uppercase text-xl cursor-pointer"
              @click="setTableOrder('name', true)"
            >
              <span>Name</span>
              <span v-if="order == 'name'">
                {{ orderAscending ? "↓" : "↑" }}
              </span>
            </th>
            <th
              class="px-4 py-2 text-lightgreen hover:text-darkgreen uppercase text-xl cursor-pointer"
              @click="setTableOrder('sell value', false)"
            >
              <span>Sell Value</span>
              <span v-if="order == 'sell value'">
                {{ orderAscending ? "↓" : "↑" }}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in filteredItems" :key="i">
            <td class="px-4 py-2">
              <div class="flex gap-1 justify-center items-center">
                <button
                  v-if="item.quantity > 1"
                  class="text-white outline-none w-6 h-6 rounded border hover:shadow-lg hover:border-lightgreen bg-lightgreen hover:bg-darkgreen"
                  @click="item.quantity--"
                >
                  -
                </button>
                <button
                  v-else
                  class="text-white outline-none w-6 h-6 rounded border hover:shadow-lg hover:border-lightgreen bg-lightgreen hover:bg-darkgreen p-1"
                  @click="items.splice(items.indexOf(item), 1)"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </button>
                <input
                  type="number"
                  class="font-medium text-darkgreen outline-none w-16 px-3 py-2 rounded border hover:shadow-lg hover:border-lightgreen focus:border-lightgreen text-center"
                  v-model="item.quantity"
                  @change="itemQuantityChanged(item)"
                />
                <button
                  class="text-white outline-none w-6 h-6 rounded border hover:shadow-lg hover:border-lightgreen bg-lightgreen hover:bg-darkgreen"
                  @click="item.quantity++"
                >
                  +
                </button>
              </div>
            </td>

            <td class="px-4 py-2">
              <input
                type="text"
                class="font-medium text-darkgreen outline-none w-full min-w-80 text-center px-3 py-2 rounded border hover:shadow-lg hover:border-lightgreen focus:border-lightgreen"
                v-model="item.name"
              />
            </td>

            <td class="px-4 py-2">
              <div class="flex gap-1">
                <div class="w-36">
                  <div class="relative rounded">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span
                        :class="{
                          'text-stone-400': item.currency === 'PP',
                          'text-yellow-400': item.currency === 'GP',
                          'text-stone-500': item.currency === 'SP',
                          'text-amber-600': item.currency === 'CP',
                        }"
                        >$</span
                      >
                    </div>
                    <input
                      type="number"
                      name="price"
                      :id="`price-${i}`"
                      class="block w-full rounded-md py-1.5 pl-7 pr-12 placeholder:text-gray-400 outline-none border hover:shadow-lg hover:border-lightgreen focus:border-lightgreen"
                      placeholder="0.00"
                      :value="getValueFromCurrency(item)"
                      @input="setValueFromCurrency(item, $event.target.value)"
                      :class="{
                        'text-stone-400': item.currency === 'PP',
                        'text-yellow-400': item.currency === 'GP',
                        'text-stone-500': item.currency === 'SP',
                        'text-amber-600': item.currency === 'CP',
                      }"
                    />
                    <div class="absolute inset-y-0 right-1 flex items-center">
                      <select
                        id="currency"
                        name="currency"
                        class="h-full rounded-md border-0 bg-transparent py-0 sm:text-sm outline-none"
                        v-model="item.currency"
                        :class="{
                          'text-stone-400': item.currency === 'PP',
                          'text-yellow-400': item.currency === 'GP',
                          'text-stone-500': item.currency === 'SP',
                          'text-amber-600': item.currency === 'CP',
                        }"
                      >
                        <option>PP</option>
                        <option>GP</option>
                        <option>SP</option>
                        <option>CP</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  class="text-white outline-none px-2 rounded border hover:shadow-lg hover:border-lightgreen bg-lightgreen hover:bg-darkgreen flex-1"
                  @click="sellItem(item, 1)"
                >
                  {{ item.quantity > 1 ? "Sell One" : "Sell" }}
                </button>
                <button
                  v-if="item.quantity > 1"
                  class="text-white outline-none px-2 rounded border hover:shadow-lg hover:border-lightgreen bg-lightgreen hover:bg-darkgreen"
                  @click="sellItem(item, item.quantity)"
                >
                  Sell All
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex gap-1 mt-6 select-none">
        <span class="text-darkgreen"
          >If you
          <button
            @click="sellAllItems"
            class="text-white outline-none px-2 rounded border hover:shadow-lg hover:border-lightgreen bg-lightgreen hover:bg-darkgreen"
          >
            Sell All
          </button>
          your items, you will earn:</span
        >
        <div class="text-stone-400">{{ getPlatinumValue(getTotalItemsValue()) }} <span class="text-xs">PP</span></div>
        <div class="text-yellow-400">{{ getGoldValue(getTotalItemsValue()) }} <span class="text-xs">GP</span></div>
        <div class="text-stone-500">{{ getSilverValue(getTotalItemsValue()) }} <span class="text-xs">SP</span></div>
        <div class="text-amber-600">{{ getCopperValue(getTotalItemsValue()) }} <span class="text-xs">CP</span></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
import { api } from "@/api";
import { toast } from "vue3-toastify";

const items = ref([]);

onBeforeMount(async () => {
  const response = await api.get("items");

  if (response.status !== 200) toast.error("Failed to fetch items");
  else {
    items.value = response.data;

    // add a property to each item to store the current currency sell [PP, GP, SP, CP] based on the copper value
    items.value.forEach((item) => {
      if (item.copperSellValue >= 1000) {
        item.currency = "PP";
      } else if (item.copperSellValue >= 100) {
        item.currency = "GP";
      } else if (item.copperSellValue >= 10) {
        item.currency = "SP";
      } else {
        item.currency = "CP";
      }
    });
  }
});

const money_platinum = ref(0);
const money_gold = ref(0);
const money_silver = ref(0);
const money_copper = ref(0);

const order = ref("sell value");
const orderAscending = ref(false);

const searchText = ref("");

const filteredItems = computed(() => {
  return items.value.filter((item) => {
    return item.name.toLowerCase().includes(searchText.value.toLowerCase());
  });
});

const newItemCount = ref(1);
const newItemGoldSellValue = ref(0);

const getValueFromCurrency = (item) => {
  switch (item.currency) {
    case "PP":
      return item.copperSellValue / 1000;
    case "GP":
      return item.copperSellValue / 100;
    case "SP":
      return item.copperSellValue / 10;
    case "CP":
      return item.copperSellValue;
  }
};

const setValueFromCurrency = (item, newValue) => {
  switch (item.currency) {
    case "PP":
      item.copperSellValue = newValue * 1000;
      break;
    case "GP":
      item.copperSellValue = newValue * 100;
      break;
    case "SP":
      item.copperSellValue = newValue * 10;
      break;
    case "CP":
      item.copperSellValue = newValue;
      break;
  }
};

const getPlatinumValue = (copperValue) => {
  return Math.floor(copperValue / 1000);
};

const getGoldValue = (copperValue) => {
  return Math.floor((copperValue % 1000) / 100);
};

const getSilverValue = (copperValue) => {
  return Math.floor((copperValue % 100) / 10);
};

const getCopperValue = (copperValue) => {
  return copperValue % 10;
};

const getTotalItemsValue = () => {
  return items.value.reduce((acc, item) => {
    return acc + item.copperSellValue * item.quantity;
  }, 0);
};

const setTableOrder = (name, defaultAsc) => {
  if (order.value == name) {
    orderAscending.value = !orderAscending.value;
  } else {
    order.value = name;
    orderAscending.value = defaultAsc;
  }

  sortItems();
};

const sortItems = () => {
  // if some input has focus, don't sort the items
  // if (document.activeElement.tagName === "INPUT") {
  //   return items.value;
  // }
  console.log("sorting items", order.value, orderAscending.value);
  switch (order.value) {
    case "quantity":
      items.value = items.value.sort((a, b) => {
        return orderAscending.value ? a.quantity - b.quantity : b.quantity - a.quantity;
      });
      break;
    case "name":
      items.value = items.value.sort((a, b) => {
        return orderAscending.value ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      });
      break;
    case "sell value":
      items.value = items.value.sort((a, b) => {
        return orderAscending.value ? a.copperSellValue - b.copperSellValue : b.copperSellValue - a.copperSellValue;
      });
      break;
  }
};

// default sort
sortItems();

const addNewItem = async () => {
  const newItem = {
    name: searchText.value,
    quantity: newItemCount.value,
    copperSellValue: newItemGoldSellValue.value * 100,
    currency: "GP",
  };

  const response = await api.post(`items`, newItem);

  if (response.status !== 201) toast.error("Failed to save item");
  else
    items.value.push({
      ...newItem,
      _id: response.data.insertedId,
    });
};

const sellAllItems = () => {
  const totalValue = getTotalItemsValue();
  const platinum = getPlatinumValue(totalValue);
  const gold = getGoldValue(totalValue);
  const silver = getSilverValue(totalValue);
  const copper = getCopperValue(totalValue);

  money_platinum.value += platinum;
  money_gold.value += gold;
  money_silver.value += silver;
  money_copper.value += copper;

  items.value = [];
};

const sellItem = (item, quantity) => {
  const totalValue = item.copperSellValue * quantity;
  const platinum = getPlatinumValue(totalValue);
  const gold = getGoldValue(totalValue);
  const silver = getSilverValue(totalValue);
  const copper = getCopperValue(totalValue);

  money_platinum.value += platinum;
  money_gold.value += gold;
  money_silver.value += silver;
  money_copper.value += copper;

  item.quantity -= quantity;

  if (item.quantity <= 0) {
    items.value.splice(items.value.indexOf(item), 1);
  }
};

const itemQuantityChanged = async (item) => {
  const response = await api.put(`items/${item._id}`, item);

  if (response.status !== 200) toast.error("Failed to save item");
  else {
    if (item.quantity <= 0) {
      items.value.splice(items.value.indexOf(item), 1);
    }
  }
};
</script>
