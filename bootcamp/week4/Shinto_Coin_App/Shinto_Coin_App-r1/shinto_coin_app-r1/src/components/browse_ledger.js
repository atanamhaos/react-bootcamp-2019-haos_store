import React from "react";
import {  Link } from "react-router-dom";


const LedgerTable = ({ledger}) => {
  //console.log('This is LedgerTable');
  //console.log('This is LedgerTable');

  //[];
  //returnThing.push(`<table style="width:50%"><tr><th>Action</th><th>Amount</th><th>Value</th><th>Value</th></tr>`);

  let returnThing = ledger.map(
    (transaction, index)=>{
      return (
         <tr key={transaction.transId}><td>{transaction.type}</td><td>{transaction.amount}</td><td>{transaction.value}</td><td><button><Link to={`/transaction/:${transaction.transId}`}>Details</Link></button></td></tr>
        );
    });



//console.log('returnThing');
//console.log(returnThing);

/*
{transId: 1553785405829, type: "buy", amount: 1, value: 1}
browse_ledger.js:8 {transId: 1553785406004, type: "buy", amount: 1, value: 2}
browse_ledger.js:8 {transId: 1553785406190, type: "buy", amount: 1, value: 3}
browse_ledger.js:8 {transId: 1553785406343, type: "buy", amount: 1, value: 4}
*/

  
  //ledgerObject.map(
  //let returnTable = ledgerObject.map((transaction, index) =>{console.log('hi')});

  /*
        console.log(transaction);
        return (
          <div>transaction</div>
          )
      });
  */

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
  //console.log(props.data.transactions);

  return (
    <div>
    <h1>Browse the Ledger</h1>
      <h2>View all the ShintoCoin Transactions you have enjoyed.</h2>
      <LedgerTable ledger={props.data.transactions}/>
    </div>
  );
}

export default Ledger;
