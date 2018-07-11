// @flow

export type Item = {
  num: number,
  text: string,
  type: "Multiple Choice" | "Dropdown" | "Text Box",
  createdTimestamp: number
};
