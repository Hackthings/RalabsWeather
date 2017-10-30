import React, {PropTypes} from 'react';
import {getForecast} from '../../helpers/forecast/filterRes';

const Main = ({lastUpdated, isFetching, forecast, error}) => (
    <div>
        {!isFetching && !error && <div>
            {console.log(getForecast(forecast))}
            {lastUpdated && <p>{`Last updated: ${lastUpdated}`}</p>}
        </div>}
        {error && <p>{error}</p>}
        {isFetching && <h3>Loading...</h3>}
    </div>
);

Main.propTypes = {
    lastUpdated: PropTypes.string,
    isFetching: PropTypes.bool,
    forecast: PropTypes.object,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ])
};

export default Main;
