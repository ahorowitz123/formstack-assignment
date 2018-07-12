import React from "react";
import { Grid, Row } from "react-bootstrap";

import "./App.css";
import ItemListContainer from "../../containers/ItemListContainer";
import AddTodoContainer from "../../containers/AddTodoContainer";
import SortContainer from "../../containers/SortContainer";

const App = () =>
  <Grid>
    <Row>
      <AddTodoContainer />
    </Row>
    <Row>
      <SortContainer />
    </Row>
    <Row>
      <ItemListContainer />
    </Row>
  </Grid>;

export default App;
