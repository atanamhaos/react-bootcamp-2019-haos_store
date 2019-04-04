import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // npm install react-router react-router-dom

import Search from './search';
import Details from './details';

class PeopleSearchApp extends React.Component {
  
  render() {
    return (
      <Router>
        <h1>People Search</h1>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/:id" component={Details} />
        </Switch>
     </Router>
    );
  }
}

export default PeopleSearchApp;
