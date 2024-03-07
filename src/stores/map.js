import { defineStore } from "pinia";

export const useMapStore = defineStore("map", () => {
  const cells = [{ id: "5.5", description: "You are in a forest.", type: 1, worksite: 0, cityname: ""}];

  const getCellDescription = (id) => cells.find((cell) => cell.id == id)?.description || "";
  const setCellDescription = (cellId, description) => {
    const cell = cells.find((cell) => cell.id == cellId);
    if (cell) {
      cell.description = description;
    } else {
      cells.push({ id: cellId, description: description });
    }
  }

  const getCellType = (id) => cells.find((cell) => cell.id == id)?.type || 0;
  const setCellType = (cellId, type) => {
    const cell = cells.find((cell) => cell.id == cellId);
    if (cell) {
      cell.type = type;
    } else {
      cells.push({ id: cellId, type: type });
    }
  }

  const getCellWorkSite = (id) => cells.find((cell) => cell.id == id)?.worksite || 0;
  const setCellWorkSite = (cellId, worksite) => {
    const cell = cells.find((cell) => cell.id == cellId);
    if (cell) {
      cell.worksite = worksite;
    } else {
      cells.push({ id: cellId, worksite: worksite });
    }
  }

  const getCellCityName = (id) => cells.find((cell) => cell.id == id)?.cityname || "";
  const setCellCityName = (cellId, cityname) => {
    const cell = cells.find((cell) => cell.id == cellId);
    if (cell) {
      cell.cityname = cityname;
    } else {
      cells.push({ id: cellId, cityname: cityname });
    }
  }

  const isExplored = (id) => getCellType(id) == 1;
  const hasCity = (id) => getCellType(id) == 2;
  const isExpanded = (id) => getCellType(id) == 3;

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
    setCellCityName,
    getCellCityName
  };
});
