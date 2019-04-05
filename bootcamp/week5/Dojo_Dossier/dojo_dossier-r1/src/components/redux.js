import { createStore } from 'redux';

export const updateAddTabField = (fieldValue) => ({
    type: 'UPDATE_TAB_ADD_FIELD',
    fieldValue,
});

export const addTab = () => {
    return ({
    type: 'ADD_TAB',
})};

export const selectTab = ({id}) => {
    //console.log('selectTab(...) selectedTabsId : ',id);
    return ({
    type: 'SELECT_TAB',
    selectedTabsId:id,
})};

export const reducers = (state = initialState, action) => {
    //console.log('reducers!');
    switch (action.type) {

        case 'UPDATE_TAB_ADD_FIELD':
            let updatedStatesAddTabField = { ...state };
            updatedStatesAddTabField.addTabField = action.fieldValue;

            return updatedStatesAddTabField;

        case 'ADD_TAB':
            //console.log('dispatch ADD_TAB');
            //console.log(state);
            let addTabReducersNewState = {...state};
            let nextId = addTabReducersNewState.persons.length + 1;
            let newPerson = {id:nextId, name:addTabReducersNewState.addTabField, listdata:{}};
            addTabReducersNewState.persons.push(newPerson);
            addTabReducersNewState.addTabField = '';
            return addTabReducersNewState;

        case 'SELECT_TAB':
            //console.log('SELECT_TAB, selectedTabsId : ',action.selectedTabsId);
            let selectTabsNewState = {...state};
            selectTabsNewState.selectedTab = action.selectedTabsId;
            return selectTabsNewState;
        
        default:
            console.log('hit default!');
            return state;
    }
};

// Define Initial State 
const initialState = {
    persons: [
        { id: '001', name: 'Melissa', listdata: ['feline husbandry'], },
        { id: '002', name: 'Yoseph', listdata: [], },
        { id: '003', name: 'Jeremy', listdata: ['testing code'], },
        { id: '004', name: 'Jeff', listdata: ['child rearing', ' gameing', 'foodie'], },
        { id: '005', name: 'Caleb', listdata: ['feline husbandry', ' inovation', ' comedy'], },
        { id: '006', name: 'Zachary', listdata: ['baseball', ' frugality'], },
        { id: '007', name: 'Swapna', listdata: ['child rearing'], },
        { id: '008', name: 'Durga', listdata: ['child rearing, child creation, electronics'], },
        { id: '009', name: 'Benjamin', listdata: ['creation', 'electronics', 'hacking',], },
        { id: '010', name: 'Speros', listdata: ['teaching', 'coding', 'entrepreneurship', 'hiking',], },
    ],
    addTabField: '',
    selectedTab:'000',
};
// STORE
export function configureStore(initialState) {
    const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}

export const store = configureStore();
