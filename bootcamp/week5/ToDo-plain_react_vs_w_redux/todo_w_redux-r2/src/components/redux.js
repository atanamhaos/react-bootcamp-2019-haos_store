import { createStore } from 'redux';

// ACTIONS
export const createTask = () => ({
    type: 'CREATE_TASK',
});

export const updateNewTask = (fieldVal) => ({
    type: 'UPDATE_NEW_TASK',
    fieldVal,
});

export const toggleTask = (idToToggle) => ({
    type: 'TOGGLE_TASK',
    idToToggle,
});

export const deleteTask = (idToDelete) => ({
    type: 'DELETE_TASK',
    idToDelete,
});

// REDUCERS
export const reducers = (state = initialState, action) => {

    switch (action.type) {
        case 'CREATE_TASK':
            let createTaskState = { ...state };
            createTaskState.newTaskValue = '';
            createTaskState.nextId = state.nextId + 1;
            
            let createTaskTaskList = [];
            for (let i = 0; i < state.tasks.length; i++) {
              createTaskTaskList.push(state.tasks[i]);
            }
            createTaskTaskList.push({ id: createTaskState.nextId, title: state.newTaskValue, completed: false });
            
            createTaskState.tasks = createTaskTaskList;

            return createTaskState;

        case 'UPDATE_NEW_TASK':
            let updateNewTaskState = { ...state };
            updateNewTaskState.newTaskValue = action.fieldVal;

            return updateNewTaskState;

        case 'TOGGLE_TASK':
            const tasks = state.tasks.map((task) => {
                if (task.id === action.idToToggle) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });

            return {
                ...state,
                tasks
            }

        case 'DELETE_TASK':
            let newTaskList = [];

            for (let i = 0; i < state.tasks.length; i++) {
                if (action.idToDelete !== state.tasks[i].id) {
                    newTaskList.push(state.tasks[i]);
                }
            }

            let deleteTaskState = { ...state };
            deleteTaskState.tasks = newTaskList;

            return deleteTaskState;

        default:
            return state;
    }
};

// Define Initial State 
const initialState = {
    tasks: [],
    newTaskValue: "",
    nextId: 1,
};

// STORE
export function configureStore(initialState = initialState) {
    const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}

export const store = configureStore();
