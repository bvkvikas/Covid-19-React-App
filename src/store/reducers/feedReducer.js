import {
  GET_TOTAL_CASES_SUCCESS,
  GET_COUNTRYWISE_CASES_SUCCESS
} from '../actionTypes';

const initialState = { totalCases: {}, cases: [] };

export default function feedReducers(state = initialState, action) {
  switch (action.type) {
    case GET_TOTAL_CASES_SUCCESS: {
      return { ...state, totalCases: action.response.data };
    }
    case GET_COUNTRYWISE_CASES_SUCCESS: {
      return { ...state, cases: action.response.data };
    }
    default: {
      return state;
    }
  }
}
