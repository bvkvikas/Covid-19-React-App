import {
  GET_TOTAL_CASES_SUCCESS,
  GET_COUNTRYWISE_CASES_SUCCESS,
  GET_COUNTRY_CASES_SUCCESS,
  GET_TIMELINE_SUCCESS
} from '../actionTypes';

const initialState = {
  totalCases: {},
  cases: [],
  selectedCountry: 'Global',
  timeline: []
};

export default function feedReducers(state = initialState, action) {
  switch (action.type) {
    case GET_TOTAL_CASES_SUCCESS: {
      return { ...state, totalCases: action.data };
    }
    case GET_COUNTRYWISE_CASES_SUCCESS: {
      return { ...state, cases: action.data };
    }
    case GET_COUNTRY_CASES_SUCCESS: {
      return {
        ...state,
        selectedCountry: action.country,
        totalCases: action.data
      };
    }
    case GET_TIMELINE_SUCCESS: {
      return { ...state, timeline: action.data };
    }
    default: {
      return state;
    }
  }
}
