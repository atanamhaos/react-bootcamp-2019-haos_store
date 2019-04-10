import { combineReducers } from 'redux';

import button from './buttonReducer';
import field from './fieldReducer';

export default combineReducers({
  button,
  field,
});
