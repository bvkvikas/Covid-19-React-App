/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import _ from 'lodash';
import {
  GET_TOTAL_CASES_SUCCESS,
  GET_COUNTRYWISE_CASES_SUCCESS,
  GET_COUNTRY_CASES_SUCCESS,
  GET_TIMELINE_SUCCESS
} from './actionTypes';

function loadTotalCasesSuccess(response) {
  return { type: GET_TOTAL_CASES_SUCCESS, data: response };
}

function loadCountrywiseCasesSuccess(response) {
  return { type: GET_COUNTRYWISE_CASES_SUCCESS, data: response };
}

function loadSpecificCountryCasesSuccess(response, country) {
  return { type: GET_COUNTRY_CASES_SUCCESS, country, data: response };
}

function loadTimeLineSuccess(response) {
  return { type: GET_TIMELINE_SUCCESS, data: response };
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

export const getSpecificCountryCases = country => {
  return async dispatch => {
    const response = await axios.get(
      `https://corona.lmao.ninja/v2/countries/${country}?strict=true`
    );

    const {
      data: { cases, active, deaths, updated, recovered }
    } = response;

    dispatch(
      loadSpecificCountryCasesSuccess(
        {
          cases,
          active,
          deaths,
          recovered,
          updated: new Date(updated).toString()
        },
        country
      )
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

export const getTimeLine = country => {
  let url = 'https://covid19.mathdro.id/api/daily';
  if (country !== 'Global') {
    url = `https://corona.lmao.ninja/v2/historical/${country}?lastdays=150`;
  }
  return async dispatch => {
    const response = await axios.get(url);

    if (country !== 'Global') {
      const { timeline } = response.data;
      const { cases, deaths, recovered } = timeline;
      const modifiedData = [];
      _.forOwn(cases, function (num, key) {
        const reportDate = {
          reportDate: key,
          confirmed: num
        };
        modifiedData.push(reportDate);
      });
      _.forOwn(deaths, function (num, key) {
        const json = _.find(modifiedData, { reportDate: key });
        json.Deaths = num;
      });
      _.forOwn(recovered, function (num, key) {
        const json = _.find(modifiedData, { reportDate: key });
        json.Recovered = num;
      });
      dispatch(
        loadTimeLineSuccess(
          modifiedData.map(({ reportDate, Deaths, confirmed, Recovered }) => ({
            confirmed,
            deaths: Deaths,
            date: reportDate,
            recovered: Recovered
          }))
        )
      );
    } else {
      dispatch(
        loadTimeLineSuccess(
          response.data.map(({ reportDate, deaths, confirmed, recovered }) => ({
            confirmed: confirmed.total,
            deaths: deaths.total,
            date: reportDate,
            decovered: recovered.total
          }))
        )
      );
    }
  };
};
