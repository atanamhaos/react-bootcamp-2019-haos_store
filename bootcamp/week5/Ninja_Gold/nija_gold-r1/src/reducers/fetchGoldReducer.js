import {
  FETCH_GOLD_BEGIN,
  FETCH_GOLD_SUCCESS,
  FETCH_GOLD_FAILURE
}
from "./../actions/fetchGold";

const initialState = {
  bank: 0,
  activities: [],
  loading: false,
  error: null
};

export default function fetchGoldReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_GOLD_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_GOLD_SUCCESS:
      let newbankbalance = state.bank + action.goldreturned.goldreturn;
      let newactivitieslist = state.activities;
      newactivitieslist.push(action.activity);
      return {
        ...state,
        loading: false,
        bank: newbankbalance,

      };

    case FETCH_GOLD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
