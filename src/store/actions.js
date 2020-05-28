/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  GET_TOTAL_CASES_SUCCESS,
  GET_COUNTRYWISE_CASES_SUCCESS,
  GET_COUNTRY_CASES_SUCCESS
} from './actionTypes';

function loadTotalCasesSuccess(response) {
  return { type: GET_TOTAL_CASES_SUCCESS, data: response };
}

function loadCountrywiseCasesSuccess(response) {
  return { type: GET_COUNTRYWISE_CASES_SUCCESS, data: response };
}

function loadSpecificCountryCasesSuccess(response) {
  return { type: GET_COUNTRY_CASES_SUCCESS, response };
}

export const getTotalCases = () => {
  return async dispatch => {
    const response = await axios.get('https://corona.lmao.ninja/v2/all');
    const {
      data: { cases, active, deaths, updated, recovered }
    } = response;

    dispatch(
      loadTotalCasesSuccess({
        cases,
        active,
        deaths,
        recovered,
        updated: new Date(updated).toString()
      })
    );
  };
};

export function getCountrywiseCases() {
  return async dispatch => {
    const response = await axios.get(
      'https://corona.lmao.ninja/v2/countries?sort=cases'
    );

    dispatch(
      loadCountrywiseCasesSuccess(
        response.data.map(
          ({
            country,
            cases,
            countryInfo,
            active,
            deaths,
            updated,
            recovered
          }) => ({
            countryName: country,
            cases,
            flag: countryInfo.flag,
            active,
            recovered,
            deaths,
            lastUpdated: new Date(updated).toString()
          })
        )
      )
    );
  };
}

export const getSpecificCountryCases = country => {
  return async dispatch => {
    const response = await axios.get(
      `https://corona.lmao.ninja/v2/countries/:${country}?yesterday=true&strict=true`
    );
    dispatch(loadSpecificCountryCasesSuccess(response));
  };
};
