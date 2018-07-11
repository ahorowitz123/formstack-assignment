// @flow

import * as React from "react";
import { Table, Button, Glyphicon } from "react-bootstrap";

import type { Item } from '../../types';

type Props = {
  items: Array<Item>,
  handleOnClick: (itemNum: number) => void,
  handleOnDeleteClick: (itemNum: number) => void
};

const ItemList = (props: Props) => {
  const { items, handleOnClick, handleOnDeleteClick } = props;

  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th> Number </th>
          <th> Text </th>
          <th> Type </th>
          <th> Created Timestamp </th>
          <th />
        </tr>
      </thead>
      {items.map(item =>
        <tr key={item.id}>
          <td onClick={handleOnClick(item.id)}>item.num</td>
          <td onClick={handleOnClick(item.id)}>item.text</td>
          <td onClick={handleOnClick(item.id)}>item.type</td>
          <td onClick={handleOnClick(item.id)}>item.createdTimestamp</td>
          <td>
            <Button onclick={handleOnDeleteClick(item.id)}>
              <Glyphicon glyph="remove" />
            </Button>
          </td>
        </tr>
      )}
    </Table>
  );
};

export default ItemList;
