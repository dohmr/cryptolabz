import React from "react";



function CoinForm() {
    return (
        <div className="card" style={{ width: "100%"}}>
        <div className="card-body">
          <h5 className="card-title">Coin Name</h5>
          <h5 className="card-subtitle mb-2 text-muted">coin price</h5>
          <h5 className="card-subtitle mb-2 text-muted">24hr Growth</h5>
          <h5 className="card-subtitle mb-2 text-muted">7 day Growth</h5>
        </div>
      </div>
    );
  }
  
  export default CoinForm;