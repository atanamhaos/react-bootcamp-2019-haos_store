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
