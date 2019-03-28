import React from "react";

function Ledger(props) {
  console.log(props.data.transactions);
  
  return (
    <div>
    <h1>Browse the Ledger</h1>
      <h2>View all the ShintoCoin Transactions you have enjoyed.</h2>
    <p></p>
    </div>
  );
}

export default Ledger;
