*- This was shared as a starting point for creating a simple ToDo app that uses redux.*

* Speros Misirlakis [8:29 AM]

*— CREATE react-app —*

```
create-react-app new-react-redux-project
cd new-react-redux-project
```

* — INSTALL redux && react-redux — *

```
npm install --save redux react-redux
```

## Script(s)

```
npx create-react-app new-react-redux-project
cd new-react-redux-project
npm install --save redux react-redux
```

1. Replace `index.js` w. code below.

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux';

import App from './app.js';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
```

1. Add `redux.js` w. below code to same directory as `index.js`.

```
import { createStore } from 'redux';

// ACTIONS
export const createTask = () => ({
    type: 'CREATE_TASK',
});

// REDUCERS
export const reducers = (state = initialState, action) => {
    switch (action.type) {

        case 'CREATE_TASK':
            console.log(" -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --")
            console.log(" -- REDUCER -- CREATE_TASK | state: ", state)
            console.log(" -- REDUCER -- CREATE_TASK | action", action)
            id++;
            return Object.assign(
                {},
                state,
                { 
                    tasks: [
                        ...state.tasks, 
                        { id, title: state.newTaskValue, completed: false }
                    ],
                    newTaskValue: ""
                }
            );

        default:
            return state;
    }
};

// Define Initial State 
const initialState = { 
    tasks:[
        { id:1, title: 'first task', completed: false }, 
        { id:2, title: 'second task', completed: true },
    ], 
    newTaskValue: "",
};

let id=3;
// STORE
export function configureStore(initialState) { // initialState = initialState | {}
    const store = createStore(reducers, initialState);
    return store;
}

export const store = configureStore();
//console.log(store);
```

* NOTE - typically
   * store is a single file
   * reducers are seperate files
      * reducers change state
   * actions are seperate files

1. Replace file `index.html` in `public` folder w. code below. The create-react-app created `index.html` file.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```
1. rename `App.js` to `app.js` and replace code w. code below.

```
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="app">
      </div>
    );
  }
}

export default App;

```


1. Delete `manifest.json` and `favicon.ico` files from `/public` folder.
1. Delete `App.css`, `App.test.js`, `index.css`, logo.svg and `serviceWorker.js` from root of project.
