import { createStore } from "redux";
import rotateReducer from "reducers/rotateReducer";

function configureStore(state = { tasks: [], newtask:'' }) {
    return createStore(rotateReducer, state);
}

export default configureStore;
