import React, { Component } from "react";

import VendingForm from './components/VendingForm'
import Vending from "./components/Vending";
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/button.css'

const SERVICE_URL = "https://tsg-vending.herokuapp.com"

class App extends React.Component {

  state = {
    loading: false,
    itemsData: [
      {
        "id": 1,
        "name": "Dog Plush",
        "price": "4.00",
        "quanity": "5",
    }]
  }

  componentDidMount() {
    console.log("App is now mounted.")
    this.setState({ loading: true })
    console.log("Loading item data")
    fetch(SERVICE_URL + "/items")
      .then(data => data.json())
      .then(data => this.setState(
        { itemsData: data, loading: false }
      ))
  }

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
        <Col lg={8}>
        <Vending items={this.state.itemsData}/>
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
