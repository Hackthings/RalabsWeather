//dates are stored in store in milliseconds
//dates are displayed in 'DD/MM/YY HH:mm' format
import moment from 'moment';

//Main Time To Live in milliseconds, current: 3h
export const forecastTTL = 30000;//10800000;

export const getCurrentDate = () => (
    Number(moment().format('x'))
);

export const displayUpdateDate = (ms) => (
    moment(ms).format('DD/MM/YY HH:mm')
);

//handle formating date & time for finding hourly forecast
export const getDateTime = (daytime, daysToAdd = 0) => (
    `${moment().add(daysToAdd, 'days').format('YYYY-MM-DD')}:${daytime}`
);
