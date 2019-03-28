import React from "react";
//import Trade from "./trade_coin.js"

function Transaction(props) {
  console.log(props);
  return (
    <div>
      <h1>Sell Shinto Coins</h1>
      <h2>Get Cold Hard Cash for Your Old ShintoCoin</h2>
    </div>
  );
}

/*
      <Trade action='sell' props={props.data} transactioneer={props.transactioneer}/>
*/
export default Transaction;
