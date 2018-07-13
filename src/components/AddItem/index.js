// @flow

import React from "react";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Glyphicon
} from "react-bootstrap";

import type { ItemType } from "../../types";
import ITEM_TYPES from "../../constants/itemTypes";

type Props = {
  /* function to add item to list */
  handleOnClick: (text: string, type: ItemType) => void
};

/*
* Presentational component to display an Add Item form.
* Requires text and a type of item. Calls handleOnClick function
* given by container component.
*/
const AddItem = (props: Props) => {
  /*
  * Variables to grab elements from form for values.
  * This is a work around to pass flow validation rather than
  * assigning to instance variables.
  */
  let text: HTMLInputElement;
  let type: HTMLSelectElement;

  return (
    <Form inline>
      <FormGroup>
        <ControlLabel>Text</ControlLabel>
        {"  "}
        <FormControl
          inputRef={ref => {
            text = ref;
          }}
          type="text"
          placeholder="Enter Question Here!"
        />
      </FormGroup>{" "}
      <FormGroup>
        <ControlLabel>Type</ControlLabel>{" "}
        <FormControl
          inputRef={ref => {
            type = ref;
          }}
          componentClass="select"
          placeholder="Multiple Choice"
        >
          <option value={ITEM_TYPES.MULTIPLE_CHOICE}>Multiple Choice</option>
          <option value={ITEM_TYPES.DROPDOWN}>Dropdown</option>
          <option value={ITEM_TYPES.TEXT_BOX}>Text Box</option>
        </FormControl>
      </FormGroup>{" "}
      <Button
        bsStyle="primary"
        onClick={() => {
          props.handleOnClick(text.value, type.value);
          text.value = "";
        }}
      >
        <Glyphicon glyph="plus" />{" "}
        Add Item
      </Button>
    </Form>
  );
};

export default AddItem;
