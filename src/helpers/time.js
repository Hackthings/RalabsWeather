//dates are stored in store in milliseconds
//dates are displayed in 'DD/MM/YY HH:mm' format
import moment from 'moment';

//Main Time To Live in milliseconds, current: 3h
export const forecastTTL = 60000;//10800000;

export const getCurrentDate = () => (
    Number(moment().format('x'))
);

//specify one data display standard
//hm is bool parameter, that specifies wether hours & minutes are needed
export const displayDate = (date = {}, daysToAdd = 0, hm = false) => {
    const dateFormat = `dddd, MMMM D${hm ? ' HH:mm,' : ','} YYYY`;

    return typeof date === 'number' ?
        moment(date).add(daysToAdd, 'days').format(dateFormat) :
        moment(date).add(daysToAdd, 'days').format(dateFormat);
};

//handle formating date & time for finding hourly forecast
export const getDateTime = (daytime, daysToAdd = 0) => (
    `${moment().add(daysToAdd, 'days').format('YYYY-MM-DD')}:${daytime}`
);
