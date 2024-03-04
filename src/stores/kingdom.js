import { defineStore } from "pinia";
import { ref } from "vue";

export const useKingdomStore = defineStore("kingdom", () => {
  const currentLevel = ref(1);
  const maxLevel = ref(1);
  const fame = ref(0);
  const infamy = ref(0);
  const name = ref("Ravanellum");
  const size = ref(1);
  const unrest = ref(0);
  const consumption = ref(0);
  const resourceDice = currentLevel.value + 4;
  const controlDC = ref({
    base: 14,
    total: function () {
      if (currentLevel.value === 20) return 40;
      if (currentLevel.value === 19) return 39;
      if (currentLevel.value === 18) return 38;
      if (currentLevel.value === 17) return 36;
      if (currentLevel.value === 16) return 35;
      if (currentLevel.value === 15) return 34;
      if (currentLevel.value === 14) return 32;
      if (currentLevel.value === 13) return 31;
      if (currentLevel.value === 12) return 30;
      if (currentLevel.value === 11) return 28;
      if (currentLevel.value === 10) return 27;
      if (currentLevel.value === 9) return 26;
      if (currentLevel.value === 8) return 24;
      if (currentLevel.value === 7) return 23;
      if (currentLevel.value === 6) return 22;
      if (currentLevel.value === 5) return 20;
      if (currentLevel.value === 4) return 18;
      if (currentLevel.value === 3) return 16;
      if (currentLevel.value === 2) return 15;

      return this.base;
    },
  
  });

  const charters = ref([
    "conquest",
    "exploration",
    "expansion",
    "grant",
    "open",
  ]);
  const charter = ref('grant');
  const charterFreeAbilityBoost = ref('stability');

  const heartlands = ref([
    'forest or swamp',
    'hill or plain',
    'lake or river',
    'mountain or ruins',
  ])
  const heartland = ref('lake or river');

  const governments = ref([
    'despotism',
    'feudalism',
    'oligarchy',
    'republic',
    'thaumacracy',
    'yeomanry',
  ]);
  const government = ref('oligarchy');
  const governmentFreeAbilityBoost = ref('stability');

  // Resource Dice = kingdom level + 4 + bonus dice – penalty dice
  // Kingdom Consumption = settlement Consumption total + army Consumption total – Farmland hexes influenced by settlements + modifiers from kingdom events

  const ablityScores = ref({
    culture: {
      base: 10,
      modifier: function () {
        let mod = 0;
        
        if (charter.value === 'conquest') mod -= 2;
        if (charter.value === 'expansion') mod += 2;

        if (heartland.value === 'forest or swamp') mod ++;

        if (government.value === 'feudalism') mod += 2;
        if (government.value === 'thaumacracy') mod += 2;
        if (government.value === 'yeomanry') mod += 2;

        if (charterFreeAbilityBoost.value === 'culture') mod ++;

        if (governmentFreeAbilityBoost.value === 'culture') mod ++;

        return mod;
      },
      total: function () {
        return this.base + this.modifier();
      }
    },
    economy: {
      base: 10,
      modifier: function () {
        let mod = 0;
        
        if (charter.value === 'exploration') mod -= 2;
        if (charter.value === 'grant') mod += 2;

        if (heartland.value === 'lake or river') mod ++;

        if (government.value === 'despotism') mod += 2;
        if (government.value === 'oligarchy') mod += 2;
        if (government.value === 'thaumacracy') mod += 2;

        if (charterFreeAbilityBoost.value === 'economy') mod ++;

        if (governmentFreeAbilityBoost.value === 'economy') mod ++;

        return mod;
      },
      total: function () {
        return this.base + this.modifier();
      }
    },
    loyalty: {
      base: 10,
      modifier: function () {
        let mod = 0;
        
        if (charter.value === 'conquest') mod += 2;
        if (charter.value === 'grant') mod -= 2;

        if (heartland.value === 'hill or plain') mod ++;

        if (government.value === 'oligarchy') mod += 2;
        if (government.value === 'republic') mod += 2;
        if (government.value === 'yeomanry') mod += 2;

        if (charterFreeAbilityBoost.value === 'loyalty') mod ++;

        if (governmentFreeAbilityBoost.value === 'loyalty') mod ++;

        return mod;
      },
      total: function () {
        return this.base + this.modifier();
      }
    },
    stability: {
      base: 10,
      modifier: function () {
        let mod = 0;
        
        if (charter.value === 'expansion') mod -= 2;
        if (charter.value === 'exploration') mod += 2;

        if (heartland.value === 'mountain or ruins') mod ++;

        if (government.value === 'despotism') mod += 2;
        if (government.value === 'feudalism') mod += 2;
        if (government.value === 'republic') mod += 2;

        if (charterFreeAbilityBoost.value === 'stability') mod ++;

        if (governmentFreeAbilityBoost.value === 'stability') mod ++;

        return mod;
      },
      total: function () {
        return this.base + this.modifier();
      }
    },
  });

  const ruins = ref({
    corruption: {
      score: 0,
      penality: 0,
      threshold: 10,
    },
    crime: {
      score: 0,
      penality: 0,
      threshold: 10,
    },
    decay: {
      score: 0,
      penality: 0,
      threshold: 10,
    },
    strife: {
      score: 0,
      penality: 0,
      threshold: 10,
    },
  });

  const commodities = ref({
    food: {
      current: 0,
      max: 4,
    },
    lumber: {
      current: 0,
      max: 4,
    },
    luxuries: {
      current: 0,
      max: 4,
    },
    ore: {
      current: 0,
      max: 4,
    },
    stone: {
      current: 0,
      max: 4,
    },
  })

  const leaders = ref({
    ruler: {
      title: 'Ruler',
      name: 'Oscar',
      scaling: 'loyalty'
    },
    counselor: {
      title: 'Counselor',
      name: '',
      scaling: 'culture'
    },
    general: {
      title: 'General',
      name: 'Garcia',
      scaling: 'stability'
    },
    emissary: {
      title: 'Emissary',
      name: '',
      scaling: 'loyalty'
    },
    magister: {
      title: 'Magister',
      name: '',
      scaling: 'culture'
    },
    treasurer: {
      title: 'Treasurer',
      name: 'Mirko',
      scaling: 'economy'
    },
    viceroy: {
      title: 'Viceroy',
      name: 'Fabio',
      scaling: 'economy'
    },
    warden: {
      title: 'Warden',
      name: '',
      scaling: 'stability'
    },
  });

  return {
    currentLevel,
    maxLevel,
    fame,
    infamy,
    name,
    charters,
    charter,
    charterFreeAbilityBoost,
    heartlands,
    heartland,
    governments,
    government,
    governmentFreeAbilityBoost,
    ablityScores,
    size,
    unrest,
    consumption,
    ruins,
    commodities,
    resourceDice,
    leaders,
    controlDC,
  };
});
