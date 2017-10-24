//www.weatherbit.io API

const API_KEY = 'c3cba67c0c2047f0add84dad9c6d0f66';

export const forecastURL = (city) => (
    `https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&key=${API_KEY}`
);
