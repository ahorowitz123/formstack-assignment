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
  handleOnClick: (text: string, type: ItemType) => void
};

const AddItem = (props: Props) => {
  let text: HTMLInputElement;
  let type: HTMLSelectElement;

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
