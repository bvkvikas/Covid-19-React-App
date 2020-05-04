/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  GET_TOTAL_CASES_SUCCESS,
  GET_TOTAL_CASES,
  GET_COUNTRYWISE_CASES
} from './actionTypes';

function loadTotalCasesSuccess(response) {
  return { type: GET_TOTAL_CASES_SUCCESS, response };
}

export function getTotalCases() {
  return function (dispatch) {
    const response = axios.get('https://corona.lmao.ninja/v2/all');
    dispatch(loadTotalCasesSuccess(response));
  };
}
