// @flow

import * as React from "react";
import { Table, Button, Glyphicon } from "react-bootstrap";

import type { Item } from "../../types";
import "./ItemList.css";

type Props = {
  items: Array<Item>,
  selectedId: number,
  handleOnClick: (itemNum: number) => void,
  handleOnDeleteClick: (itemNum: number) => void
};

const ItemList = (props: Props) => {
  const { items, handleOnClick, handleOnDeleteClick } = props;

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
                {item.itemType}
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
