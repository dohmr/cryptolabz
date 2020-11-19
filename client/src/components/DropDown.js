import React from "react";

function DropDown() {
  return (
    <div className="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item"href="#">Bitcoin</a>
      <a className="dropdown-item"href="#">Ethereum</a>
      <a className="dropdown-item"href="#">Tether</a>
      <a className="dropdown-item"href="#">XRP</a>
      <a className="dropdown-item"href="#">Chainlink</a>
      <a className="dropdown-item"href="#">Litecoin</a>
      <a className="dropdown-item"href="#">Bitcoin Cash</a>
      <a className="dropdown-item"href="#">Polkadot</a>
      <a className="dropdown-item"href="#">Binance Coin</a>
      <a className="dropdown-item"href="#">Cardano</a>

    </div>
  </div>
  );
}

export default DropDown;
