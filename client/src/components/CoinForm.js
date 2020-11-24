import { React, useState } from "react";

function CoinForm(props) {
  

  return (
    <tr>
      <td>
          <SaveButton onClick={ props.onClick } disabled={ props.disabled }/>
          
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

function SaveButton(props) {
  
  return (
    <button disabled={props.disabled} onClick={props.onClick} className="btn btn-sm btn-outline-secondary mx-1">
      <i
      className={props.disabled ? "fas fa-star" : "far fa-star"}
       
      
      ></i>
    </button>
  );
}

export default CoinForm;