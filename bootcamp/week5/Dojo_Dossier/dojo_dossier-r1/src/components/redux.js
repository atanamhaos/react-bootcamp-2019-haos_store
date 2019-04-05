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
    return ({
    type: 'SELECT_TAB',
    selectedTabsId:id,
})};

export const updateAddDetailField = (fieldValue) => ({
    type: 'UPDATE_DETAIL_ADD_FIELD',
    fieldValue,
});

export const addDetail = () => {
    return ({
    type: 'ADD_DETAIL',
})};

export const reducers = (state = initialState, action) => {
    switch (action.type) {

        case 'UPDATE_TAB_ADD_FIELD':
            let updatedStatesAddTabField = { ...state };
            updatedStatesAddTabField.addTabField = action.fieldValue;

            return updatedStatesAddTabField;

        case 'ADD_TAB':
            let addTabReducersNewState = {...state};
            let nextId = addTabReducersNewState.persons.length + 1;
            let newPerson = {id:nextId, name:addTabReducersNewState.addTabField, listdata:[]};
            addTabReducersNewState.persons.push(newPerson);
            addTabReducersNewState.addTabField = '';
            return addTabReducersNewState;

        case 'SELECT_TAB':
            let selectTabsNewState = {...state};
            selectTabsNewState.selectedTab = action.selectedTabsId;
            // Reset the detail field if user switched to different tab.
            if(selectTabsNewState.selectedTab !== state.selectedTab){
                selectTabsNewState.addDetailField = '';
            }
            return selectTabsNewState;

        case 'UPDATE_DETAIL_ADD_FIELD':
            let updatedStatesAddDetailField = { ...state };
            updatedStatesAddDetailField.addDetailField = action.fieldValue;
            return updatedStatesAddDetailField;

        case 'ADD_DETAIL':
            let addDetailReducersNewState = {...state};
            
            // ToDo : Assign these to variables so it is more understandable.
            // This gets the person/tab's list data.
            //console.log(addDetailReducersNewState.persons[parseInt(addDetailReducersNewState.selectedTab,10)-1].listdata);
            // This gets the field value entered.
            //console.log(addDetailReducersNewState.addDetailField);            
            
            // This puts the two above together.
            addDetailReducersNewState.persons[parseInt(addDetailReducersNewState.selectedTab,10)-1].listdata.push(addDetailReducersNewState.addDetailField);
            // Reset the field.
            addDetailReducersNewState.addDetailField = '';
            
            return addDetailReducersNewState;
        
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
    addDetailField: '',
    selectedTab:'000',
};

// STORE
export function configureStore(initialState) {
    const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}

export const store = configureStore();
