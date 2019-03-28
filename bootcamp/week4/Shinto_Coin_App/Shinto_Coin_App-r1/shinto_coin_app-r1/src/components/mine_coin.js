import React from "react";
import Trade from "./trade_coin.js"

function Mine(props) {

  return (
    <div>
      <h1>Mine Shinto Coins</h1>
      <h2>Your hard work can earn you some softcoin.</h2>
      <Trade action='mine' props={props.data} transactioneer={props.transactioneer}/>
    </div>
  );
}

export default Mine;
