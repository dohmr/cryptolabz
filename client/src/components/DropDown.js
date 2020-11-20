import React from "react";

function DropDown(props) {
  return (
  <div>
    <select name="coins" id="coins" value={props.searchInput} onChange={props.handleInputChange}>
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="tether">Tether</option>
        <option value="xrp">XRP</option>
        <option value="chainlink">Chainlink</option>
        <option value="litecoin">Litecoin</option>
        <option value="bitcoin-cash">Bitcoin Cash</option>
        <option value="polkadot">Polkadot</option>
        <option value="binancecoin">Binance Coin</option>
        <option value="cardano">Cardano</option>
    </select>
  </div>
  );
}

export default DropDown;
