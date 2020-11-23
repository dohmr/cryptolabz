import { React, useState } from "react";



// pass in props for information to be added when mapped through for coin and portfolio pages

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
  console.log("inSaveButton")
  return (
    <button onClick={props.onClick} className="btn btn-sm btn-outline-secondary mx-1">
      <i
      className={props.disabled ? "fas fa-star" : "far fa-star"}
       
      // disabled={disabled} 
      
      ></i>
    </button>
  );
}

export default CoinForm;