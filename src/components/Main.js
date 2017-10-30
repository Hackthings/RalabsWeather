import React, {PropTypes} from 'react';
import Forecast from './widgets/Forecast';
import Error from './widgets/elements/Error';
import Spinner from './widgets/elements/Spinner';

const Main = ({lastUpdated, isFetching, forecast, error}) => (
    <div>
        {!isFetching && !error && <Forecast forecast={forecast} lastUpdated={lastUpdated}/>}
        {error && <Error error={error}/>}
        {isFetching && <Spinner/>}
    </div>
);

Main.propTypes = {
    lastUpdated: Forecast.propTypes.lastUpdated,
    isFetching: PropTypes.bool,
    forecast: Forecast.propTypes.forecast,
    error: Error.propTypes.error
};

export default Main;
