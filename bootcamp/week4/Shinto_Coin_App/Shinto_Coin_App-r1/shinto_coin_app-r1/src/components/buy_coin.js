import React from "react";
import Trade from "./trade_coin.js"

function Buy(props) {
  
  
  //console.log(props);
  //props.transactioneer;
  return (
    <div>
    <h1>Buy ShinTo Coins</h1>
    <h2>Spend a little money, Get a lot of coin!</h2>
    <Trade action='buy' props={props} numCoinsOwned={props.numCoinsOwned} sellprice={props.sellprice} transactioneer={props.transactioneer}/>
    </div>
  );
}

export default Buy;