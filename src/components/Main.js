import React, {PropTypes} from 'react';
import Forecast from './widgets/Forecast';
import ForecastError from './widgets/ForecastError';
import Spinner from './widgets/Spinner';

const Main = ({city, lastUpdated, isFetching, forecast, error}) => (
    <div className='container main'>
        {!isFetching && !error && <Forecast
            city={city}
            forecast={forecast}
            lastUpdated={lastUpdated}
        />}
        {error && <ForecastError error={error}/>}
        {isFetching && <Spinner/>}
    </div>
);

Main.propTypes = {
    city: Forecast.propTypes.city,
    lastUpdated: Forecast.propTypes.lastUpdated,
    isFetching: PropTypes.bool,
    forecast: Forecast.propTypes.forecast,
    error: ForecastError.propTypes.error
};

export default Main;
