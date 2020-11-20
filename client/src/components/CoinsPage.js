import React from "react";
import { Col, Row, Container } from "../components/Grid";
import DropDown from "./DropDown.js";
import CoinForm from "./CoinForm.js";
import { Table } from "react-bootstrap";

function CoinsPage() {
  return(
<div>
    <div className="jumbotron jumbotron-fluid">
          <div className="container">
           <h1 className="display-4">Coins, Coins, Coins</h1>
            <p className="lead">Please select a coin from the dropdown menu below. </p>
          </div>
    </div>
    <Container fluid>
    <Row>
      <Col size="md-4">
      <div>
        <h3 htmlFor="language">Choose a Coin:</h3>
        <DropDown></DropDown>
      </div>
     </Col>
      <Col size="md-8 sm-12">
      <div>
      <h3>Coin Data</h3>
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Fav</th>
      <th>Coin</th>
      <th>Price</th>
      <th>24hr Growth</th>
      <th>7 day Growth</th>
    </tr>
  </thead>
  <tbody>
    <CoinForm></CoinForm>
  </tbody>
</Table>
    </div>
      </Col>
    </Row>
  </Container>
</div>
    );
  }
export default CoinsPage;