// @flow

export type ItemType =  "Multiple Choice" | "Dropdown" | "Text Box";

export type AddItemAction = {| type: "ADD_ITEM", id: number, text: string, itemType: ItemType |};
export type DeleteItemAction = {| type: "DELETE_ITEM", id: number |};

export type Action =
| AddItemAction
| DeleteItemAction;

export type Item = {
  +id: number,
  +text: string,
  +itemType: ItemType,
  +createdTimestamp: number
};
