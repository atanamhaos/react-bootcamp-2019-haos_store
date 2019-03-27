import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function BasicExample() {
  return (
    <Router>
      <div>
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

function Home() {
  return (
    <div>
      <h2>ShintoCoin</h2>
      <p1>Welcome to ShintoCoin! ShintoCoins are coins made by solving algorithms. To get started, head over to the mining area or break out your wallet and buy some coins!</p1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}



function Mine() {
  return (
    <div>
      <h2>Work hard and get coins!</h2>
    </div>
  );
}



function Buy() {
  return (
    <div>
      <h2>Spend a little money, Get a lot of coin!</h2>
    </div>
  );
}



function Sell() {
  return (
    <div>
      <h2>Get cold hard cash for your coins</h2>
    </div>
  );
}



function Browse() {
  return (
    <div>
      <h2>View all the ShintoCoin Transactions you have enjoyed.</h2>
    </div>
  );
}








function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}






function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

export default BasicExample;