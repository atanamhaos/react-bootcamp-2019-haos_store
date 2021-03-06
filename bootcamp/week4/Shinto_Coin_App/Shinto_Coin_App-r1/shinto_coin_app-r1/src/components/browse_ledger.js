import React from "react";
import {  Link } from "react-router-dom";


const LedgerTable = ({ledger}) => {

  let returnThing = ledger.map(
    (transaction, index)=>{
      return (
         <tr key={transaction.transId}><td>{transaction.type}</td><td>{transaction.amount}</td><td>{transaction.value}</td><td><button><Link to={`/transaction/:${transaction.transId}`}>Details</Link></button></td></tr>
        );
    });

  return (
    <div>
    <table>
    <tbody>
    <tr><th>Action</th><th>Amount</th><th>Value</th><th>buttons</th></tr>
    {returnThing}
    </tbody>
    </table>
    </div>
  )
}

function Ledger(props) {

  return (
    <div>
    <h1>Browse the Ledger</h1>
      <h2>View all the ShintoCoin Transactions you have enjoyed.</h2>
      <LedgerTable ledger={props.data.transactions}/>
    </div>
  );
}

export default Ledger;
