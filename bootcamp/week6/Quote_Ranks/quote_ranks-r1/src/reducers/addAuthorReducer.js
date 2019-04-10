import { ADD_AUTHOR } from "./../actions/addAuthorAction";
import { initialState } from "./../state/initialState";

export default function addAuthorReducer(
    state = initialState,
    action) {
    console.log('addAuthorReducer');
    switch (action.type) {
        case ADD_AUTHOR:
            return state;
        default:
            return state;
    }
}
