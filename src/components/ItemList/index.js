// @flow

import * as React from "react";
import { Table, Button, Glyphicon } from "react-bootstrap";

import type { Item, ItemType } from "../../types";
import "./ItemList.css";

type Props = {
  /* Array of items */
  items: Array<Item>,
  /* ID of selected item */
  selectedId: number,
  /* function to execute when item is clicked */
  handleOnClick: (itemNum: number) => void,
  /* function to execute when delete button is clicked */
  handleOnDeleteClick: (itemNum: number) => void
};

/*
* Presentational component to display Item List.
* Gets list of items, selected item, item click functionality,
* and delete item functionality from container.
*/
const ItemList = (props: Props) => {
  const { items, handleOnClick, handleOnDeleteClick } = props;

  const toTitleCase = (str: ItemType): string => {
    const newStr = str.replace("_", " ");
    return newStr.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th> Text </th>
          <th> Type </th>
          <th> Created Timestamp </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          const className = props.selectedId === item.id ? "selected" : "";
          const date = new Date(item.createdTimestamp);
          return (
            <tr className={className} key={item.id}>
              <td onClick={() => handleOnClick(item.id)}>
                {item.text}
              </td>
              <td onClick={() => handleOnClick(item.id)}>
                {toTitleCase(item.itemType)}
              </td>
              <td onClick={() => handleOnClick(item.id)}>
                {date.toLocaleString()}
              </td>
              <td>
                <Button
                  bsStyle="danger"
                  onClick={() => handleOnDeleteClick(item.id)}
                >
                  <Glyphicon glyph="remove" />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ItemList;
