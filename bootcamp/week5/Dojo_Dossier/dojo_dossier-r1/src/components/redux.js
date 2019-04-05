import { createStore } from 'redux';

export const updateAddTabField = (fieldValue) => ({
    type: 'UPDATE_TAB_ADD_FIELD',
    fieldValue,
})

export const addTab = () => {
    return ({
    type: 'ADD_TAB',
})};

export const reducers = (state = initialState, action) => {
    console.log('reducers!');
    switch (action.type) {

        case 'UPDATE_TAB_ADD_FIELD':
            let updatedStatesAddTabField = { ...state };
            updatedStatesAddTabField.addTabField = action.fieldValue;

            return updatedStatesAddTabField;

        case 'ADD_TAB':
            console.log('dispatch ADD_TAB');
            console.log(state);
            
            return state;

        default:
            return state;
    }
};

// Define Initial State 
const initialState = {
    persons: [
        { id: '001', name: 'Melissa', listdata: {}, },
        { id: '002', name: 'Yoseph', listdata: {}, },
        { id: '003', name: 'Jeremy', listdata: {}, },
        { id: '004', name: 'Jeff', listdata: {}, },
        { id: '005', name: 'Caleb', listdata: {}, },
        { id: '006', name: 'Zachary', listdata: {}, },
        { id: '007', name: 'Swapna', listdata: {}, },
        { id: '008', name: 'Durga', listdata: {}, },
        { id: '009', name: 'Benjamin', listdata: {}, },
        { id: '010', name: 'Speros', listdata: {}, },
    ],
    addTabField: '',
};

// STORE
export function configureStore(initialState) {
    const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}

export const store = configureStore();
