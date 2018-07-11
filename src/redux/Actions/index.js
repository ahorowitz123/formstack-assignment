// @flow

import { ADD_ITEM, DELETE_ITEM } from "../../constants";
import type {
  Action,
  AddItemAction,
  DeleteItemAction,
  ItemType
} from "../../types";

let nextId = 0;

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
