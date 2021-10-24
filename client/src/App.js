import React, { Fragment } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

//bootstrap react
import { Container, Row, Col } from "react-bootstrap";

//components
import InputTodo from "./components/InputTodo";
import ListsTodos from "./components/ListsTodos";

function App() {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col md lg={{ span: 6, offset: 3 }}>
            <InputTodo />
            <ListsTodos />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
