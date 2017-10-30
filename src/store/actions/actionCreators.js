import * as types from './actionTypes';
import fetch from 'isomorphic-fetch';
import {forecastTTL, getCurrentDate} from '../../helpers/time';
import {getForecastURL} from '../../helpers/forecast/forecastURL';

export const selectCity = (cityName) => ({
    type: types.SELECT_CITY,
    city: cityName
});

const requestForecast = (cityName) => ({
    type: types.REQUEST_FORECAST,
    city: cityName
});

const receiveForecast = (cityName, forecastJSON) => ({
    type: types.RECEIVE_FORECAST,
    city: cityName,
    forecast: forecastJSON,
    receivedAt: getCurrentDate()
});

const errorFetch = (error, cityName) => ({
    type: types.ERROR_FETCH,
    error,
    city: cityName
});

const fetchForecast = (cityName) => (
    (dispatch) => {
        dispatch(requestForecast(cityName));

        return fetch(getForecastURL(cityName))
            .then(response => response.json())
            .then(json => dispatch(receiveForecast(cityName, json)))
            .catch(err => {
                dispatch(errorFetch(err, cityName));
            });
    }
);

const shouldFetchForecast = (state, cityName) => {
    const forecast = state.forecastByCity[cityName];

    if (!forecast) {
        return true;
    } else if (forecast.isFetching) {
        return false;
    } else  if (getCurrentDate() - forecast.receivedAt > forecastTTL) {
        return true;
    }
};

export const fetchForecastIfNeeded = (cityName) => (
    (dispatch, getState) => {
        if (shouldFetchForecast(getState(), cityName)) {
            return dispatch(fetchForecast(cityName));
        }
    }
);
