import React from "react";

function Transaction(props) {
  
  /* Get requested transaction from URL */
  let transactionsNum = window.location.pathname.split("/:").pop();
  
  /* Get reciept of transaction from transaction record. */
  let { transactions } = props.data;
  let recieptData = transactions.find(transaction => {
    return parseInt(transaction.transId, 10) === parseInt(transactionsNum, 10);
  });

  /* Return reciept */
  return (
    <div>
      <h1>Ledger Transaction Details</h1>
      <p>Detailed view of a transaction from the ledger.</p>
      <p>Transaction Recorded : {Date(recieptData.transId)}</p>
      <p>Transaction Type : {recieptData.type}</p>
      <p>Transaction Amount : {recieptData.amount}</p>
      <p>ShintoCoin Value at Transaction : {recieptData.value}</p>
    </div>
  );
}

export default Transaction;
