import { useEffect, useState } from "react";
import API from "../util/API";

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

  function Input(props) {
    return (
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    );
  }
  function FormBtn(props) {
    return (
      <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {props.children}
      </button>
    );
  }


  return (
    <div>
      <h1>Public Page</h1>
      <h3>Public API Data</h3>
      <p>{data && data.message}</p>
      <form>
        <Input
          onChange={handleInputChange}
          name="name"
          placeholder="name (required)"
        />
        <FormBtn
          disabled={!(formObject.symbol && formObject.name)}
          onClick={handleFormSubmit}
          Submit
        />

      </form>

    </div>
  );
}
export default HomePage;
