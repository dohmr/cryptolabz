import { React, useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import DropDown from "./DropDown.js";
import CoinForm from "./CoinForm.js";
import API from "../util/API";
import { Table } from "react-bootstrap";

function CoinsPage() {
  const [searchInput, setInput] = useState("")
  const [image, setImage] = useState("");
  const [coin, setCoin] = useState("");
  const [price, setPrice] = useState("");
  const [day, setDay] = useState("");
  const [week, setWeek] = useState("");


  useEffect(() => {
    console.log(searchInput)
    API.findCoins(searchInput)
      .then((res) => {
        console.log(res.data)
        setImage(res.data[0].image);
        setCoin(res.data[0].name);
        setPrice(res.data[0].current_price);
        setDay(res.data[0].price_change_percentage_24h);
        setWeek(res.data[0].ath_change_percentage);
      })
      .catch(err => console.log(err));
  }, [searchInput])

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInput(value)
  };




  return (
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
              <DropDown 
              handleInputChange={handleInputChange} 
              results={searchInput} 
              />
            </div>
          </Col>
          <Col size="md-8 sm-12">
            <div>
              <h3>Coin Data</h3>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Fav</th>
                    <th>Icon</th>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>24hr Growth</th>
                    <th>7 day Growth</th>
                  </tr>
                </thead>
                <tbody>
                  <CoinForm 
                  image={image} 
                  coin={coin} 
                  price={price} 
                  day={day} 
                  week={week}
                  />
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