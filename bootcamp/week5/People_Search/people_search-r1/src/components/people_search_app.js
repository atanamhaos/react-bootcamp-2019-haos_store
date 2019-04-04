import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // npm install react-router react-router-dom
import Search from './search'
import Details from './details'

class PeopleSearchApp extends React.Component {
  
  render() {
    return (
      <Router>
      <div className="peoplesearchapp">
      <h1>People Search</h1>
        <div id='appinner'>
          <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/:id" component={Details} />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}
/*
          <Route exact path="/products" render={(props) =><List {...props} products={this.state}/>}/>
          <Route exact path="/products/edit/:id" component={Create} />
          
          <Route path="/products/new" render={(props) =><Create {...props} formConfig={this.formConfig} formIsInvalid={this.formIsInvalid} callback={this.add_product}/>}/>
*/
export default PeopleSearchApp;

