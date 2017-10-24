import React, {PropTypes} from 'react';

const Forecast = ({lastUpdated, isFetching, forecast, error}) => (
    <div>
        {!isFetching && !error && <div>
            {JSON.stringify(forecast)}
            {lastUpdated && <p>{`Last updated: ${lastUpdated}`}</p>}
        </div>}
        {error && <p>{error}</p>}
        {isFetching && <h3>Loading...</h3>}
    </div>
);

Forecast.propTypes = {
    lastUpdated: PropTypes.string,
    isFetching: PropTypes.bool,
    forecast: PropTypes.object,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ])
};

export default Forecast;
