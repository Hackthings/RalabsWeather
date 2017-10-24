import {
    REQUEST_FORECAST,
    RECEIVE_FORECAST,
    ERROR_FETCH
} from '../actions/actionTypes';
import _ from 'lodash';

const forecast = (state = {
    isFetching: false,
    forecast: {},
    error: null
}, action) => {
    switch (action.type) {
        case ERROR_FETCH:
            return _.assign({}, state, {
                isFetching: false,
                error: action.error
            });
        case REQUEST_FORECAST:
            return _.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_FORECAST:
            return _.assign({}, state, {
                isFetching: false,
                error: null,
                forecast: action.forecast,
                receivedAt: action.receivedAt
            });
        default:
            return state;
    }
};

const forecastByCity = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_FORECAST:
        case RECEIVE_FORECAST:
        case ERROR_FETCH:
            return _.assign({}, state, {
                [action.city]: forecast(state[action.city], action)
            });
        default:
            return state;
    }
};

export default forecastByCity;
