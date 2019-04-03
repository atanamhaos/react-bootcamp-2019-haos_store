import {
    combineReducers,
    createStore,
} from 'redux';


// ACTIONS -- actions.js
export const updatetaskinput = (val) => ({
    type: 'UPDATE_TASK',                        // <-- action.type
    val,                                       // <-- action.task
});
export const createTask = (task) => ({
    type: 'CREATE_TASK',                        // <-- action.type
});

export const deleteTask = (idx) => ({
    type: 'DELETE_TASK',                        // <-- action.type
    idx                                         // <-- action.idx
});



// REDUCERS -- reducers.js
export const reducers = (state = initialState, action) => {
    switch (action.type) {
        
        case 'RETRIEVE_TASKS':
            return state;

        case 'CREATE_TASK':
            let taskToAdd = {title:state.newtask,completed:false,}
            let newState = {tasks:state.tasks.push(taskToAdd),newtask:''};
            return { 
                ...state,
                newtask:''
            };
        
        case 'UPDATE_TASK':
            // console.log('UPDATE_TASK');
            // console.log(state);
            // console.log(action);
            // console.log('UPDATE_TASK');
            return { 
                ...state,
                newtask:action.val
            };

        case 'DELETE_TASK':
            ;
            return Object.assign(
                [
                    ...state.slice(0, action.idx),
                    ...state.slice(action.idx+1),
                ]
            );


        default:
            return state;
    }
};


// INITIAL STATE w. Tasks
const initialStateSample = { 
    tasks: [{ title: 'first task' }, { title: 'second task' }],
    newtask:'',
};

// INITIAL STATE 
const initialState = { 
    tasks: [],newtask:'', 
};


// COMBINE ALL REDUCERS INTO 1 OBJECT
/*
export const reducers = combineReducers({
    tasks,
});
*/

// STORE -- store.js
export function configureStore(initialState = initialState) { // initialState = initialState | {}
    const store = createStore(
        reducers,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ 
         && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
    return store;
};

export const store = configureStore();