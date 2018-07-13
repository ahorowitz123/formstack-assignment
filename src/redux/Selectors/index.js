// @flow

import { createSelector } from "reselect";

import type {
  State,
  SortType,
  Item,
  ItemStringField,
  ItemNumField
} from "../../types";
import SORT_TYPES from "../../constants/sortTypes";


/* Selector functions to be used in createSelector */
const getSortType = (state: State): SortType => state.sortType;
const getItemList = (state: State): Array<Item> => state.items;

/* function to sort fields of item which are strings */
const sortText = (field: ItemStringField) => {
  return (a: Item, b: Item): number => {
    const aVal = a[field].toUpperCase();
    const bVal = b[field].toUpperCase();

    if (aVal < bVal) {
      return -1;
    }
    if (aVal > bVal) {
      return 1;
    }

    return 0;
  };
};

/* function to sort fields of item which are numbers */
const sortNum = (field: ItemNumField) => {
  return (a: Item, b: Item): number => {
    return a[field] - b[field];
  };
};

/* creates selector using Reselect to sort the item list */
const getSortedItems = createSelector(
  [getSortType, getItemList],
  (sortType: SortType, items: Array<Item>): Array<Item> => {
    switch (sortType) {
      case SORT_TYPES.NONE:
        return items.slice().sort(sortNum("id"));
      case SORT_TYPES.TEXT:
        return items.slice().sort(sortText("text"));
      case SORT_TYPES.TYPE:
        return items.slice().sort(sortText("itemType"));
      case SORT_TYPES.TIMESTAMP:
        return items.slice().sort(sortNum("createdTimestamp"));
      default:
        return items;
    }
  }
);

export default getSortedItems;
