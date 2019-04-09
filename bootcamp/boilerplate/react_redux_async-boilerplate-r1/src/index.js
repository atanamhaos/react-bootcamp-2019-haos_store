import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from './components/App';
import FetchList from "./components/FetchList";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

// function App() {
//   return (
//     <div className="App">
//       <FetchList />
//     </div>
//   );
// }


const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
