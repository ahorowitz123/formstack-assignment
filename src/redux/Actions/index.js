// @flow

import { ADD_ITEM, DELETE_ITEM, SELECT_ITEM, SORT } from "../../constants";
import type {
  AddItemAction,
  DeleteItemAction,
  SelectItemAction,
  SortAction,
  ItemType,
  SortType
} from "../../types";

let nextId = 3;

export const addItem = (text: string, itemType: ItemType): AddItemAction => ({
  type: ADD_ITEM,
  id: nextId++,
  text,
  itemType
});
export const deleteItem = (id: number): DeleteItemAction => ({
  type: DELETE_ITEM,
  id
});
export const selectItem = (id: number): SelectItemAction => ({
  type: SELECT_ITEM,
  id
})
export const sortList = (sortType: SortType): SortAction => ({
  type: SORT,
  sortType
})
