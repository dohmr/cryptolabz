import { useEffect, useState } from "react";
import { useAuth } from "../util/authContext";
import API from "../util/API";
import Chart from "../components/Chart";
import { Jumbotron, Container } from "react-bootstrap";


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
    </div>
  );
}

export default PortfolioPage;
