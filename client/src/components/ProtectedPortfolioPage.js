import { React, useEffect, useState } from "react";
import { useAuth } from "../util/authContext";
import API from "../util/API";
import Chart from "../components/Chart";
import { Col, Row, } from "../components/Grid";
import { Jumbotron, Container, Table } from "react-bootstrap";
import CoinForm from "./CoinForm"




function PortfolioPage(props) {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    API.getFavcoins(true)
      .then((res) => {
        console.log(res.data)
        setCoins(res.data);

      })
    console.log(coins)
  }, []);


  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>7 Day Chart</h1>
          <Chart />
        </Container>
      </Jumbotron>
      <Table striped bordered hover>
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
          {coins.map(coin => (
            <CoinForm
              key={coin.id}
              image={coin.image}
              coin={coin.name}
              price={coin.current_price}
              day={coin.price_change_percentage_24h}
              week={coin.ath_change_percentage}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );

}

export default PortfolioPage;
