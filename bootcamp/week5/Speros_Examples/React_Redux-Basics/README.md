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

* — MODIFY index.js — *

```
import { Provider } from 'react-redux' // add
import { store } from './redux'; // add

ReactDOM.render(
    <Provider store={store}> // add
        <App />
    </Provider>, // add
    document.getElementById('root')
);
```

* — ADD REDUX FILE redux.js (next to app.js) — *

```
import {
    createStore,
} from 'redux';

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

// INITIAL STATE 
let id=4;
const initialState = { 
    tasks:[
        { id:1, title: 'first task', completed: false }, 
        { id:2, title: 'second task', completed: true },
    ], 
    newTaskValue: "",
};

// STORE
export function configureStore(initialState = initialState) { // initialState = initialState | {}
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();
```

* typically
   * store is a single file
   * reducers are seperate files
      * reducers change state
   * actions are seperate files
