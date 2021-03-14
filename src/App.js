import React, { Component } from "react";

import logo from './logo.svg';
import VendingTable from './components/VendingTable'
import VendingForm from './components/VendingForm'
import VendingModal from './components/VendingModal'

import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
  return (
    <Container fluid>
      <center>
      <Row>
        <Col>
          <h1 className="text-center">Vending Machine</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={8}>
        </Col>
        <Col sm={4}>
          <VendingForm />
        </Col>
      </Row>
      </center>
    </Container>
  );
  }
}

export default App;
