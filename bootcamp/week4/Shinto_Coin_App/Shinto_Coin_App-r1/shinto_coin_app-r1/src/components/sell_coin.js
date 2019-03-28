import React from "react";

import Trade from "./trade_coin.js"

function Sell(props) {
  //console.log(props);
  return (
    <div>
    <h1>Sell Shinto Coins</h1>
    <h2>Get cold hard cash for your coins</h2>
    <Trade action='sell' numCoinsOwned={props.numCoinsOwned} buyprice={props.buyprice} transactioneer={props.transactioneer}/>
    </div>
  );
}

export default Sell;
