/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  GET_TOTAL_CASES_SUCCESS,
  GET_COUNTRYWISE_CASES_SUCCESS
} from './actionTypes';

function loadTotalCasesSuccess(response) {
  return { type: GET_TOTAL_CASES_SUCCESS, response };
}

function loadCountrywiseCasesSuccess(response) {
  return { type: GET_COUNTRYWISE_CASES_SUCCESS, response };
}

export const getTotalCases = () => {
  return async dispatch => {
    const response = await axios.get('https://corona.lmao.ninja/v2/all');
    dispatch(loadTotalCasesSuccess(response));
  };
};

export function getCountrywiseCases() {
  return async dispatch => {
    const response = await axios.get(
      'https://corona.lmao.ninja/v2/countries?sort=cases'
    );
    dispatch(loadCountrywiseCasesSuccess(response));
  };
}
