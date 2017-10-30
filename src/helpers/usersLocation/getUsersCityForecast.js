import getRevGeocodingURL from './revGeocodingURL';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';

const errMessage = (err) => `Can't get current city. Error: ${err}`;

//use reverse geocoding from Google Maps Geocoding API to get current users city
//and dispatch SELECT_CITY acton on navigator.geolocation success
const onSuccess = (position, selectCity) => {
    const latlng = `${position.coords.latitude},${position.coords.longitude}`;
    fetch(getRevGeocodingURL(latlng))
        .then(response => response.json())
        .then(json => json.results[0].address_components)
        .then(components => _.filter(components, component => component.types[0] === 'locality'))
        .then(types => types[0].long_name)
        .then(city => selectCity(city))
        .catch(err => alert(errMessage(`Failed to get city from current coordinates. (${err})`)));
};

//alert error message on navigator.geolocation error
const onError = (error) => {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert(errMessage('User denied the request for Geolocation.'));
            break;
        case error.POSITION_UNAVAILABLE:
            alert(errMessage('Location information is unavailable.'));
            break;
        case error.TIMEOUT:
            alert(errMessage('The request to get user location timed out.'));
            break;
        case error.UNKNOWN_ERROR:
            alert(errMessage('An unknown error occurred.'));
            break;
    }
};

export const getUsersCityForecast = (selectCity) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => onSuccess(position, selectCity),
            onError
        );
    } else {
        alert(errMessage('Geolocation is not supported by this browser.'));
    }
};
