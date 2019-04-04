import { createStore } from 'redux';

// ACTION
export const viewId = () => ({
    type: 'VIEW_PERSON_BY_ID',
});

export const updateQuery = (queryString) => ({
    type: 'UPDATE_QUERY',
    queryString
});

export const queryList = () => ({
    type: 'QUERY_LIST',
});

// REDUCERS
export const reducers = (state = initialState, action) => {
    //console.log(state);
    switch (action.type) {

        case 'VIEW_PERSON_BY_ID':
            console.log('');
            return state;

        case 'UPDATE_QUERY':
            console.log('UPDATE_QUERY');
            console.log('state :', state);
            console.log('action :', action);
            let updatedStatesQueryString = { ...state };
            updatedStatesQueryString.queryString = action.queryString;

            //return updateNewTaskState;
            return updatedStatesQueryString;

        case 'QUERY_LIST':
            console.log('user needs to click one of the choices!!');
            return state;

        default:
            console.log('Default action');
            console.log('state :', state);
            console.log('action :', action);
            return state;
    }
};

// Define Initial State 
//        {name :'',city :'',industry :'',hobbies :'',email :''}, 
const initialState = {
    persons: [
        { id: '001', name: 'Melissa Schultz', city: 'Glendale', industry: 'Software Engineer', hobbies: 'feline husbandry', email: '@northwesternmutal.com' },
        { id: '002', name: 'Yoseph Sarsour', city: 'Metro Milwaukee', industry: 'Engineer', hobies: 'not known', email: '@northwesternmutal.com' },
        { id: '003', name: 'Jeremy Whiting', city: 'Metro Milwaukee', industry: 'Software Testing Engineer', hobbies: 'testing code', email: '@northwesternmutal.com' },
        { id: '004', name: 'Jeff Grygiel', city: 'Germantown', industry: 'Software Engineer', hobbies: 'child rearing, gameing, foodie', email: '@northwesternmutal.com' },
        { id: '005', name: 'Caleb Ugent', city: 'Franklin', industry: 'Software Engineer', hobbies: 'feline husbandry, inovation, comedy', email: '@northwesternmutal.com' },
        { id: '006', name: 'Zachary Koch', city: 'Franklin', industry: 'Software Engineer', hobbies: 'baseball, frugality', email: '@northwesternmutal.com' },
        { id: '007', name: 'Swapna Ramadas Shanthi', city: 'Metro Milwaukee', industry: 'Software Engineer', hobbies: 'child rearing', email: '@northwesternmutal.com' },
        { id: '008', name: 'Durga Achanta', city: 'Brookfield', industry: 'Software Scientist/Engineer', hobbies: 'child rearing, child creation, electronics', email: '@northwesternmutal.com' },
        { id: '009', name: 'Benjamin Haos', city: 'Milwaukee, Harambre', industry: 'Software Scientist', hobbies: 'creation', email: '@northwesternmutal.com' },
        { id: '010', name: 'Speros Misirlakis', city: 'Arizona City', industry: 'IT Instruction', hobbies: 'teaching, coding', email: '@codingdojo' },
    ],
    queryHits:[],
    queryString: '',
};

// STORE
export function configureStore(initialState) { // initialState = initialState | {}
    const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}

export const store = configureStore();

//console.log(store);
