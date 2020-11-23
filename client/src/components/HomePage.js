import { useEffect, useState } from "react";
import DropDown from "./DropDown.js";
import API from "../util/API";
import { Col, Row, Container } from "../components/Grid";
import LineDemo from "../components/Chart"

function HomePage() {
  const [searchInput, setInput] = useState("")
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [snippet, setSnippet] = useState("")


  useEffect(() => {
    console.log(searchInput)
    API.getArticle(searchInput)
      .then((res) => {
        console.log(res.data)
        setTitle(res.data.response.docs[0].headline.main);
        setUrl(res.data.response.docs[0].web_url);
        setSnippet(res.data.response.docs[0].snippet);
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
          <h1 className="display-4">Cryptolabz</h1>
          <p className="lead">Cryptolabs is a learning platform where users can ran read about the most popular cryptocurrencies, research the most recent market data, and test their knowledge in a personal practice investment portfolio</p>
        </div>
      </div>
      <Container fluid>
        <Row>
          <Col size="md-6">

            <div className="form-group">
              <h3 htmlFor="language">Search Articles:</h3>
              <DropDown
                handleInputChange={handleInputChange}
                results={searchInput}
              />
            </div>


          </Col>
          <Col size="md-6 sm-12">
            <div>
              <h3>Top Article</h3>
              <ul className="list-group search-results">
                <li className="list-group-item">
                  <h2>{title}</h2>
                  <p>{snippet}</p>
                  <h2>
                    <a href={url}>
                      Go to NYTimes Article
                      </a>
                  </h2>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}
export default HomePage;
