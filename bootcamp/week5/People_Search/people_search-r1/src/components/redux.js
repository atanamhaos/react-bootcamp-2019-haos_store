import { createStore } from 'redux';

export const updateQuery = (queryString) => ({
    type: 'UPDATE_QUERY',
    queryString
});

// REDUCERS
export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_QUERY':
            let updatedStatesQueryString = { ...state };
            updatedStatesQueryString.queryString = action.queryString;

            return updatedStatesQueryString;
        default:
            return state;
    }
};

// Define Initial State 
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
    queryString: '',
};

// STORE
export function configureStore(initialState) {
    const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}

export const store = configureStore();
