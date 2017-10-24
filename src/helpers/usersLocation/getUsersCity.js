import revGeocodingURL from './requestURL';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';

const getUsersCity = () => {
    const result = {
        city: '',
        error: ''
    };

    //use reverse geocoding from Google Maps Geocoding API
    const onSuccess = (position) => {
        const latlng = `${position.coords.latitude},${position.coords.longitude}`;
        fetch(revGeocodingURL(latlng))
            .then(response => response.json())
            .then(json => json.results[0].address_components)
            .then(addresses => _.filter(addresses, address => address.types[0] === 'locality'))
            .then(types => alert(types[0].long_name))
            .catch(err => alert(err));
    };

    const onError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                result.error = 'User denied the request for Geolocation.';
                break;
            case error.POSITION_UNAVAILABLE:
                result.error = 'Location information is unavailable.';
                break;
            case error.TIMEOUT:
                result.error = 'The request to get user location timed out.';
                break;
            case error.UNKNOWN_ERROR:
                result.error = 'An unknown error occurred.';
                break;
        }
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        result.error = 'Geolocation is not supported by this browser.';
    }

    return result;
};

export default getUsersCity;
