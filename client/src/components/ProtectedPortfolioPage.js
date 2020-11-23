import { useEffect, useState } from "react";
import { useAuth } from "../util/authContext";
import API from "../util/API";
import Chart from "../components/Chart";
import { Col, Row, } from "../components/Grid";
import { Jumbotron, Container, Table } from "react-bootstrap";


function PortfolioPage(props) {
  const { logout, user } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    // example API call
    API.getProtectedExample().then((response) => {
      setData(response.data);
    });
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
          <tr>
            <td>placehold fav</td>
            <td>placehold icon</td>
            <td>Bitcoin</td>
            <td>$price</td>
            <td>24hr growth %</td>
            <td>7 day growth %</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default PortfolioPage;
