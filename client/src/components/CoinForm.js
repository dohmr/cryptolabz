import {React, useState} from "react";



// pass in props for information to be added when mapped through for coin and portfolio pages

function CoinForm(props) {
  // const [filled, setFilled] = useState(false)

  // const handleClick = (e) => {
  //   const {value} = e.target
  //   setFilled(true)
  // }



    return (
      <tr>
      <td><i 
      class="far fa-star" 
      // onClick={handleClick}
      ></i></td>
      <td>
        <img 
        src={props.image} 
        alt={props.coin} 
        height="40px" 
        width="40px"
        />
        </td>
      <td>{props.coin}</td>
      <td>{props.price}</td>
      <td>{props.day}</td>
      <td>{props.week}</td>
    </tr>
    );
  }
  
  export default CoinForm;