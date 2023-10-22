import { IPeople } from "../types/IPeople";

export const isElementInArray = (name: string, peoples: IPeople[]) => {
  for (let i = 0; i < peoples.length; i++) {
    if (peoples[i].name === name) {
      return true;
    }
  }
  return false;
};
