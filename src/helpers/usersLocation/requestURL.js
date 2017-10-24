const revGeocodingURL = (latlng) => (
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng}&&result_type=locality&key=AIzaSyDDj9RQYxXrZrWoZPtUHzzhc3PfMpKYxGU`
);

export default revGeocodingURL;
