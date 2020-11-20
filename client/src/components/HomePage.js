import { useEffect, useState } from "react";
import API from "../util/API";
import { Col, Row, Container } from "../components/Grid";

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


  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Cryptolabz</h1>
          <p className="lead">Cryptolabs description</p>
        </div>
      </div>
      <Container fluid>
        <Row>
          <Col size="md-6">

              <form className="search" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <h3 htmlFor="language">Search Articles:</h3>
                  <input
                    // value={props.search}
                    onChange={handleInputChange}
                    results={searchInput}
                    name="article"
                    type="text"
                    className="form-control"
                    placeholder="Search for an article to begin"
                    id="term"
                  />
                </div>
              </form>

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
                      Got to NYTimes Article
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
