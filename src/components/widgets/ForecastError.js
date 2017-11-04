import React, {PropTypes} from 'react';

const ForecastError = ({city, error, status, message}) => (
    <div className='error'>
        <h2>
            {error}
            {city && <span> for <span className='error-city'>{city}</span></span>}
        </h2>
        <h3>
            {`Error ${status}: ${message}`}
        </h3>
    </div>
);

ForecastError.propTypes = {
    name: PropTypes.string,
    status: PropTypes.number,
    message: PropTypes.string
};

export default ForecastError;
