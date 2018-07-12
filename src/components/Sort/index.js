// @flow
import React from "react";

import { DropdownButton, MenuItem } from "react-bootstrap";
import type { SortType } from "../../types";

type Props = {
  handleOnSelect: (sortType: SortType) => void
};

const Sort = (props: Props) =>
  <DropdownButton title="Sort">
    <MenuItem eventKey="1" active>
      None
    </MenuItem>
    <MenuItem onSelect={() => props.handleOnSelect("Text")} eventKey="2">
      Text
    </MenuItem>
    <MenuItem onSelect={() => props.handleOnSelect("Type")} eventKey="3">
      Type
    </MenuItem>
    <MenuItem onSelect={() => props.handleOnSelect("Timestamp")} eventKey="4">
      Timestamp
    </MenuItem>
  </DropdownButton>;

export default Sort;
