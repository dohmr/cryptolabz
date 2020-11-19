import React from "react";
import { Col, Row, Container } from "../components/Grid";
import DropDown from "./DropDown.js";

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
        <ul className="list-group search-results">
        <li className="list-group-item">
          <h2>coin market data</h2>
          {/* <h2>{props.title}</h2>
          <a href={props.url}>{props.url}</a> */}
        </li>
    </ul>
      </div>
      </Col>
    </Row>
  </Container>
</div>
    );
  }
export default CoinsPage;