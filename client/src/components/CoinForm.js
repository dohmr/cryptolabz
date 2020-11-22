import { React, useState } from "react";



// pass in props for information to be added when mapped through for coin and portfolio pages

function CoinForm(props) {


  return (
    <tr>
      <td>
          <SaveButton />
      </td>
      <td>
        <img
          src={props.image}
          alt={props.coin}
          height="40px"
          width="40px"
        />
      </td>
      <td>{props.coin}</td>
      <td>${props.price}</td>
      <td>{props.day}%</td>
      <td>{props.week}%</td>
    </tr>
  ); 
}

function SaveButton({ onClick, disabled }) {
  return (
    <button className="btn btn-sm btn-outline-secondary mx-1">
      <i
      className={disabled ? "fas fa-star" : "far fa-star"}
      disabled={disabled}
      onClick={onClick}
      ></i>
    </button>
  );
}

export default CoinForm;