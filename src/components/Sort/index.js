// @flow
import React from "react";

import { DropdownButton, MenuItem } from "react-bootstrap";
import type { SortType } from "../../types";

type Props = {
  handleOnSelect: (sortType: SortType) => void
};

/*
* Presentational component to display Sort dropdown button.
* Gets select functionality from container.
*/
const Sort = (props: Props) => {
  const sortTypes: Array<string> = ["None", "Text", "Type", "Timestamp"];
  return (
    <DropdownButton bsStyle="success" id="dropdown-sort" title="Sort">
      {sortTypes.map((sort, index) => {
        const active = sort === "None";
        return (
          <MenuItem
            key={index}
            onSelect={() => props.handleOnSelect(sort.toUpperCase())}
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
