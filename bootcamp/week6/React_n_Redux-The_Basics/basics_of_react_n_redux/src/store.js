// file : `src/store.js`
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

// Note - With initialState
export default function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}


// // file : `src/store.js`
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import rootReducer from './reducers/rootReducer';

// // Note - No initialState
// export default function configureStore() {
//     return createStore(
//         rootReducer,
//         applyMiddleware(thunk)
//     );
// }
