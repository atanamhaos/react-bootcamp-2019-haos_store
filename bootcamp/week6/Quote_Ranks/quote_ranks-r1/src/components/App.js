import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import AddAuthor from "./AddAuthor";
import AddQuote from "./AddQuote";
import VoteQuote from "./VoteQuote";

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/new' component={AddAuthor}/>
      <Route path='/write/*' component={AddQuote}/>
      <Route path='/quotes/*' component={VoteQuote}/>
    </Switch>
    </Router>
    </div>
  );
}

export default App;