import React from "react";
import { Col, Row, Container } from "../components/Grid";
import DropDown from "./DropDown.js";
import CoinForm from "./CoinForm.js";

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
        <CoinForm></CoinForm>
    </div>
      </Col>
    </Row>
  </Container>
</div>
    );
  }
export default CoinsPage;