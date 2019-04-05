import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // npm install react-router react-router-dom

//import Search from './search';
import Tabs from './tabs';
//import Details from './details';

class PeopleSearchApp extends React.Component {
  
  render() {
//          <Route exact path="/" component={Search} />
    return (
      <Router>
        <h1>Dojo Dossier</h1>
        <Tabs/>
        <Switch>
        
        </Switch>
     </Router>
    );
  }
}

 //         <Route exact path="/:id" component={Details} />
export default PeopleSearchApp;
