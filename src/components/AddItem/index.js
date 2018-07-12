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

  /*
  * Function to allow flow to properly accept value of select
  * as ItemType.
  */
  const getType = (value: string): ItemType => {
    if (value === "Multiple Choice") {
      return "Multiple Choice";
    } else if (value === "Dropdown") {
      return "Dropdown";
    } else {
      return "Text Box";
    }
  };

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
          <option value="Multiple Choice">Multiple Choice</option>
          <option value="Dropdown">Dropdown</option>
          <option value="Text Box">Text Box</option>
        </FormControl>
      </FormGroup>{" "}
      <Button
        bsStyle="primary"
        onClick={() => {
          props.handleOnClick(text.value, getType(type.value));
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
