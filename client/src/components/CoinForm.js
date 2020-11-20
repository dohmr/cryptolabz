import React from "react";



// pass in props for information to be added when mapped through for coin and portfolio pages

function CoinForm(props) {
    return (
      <tr>
      <td><i className="far fa-star"></i></td>
      <td><img src={props.image} alt={props.coin} height="40px" width="40px"/></td>
      <td>{props.coin}</td>
      <td>{props.price}</td>
      <td>{props.day}</td>
      <td>{props.week}</td>
    </tr>
    );
  }
  
  export default CoinForm;