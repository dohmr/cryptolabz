import { React, useEffect, useState } from "react";
import { useAuth } from "../util/authContext";
import API from "../util/API";
import Chart from "../components/Chart";
import { Col, Row, } from "../components/Grid";
import { Jumbotron, Container, Table } from "react-bootstrap";
import CoinForm from "./CoinForm"




function PortfolioPage(props) {
  const [image, setImage] = useState("");
  const [coin, setCoin] = useState("");
  const [price, setPrice] = useState("");
  const [day, setDay] = useState("");
  const [week, setWeek] = useState("");
  const [id, setId] = useState("");
  const [coins, setCoins] = useState({});
  const [favcoins, setFavcoins] = useState([]);



  useEffect(() => {
    API.getFavcoins(true)
      .then((res) => {
        console.log(res.data)
        setCoins(res.data);
        setId(res.data[0].id);
        setImage(res.data[0].image);
        setCoin(res.data[0].name);
        setPrice(res.data[0].current_price);
        setDay(res.data[0].price_change_percentage_24h);
        setWeek(res.data[0].ath_change_percentage);


      })
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
          {/* {coins.map(coin => ( */}
          <CoinForm
            key={id}

            // disabled={!isLoggedIn || favcoins.includes(id)}
            // onClick={() => handleSaveCoin(id)}
            image={image}
            coin={coin}
            price={price}
            day={day}
            week={week}
          />
          ))}
        </tbody>
      </Table>
    </div>
  );

}

export default PortfolioPage;
