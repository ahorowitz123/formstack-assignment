// @flow
import React from "react";

import { DropdownButton, MenuItem } from "react-bootstrap";
import type { SortType } from "../../types";

type Props = {
  handleOnSelect: (sortType: SortType) => void
};

const Sort = (props: Props) => {
  const sortTypes: Array<SortType> = ["None", "Text", "Type", "Timestamp"];
  return (
    <DropdownButton bsStyle="success" id="dropdown-sort" title="Sort">
      {sortTypes.map((sort, index) => {
        const active = sort === "None";
        return (
          <MenuItem
            key={index}
            onSelect={() => props.handleOnSelect(sort)}
            eventKey={index}
            active={active}
          >
            {sort}
          </MenuItem>
        );
      })}
    </DropdownButton>
  );
};

export default Sort;
