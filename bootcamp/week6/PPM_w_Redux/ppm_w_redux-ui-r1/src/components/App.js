import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // npm install react-router react-router-dom
//import ReactDOM from "react-dom";
//import { createStore, applyMiddleware } from "redux";
//import { Provider } from "react-redux";
//import thunk from "redux-thunk";

import FetchProducts from "./FetchProducts";
import Home from "./Home";
import NavBar from "./NavBar";
import CreateProduct from "./CreateProduct";
//import FetchList from "./FetchList";
//import rootReducer from "./rootReducer";



function App() {
  return (
    <div className="App">
     <Router>
     <NavBar/>
     <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/products" component={FetchProducts} />
      <Route exact path="/new" component={CreateProduct} />
     
     </Switch>
     </Router>
    </div>
  );
}

export default App;