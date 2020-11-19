import { useEffect, useState } from "react";
import API from "../util/API";
import { Col, Row, Container } from "../components/Grid";
import ArticleSearchForm from "./articleSearchForm";




function HomePage() {
  const [data, setData] = useState(null);
  const [formObject, setFormObject] = useState({})
  useEffect(() => {

    API.findCoins().then((response) => {
      setData(response.data);
    });
  }, []);
  console.log(data)

  function loadBooks() {
    API.findCoins()
      .then(res =>
        console.log(res.data)
      )
      .catch(err => console.log(err));
  };
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.symbol) {
      API.saveBook({
        name: formObject.name,
        symbol: formObject.symbol,
        update: formObject.update
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
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
      <ArticleSearchForm>
      <form className="search">
      <div className="form-group">
        <h3 htmlFor="language">Search Articles:</h3>
        <input
          // value={props.search}
          // onChange={props.handleInputChange}
          name="term"
          type="text"
          className="form-control"
          placeholder="Search for an article to begin"
          id="term"
        />
      </div>
    </form>
      </ArticleSearchForm>
      </Col>
      <Col size="md-6 sm-12">
      <div>
      <h3>Results to Display</h3>
        <ul className="list-group search-results">
        <li className="list-group-item">
          <h2>article title</h2>
          <h2>article link</h2>
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
export default HomePage;
