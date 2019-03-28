import React from "react";
import Trade from "./trade_coin.js"

function Buy(props) {
  return (
    <div>
      <h1>Buy ShinTo Coins</h1>
      <h2>Spend a little money, GAIN a lot of coin!</h2>
      <Trade action='buy' props={props.data} transactioneer={props.transactioneer}/>
    </div>
  );
}

export default Buy;
