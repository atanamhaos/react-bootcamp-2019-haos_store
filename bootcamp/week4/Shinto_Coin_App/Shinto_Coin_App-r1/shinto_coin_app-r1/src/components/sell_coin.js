import React from "react";
import Trade from "./trade_coin.js"

function Sell(props) {
  return (
    <div>
      <h1>Sell Shinto Coins</h1>
      <h2>Get Cold Hard Cash for Your Old ShintoCoin</h2>
      <Trade action='sell' props={props.data} transactioneer={props.transactioneer}/>
    </div>
  );
}

export default Sell;
