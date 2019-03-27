import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./home_page";
import Mine from "./mine_coin";
import Buy from "./buy_coin";
import Sell from "./sell_coin";
import Browse from "./browse_ledger";



class ShintoCoinApp extends React.Component {
  render(){
    
  return (
    <Router>
      <div>
        <img src="./img/applogo.png" alt="logo"/>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/mine">Mine Coins</Link></li>
          <li><Link to="/buy">Buy Coins</Link></li>
          <li><Link to="/sell">Sell Coins</Link></li>
          <li><Link to="/ledger">Browse Ledger</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/mine" component={Mine} />
        <Route path="/buy" component={Buy} />
        <Route path="/sell" component={Sell} />
        <Route path="/ledger" component={Browse} />
      </div>
    </Router>
  );
}
  }

export default ShintoCoinApp;
