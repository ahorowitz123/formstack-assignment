import React from "react";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";

import "./App.css";
import ItemListContainer from "../../containers/ItemListContainer";
import AddItemContainer from "../../containers/AddItemContainer";
import SortContainer from "../../containers/SortContainer";

const App = () =>
  <div className="App">
    <Grid>
      <Row>
        <PageHeader>Welcome to Adam Horowitz's Form Viewer!</PageHeader>
      </Row>
      <Row>
        <Col className="App-add-item-column" sm={11}>
          <AddItemContainer />
        </Col>
        <Col sm={1}>
          <SortContainer />
        </Col>
      </Row>
      <hr />
      <Row>
        <ItemListContainer />
      </Row>
    </Grid>
  </div>;

export default App;
