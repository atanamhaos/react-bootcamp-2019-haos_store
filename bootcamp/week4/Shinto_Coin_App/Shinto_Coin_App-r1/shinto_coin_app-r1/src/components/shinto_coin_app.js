import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./home_page";
import Mine from "./mine_coin";
import Buy from "./buy_coin";
import Sell from "./sell_coin";
import Browse from "./browse_ledger";



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
    event.preventDefault();
    // console.log(`transactioneer`);
    // console.log(`transaction type : ${type}`);
    // console.log(`transaction change : ${change}`);

    
    console.log(`transactioneer`);
    
    let transaction = {type:'',amount:'',value:''};
    
    switch (type) {
      case 'buy':
        // code block
        console.log(`buying`);
        transaction.type='b';
        transaction.amount=change;
        transaction.value=this.state.sellprice;
        break;
      case 'mine':
        // code block
        console.log(`buying`);
        transaction.type='m';
        transaction.amount=change;
        transaction.value=this.state.sellprice;
        break;
      case 'sell':
        // code block
        console.log(`buying`);
        transaction.type='s';
        transaction.amount=(0-change);
        transaction.value=this.state.sellprice;
        break;
      default:
    }
   
    console.log('* * * * *');  
    console.log(transaction);  
    console.log('* * * * *');
    this.state.transactions.push(transaction);
    this.render();
  }

  render() {

    console.log(this.state.transactions);
    return (
      <Router>
      <div>
        <img src="./img/applogo.png" alt="logo"/>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/buy">Buy Coins</Link></li>
          <li><Link to="/mine">Mine Coins</Link></li>
          <li><Link to="/sell">Sell Coins</Link></li>
          <li><Link to="/ledger">Browse Ledger</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route
        path="/mine"
        render={(props) =><Mine {...props} numCoinsOwned={this.state.numCoinsOwned} transactioneer={this.transactioneer} />      }    
        />
        <Route 
        path="/buy" 
        render={(props) =><Buy {...props} sellprice={this.state.sellprice} numCoinsOwned={this.state.numCoinsOwned} transactioneer={this.transactioneer} />      }    
        />
        <Route
        path="/sell"
        render={(props) =><Sell {...props} buyprice={this.state.buyprice} numCoinsOwned={this.state.numCoinsOwned} transactioneer={this.transactioneer} />      }    
        />
        <Route path="/ledger" component={Browse} />
      </div>
    </Router>
    );
  }
}
/*
        <Route path="/buy" component={Buy}/>
*/
export default ShintoCoinApp;
