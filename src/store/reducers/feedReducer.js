import { GET_TOTAL_CASES_SUCCESS } from '../actionTypes';

const initialState = { totalCases: {}, cases: [] };

const feedReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTAL_CASES_SUCCESS: {
      return { ...state, totalCases: action.response };
    }
    default: {
      return state;
    }
  }
};

export default feedReducers;
