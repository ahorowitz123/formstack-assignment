// @flow

import { createSelector } from "reselect";

import type { State, SortType, Item } from "../../types";

const getSortType = (state: State): SortType => state.sortType;
const getItemList = (state: State): Array<Item> => state.items;

const getSortedItems = createSelector(
  [getSortType, getItemList],
  (sortType: SortType, items: Array<Item>): Array<Item> => {
    switch (sortType) {
      case "None":
        return items.slice().sort(function(a, b) {
          return a.id - b.id;
        });
      case "Text":
        return items.slice().sort(function(a, b) {
          const textA = a.text.toUpperCase();
          const textB = b.text.toUpperCase();
          if (textA < textB) {
            return -1;
          }
          if (textA > textB) {
            return 1;
          }

          return 0;
        });
      case "Type":
        return items.slice().sort(function(a, b) {
          const typeA = a.itemType.toUpperCase();
          const typeB = b.itemType.toUpperCase();
          if (typeA < typeB) {
            return -1;
          }
          if (typeA > typeB) {
            return 1;
          }

          return 0;
        });
      case "Timestamp":
        return items.slice().sort(function(a, b) {
          return a.createdTimestamp - b.createdTimestamp;
        });
      default:
        return items;
    }
  }
);

export default getSortedItems;
