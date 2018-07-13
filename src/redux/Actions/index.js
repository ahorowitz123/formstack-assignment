// @flow

import ACTIONS from "../../constants/actions";
import type {
  AddItemAction,
  DeleteItemAction,
  SelectItemAction,
  SortAction,
  ItemType,
  SortType
} from "../../types";

let nextId = 3;

/* ADD_ITEM action creator. Takes in text and type of item. */
export const addItem = (text: string, itemType: ItemType): AddItemAction => ({
  type: ACTIONS.ADD_ITEM,
  id: nextId++,
  text,
  itemType
});

/* DELETE_ITEM action creator. Takes id of item to be deleted. */
export const deleteItem = (id: number): DeleteItemAction => ({
  type: ACTIONS.DELETE_ITEM,
  id
});

/* SELECT_ITEM action creator. Takes in id of item to be selected. */
export const selectItem = (id: number): SelectItemAction => ({
  type: ACTIONS.SELECT_ITEM,
  id
})

/* SORT action creator. Takes in new type of sort. */
export const sortList = (sortType: SortType): SortAction => ({
  type: ACTIONS.SORT,
  sortType
})
