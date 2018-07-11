// @flow

import * as React from "react";
import { Table, Button, Glyphicon } from "react-bootstrap";

import type { Item } from "../../types";

type Props = {
  items: Array<Item>,
  handleOnClick: (itemNum: number) => void,
  handleOnDeleteClick: (itemNum: number) => void
};

const ItemList = (props: Props) => {
  const { items, handleOnClick, handleOnDeleteClick } = props;
  console.log(handleOnClick);

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
        {items.map(item =>
          <tr key={item.id}>
            <td onClick={() => handleOnClick(item.id)}>{item.text}</td>
            <td onClick={() => handleOnClick(item.id)}>{item.itemType}</td>
            <td onClick={() => handleOnClick(item.id)}>
              {item.createdTimestamp}
            </td>
            <td>
              <Button onClick={() => handleOnDeleteClick(item.id)}>
                <Glyphicon glyph="remove" />
              </Button>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default ItemList;
