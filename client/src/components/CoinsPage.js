import { React, useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import DropDown from "./DropDown.js";
import CoinForm from "./CoinForm.js";
import API from "../util/API";
import {useAuth} from "../util/authContext";
import { Table } from "react-bootstrap";

function CoinsPage() {
  const { isLoggedIn } = useAuth();
  const [searchInput, setInput] = useState("bitcoin")
  const [image, setImage] = useState("");
  const [coin, setCoin] = useState("");
  const [price, setPrice] = useState("");
  const [day, setDay] = useState("");
  const [week, setWeek] = useState("");
  const [id, setId] = useState("");
  const [coins, setCoins] = useState({});
  const [favcoins, setFavcoins] = useState([]);

  // console.log("favcoins", favcoins);
 
 useEffect(() => {
  if (isLoggedIn) {
    API
      .getFavcoins(false)
      .then((response) => {
        setFavcoins(response.data.favcoins);
      })
      .catch((err) => {
        console.log(err);
    })
  } else {
    setFavcoins([]);
  }
 }, [isLoggedIn])

  useEffect(() => {
    // console.log(searchInput)
    API.findCoins(searchInput)
      .then((res) => {
        // console.log(res.data)
        setCoins(res.data[0]);
        setId(res.data[0].id);
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

  const handleSaveCoin = async (id) => {
    try {
      const response = await API.saveFavcoin(id);
      setFavcoins(response.data.favcoins);
    } catch (error) {
      console.log(error);
    }
    
  };


  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Coins, Coins, Coins</h1>
          <p className="lead">Please select a coin from the dropdown menu below. </p>
          <p className="lead">Save coins to portfolio by Logging in, or Signing up!</p>
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
                    key= {id}
                  
                  disabled={!isLoggedIn || favcoins.includes(id)}
                  onClick={() => handleSaveCoin(id)}
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