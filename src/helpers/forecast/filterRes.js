import {night, morning, day, evening} from './consts/forecastTime';
import _ from 'lodash';
import {getDateTime} from '../time';

const getDayForecast = (forecasts, daysToAdd) => (
    _.filter(forecasts, (forecast) => {
        switch (forecast.datetime) {
            case getDateTime(night, daysToAdd):
            case getDateTime(morning, daysToAdd):
            case getDateTime(day, daysToAdd):
            case getDateTime(evening, daysToAdd):
                return forecast;
        }
    })
);

//Weatherbit.io provides forecast for 48 hours from present moment, not full 2 days
//so clarify if forecast should contain present day
const clarifyForecast = (data) => {
    const today = getDayForecast(data);

    return today.length > 0 ?
        [today, getDayForecast(data, 1)] :
        [getDayForecast(data, 1), getDayForecast(data, 2)];
};

export const getForecast = (forecast) => (
    _.assign({}, forecast, {
        data: clarifyForecast(forecast.data)
    })
);
