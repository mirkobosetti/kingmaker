import { defineStore } from "pinia";

export const useMapStore = defineStore("map", () => {
  const getCellDescription = (id) => localStorage.getItem(id + "_desc") || "";
  const setCellDescription = (cellId, description) =>
    localStorage.setItem(cellId + "_desc", description);
  const getCellType = (id) => localStorage.getItem(id + "_type") || 0;
  const setCellType = (cellId, type) =>
    localStorage.setItem(cellId + "_type", type);
  const getCellWorkSite = (id) => localStorage.getItem(id + "_worksite") || 0;
  const setCellWorkSite = (cellId, worksite) =>
    localStorage.setItem(cellId + "_worksite", worksite);

  const isExplored = (id) => getCellType(id) == 1;
  const hasCity = (id) => getCellType(id) == 2;
  const isExpanded = (id) => getCellType(id) == 3;

  const clearMap = () => {
    for (let i = 1; i <= 11; i++) {
      for (let j = 1; j <= 29; j++) {
        localStorage.removeItem(i + "." + j + "_desc");
        localStorage.removeItem(i + "." + j + "_type");
      }
    }
  };

  const countByType = (type) => {
    let count = 0;
    for (let i = 1; i <= 11; i++) {
      for (let j = 1; j <= 29; j++) {
        if (getCellType(i + "." + j) == type) {
          count++;
        }
      }
    }
    return count;
  };

  const countByWorkSite = (worksite) => {
    let count = 0;
    for (let i = 1; i <= 11; i++) {
      for (let j = 1; j <= 29; j++) {
        if (getCellWorkSite(i + "." + j) == worksite) {
          count++;
        }
      }
    }
    return count;
  }

  return {
    getCellDescription,
    setCellDescription,
    getCellType,
    setCellType,
    isExplored,
    hasCity,
    isExpanded,
    countByType,
    getCellWorkSite,
    setCellWorkSite,
    countByWorkSite,
  };
});
