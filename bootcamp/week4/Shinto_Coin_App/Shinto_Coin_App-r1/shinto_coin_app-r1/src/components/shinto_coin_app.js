import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./header";
import Home from "./home_page";
import Mine from "./mine_coin";
import Buy from "./buy_coin";
import Sell from "./sell_coin";
import Ledger from "./browse_ledger";
import Footer from "./footer";


const contentStyle = {
  padding: '20px 20px 20px 100px',
  fontSize: "18px",
};

class ShintoCoinApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numCoinsOwned: 0,
      numDollars: 0,
      transactions: [],
      buyprice: 1,
      sellprice: 1,
    };
  }

  transactioneer = (event, type, change) => {
    
    let newState = Object.assign(this.state);

    /* Update the number of coins held based on transaction. */
    newState.numCoinsOwned = newState.numCoinsOwned + change;

    /* Adjust users dollar balance. */
    newState.numDollars = newState.numDollars - (change * newState.buyprice);

    /* Add transaction to ledger. */
    newState.transactions.push({ transId: Date.now(), type: type, amount: change, value: this.state.sellprice });

    /* Adjust value of ShintoCoin based on amount of coin bought or sold. */
    newState.buyprice = newState.buyprice + change;
    newState.sellprice = newState.sellprice + change;

    this.setState(newState);
  }

  render() {
    console.log(this.state.transactions);
    return (
      <Router>
        <div>
        <Header/>
          <div style={contentStyle}>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/mine" render={(props) =><Mine {...props} data={this.state} transactioneer={this.transactioneer} />}/>
            <Route path="/buy" render={(props) =><Buy {...props} data={this.state} transactioneer={this.transactioneer} />}/>
            <Route path="/sell" render={(props) =><Sell {...props} data={this.state} transactioneer={this.transactioneer} />}/>
            <Route path="/ledger" render={(props) =><Ledger {...props} data={this.state} transactioneer={this.transactioneer} />}/>
          </div>
          </div>
        <Footer/>
      </Router>
    );
  }
}

export default ShintoCoinApp;
