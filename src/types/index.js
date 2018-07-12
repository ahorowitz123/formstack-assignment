// @flow

export type ItemType =  "Multiple Choice" | "Dropdown" | "Text Box";
export type SortType = "None" |"Text" | "Type" | "Timestamp"

export type AddItemAction = {| type: "ADD_ITEM", id: number, text: string, itemType: ItemType |};
export type DeleteItemAction = {| type: "DELETE_ITEM", id: number |};
export type SortAction = {| type: "SORT", sortType: SortType |};


export type Action =
| AddItemAction
| DeleteItemAction
| SortAction;

export type Item = {
  +id: number,
  +text: string,
  +itemType: ItemType,
  +createdTimestamp: number
};

export type State = { +items: Array<Item> };
