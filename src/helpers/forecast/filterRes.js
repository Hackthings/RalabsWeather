import {night, morning, day, evening} from './consts/forecastTime';
import _ from 'lodash';
import {getDateTime, displayDate} from '../time';

//filter all forecasts in order to get day forecast
const filterForecast = (forecasts, daysToAdd) => (
    _.filter(forecasts, (forecast) => {
        switch (forecast.datetime) {
            case getDateTime(night, daysToAdd):
            case getDateTime(morning, daysToAdd):
            case getDateTime(day, daysToAdd):
            case getDateTime(evening, daysToAdd):
                return true;
            default:
                return false;
        }
    })
);

//get daytime value in order to display it for each daytime forecast
const getDaytime = (datetime) => {
    const time = datetime.slice(-2);

    switch (time) {
        case night:
            return 'Night';
        case morning:
            return 'Morning';
        case day:
            return 'Day';
        case evening:
            return 'Evening';
    }
};

//prepare temperature value for displaying
const getTemp = (val) => {
    switch (Math.sign(val)) {
        case 1:
            return `+${Math.round(val)}`;
        case -1:
            return `${Math.round(val)}`;
        case 0:
        case -0:
            return '0';
        default:
            return val;
    }
};

//get shaped day forecast
const getDayForecast = (forecasts, daysToAdd) => {
    const dayForecast = filterForecast(forecasts, daysToAdd);

    return _.map(dayForecast, (daytimeForecast) => (
        _.assign({}, daytimeForecast, {
            daytime: getDaytime(daytimeForecast.datetime),
            appTemp: getTemp(daytimeForecast.app_temp),
            temp: getTemp(daytimeForecast.temp),
            pres: Math.round(daytimeForecast.pres),
            windSpd: Math.round(daytimeForecast.wind_spd),
            windDir: daytimeForecast.wind_cdir_full,
            rh: Math.round(daytimeForecast.rh)
        })
    ));
};

//Weatherbit.io provides forecast for 48 hours from present moment, not full 2 days
//so clarify if forecast should contain present day
const clarifyForecast = (data) => {
    const today = getDayForecast(data);

    return today.length > 0 ?
        [
            {
                date: displayDate(),
                data: today
            },
            {
                date: displayDate({}, 1),
                data: getDayForecast(data, 1)
            }
        ] :
        [
            {
                date: displayDate({}, 1),
                data: getDayForecast(data, 1)
            },
            {
                date: displayDate({}, 2),
                data: getDayForecast(data, 2)
            }
        ];
};

//get forecast for 2 days, each contains night, morning, day & evening data
export const getForecast = (forecast) => (
    _.assign({}, forecast, {
        data: clarifyForecast(forecast.data)
    })
);
