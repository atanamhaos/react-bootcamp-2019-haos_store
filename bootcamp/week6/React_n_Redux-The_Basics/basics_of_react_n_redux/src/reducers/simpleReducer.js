// file : `src/reducers/simpleReducer.js`

export default (state = {}, action) => {
    console.log('export default (state = {}, action) => {...}, state : ', state);
    console.log('export default (state = {}, action) => {...}, action : ', action);

    switch (action.type) {
        case 'SIMPLE_ACTION':
        console.log('case \'SIMPLE_ACTION\':, action.payload :', action.payload);       
            return {
                result: action.payload
            };
        default:
            return state;
    }
};
