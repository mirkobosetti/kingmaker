import { defineStore } from "pinia";
import { ref } from "vue";

export const useMapStore = defineStore("map", () => {
  const cells = ref([]);

  const getCellById = (id) => {
    return cells.value.find((cell) => cell.id == id);
  };

  // #region description
  const getCellDescription = (cellId) => {
    const cell = getCellById(cellId);

    if (cell) return cell.description;
  };
  const setCellDescription = async (cellId, description) => {
    const cell = getCellById(cellId);

    if (cell) cell.description = description;
    else cells.value.push({ id: cellId, description });
  };
  //#endregion

  // #region type
  const getCellType = (cellId) => {
    const cell = getCellById(cellId);

    if (cell) return cell.type;
  };
  const setCellType = async (cellId, type) => {
    const cell = getCellById(cellId);

    if (cell) cell.type = type;
    else cells.value.push({ id: cellId, type });
  };
  // #endregion

  // #region worksite
  const getCellWorkSite = (cellId) => {
    const cell = getCellById(cellId);

    if (cell) return cell.worksite;
  };
  const setCellWorkSite = async (cellId, worksite) => {
    const cell = getCellById(cellId);

    if (cell) cell.worksite = worksite;
    else cells.value.push({ id: cellId, worksite });
  };
  // #endregion

  // #region cityname
  const getCellCityName = (cellId) => {
    const cell = getCellById(cellId);

    if (cell) return cell.cityname;
  };
  const setCellCityName = async (cellId, cityname) => {
    const cell = getCellById(cellId);

    if (cell) cell.cityname = cityname;
    else cells.value.push({ id: cellId, cityname });
  };
  // #endregion

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
  };

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
    getCellCityName,
    cells,
    getCellById
  };
});
