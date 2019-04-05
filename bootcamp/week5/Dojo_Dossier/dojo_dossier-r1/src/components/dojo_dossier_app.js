import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"; // npm install react-router react-router-dom

import Tabs from './tabs';
import Details from './details';

class PeopleSearchApp extends React.Component {
  
  render() {
    return (
      <Router>
        <h1>Dojo Dossier</h1>
        <Tabs/>
        <Details/>
     </Router>
    );
  }
}

export default PeopleSearchApp;
