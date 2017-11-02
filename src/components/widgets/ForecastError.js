import React, {PropTypes} from 'react';

const ForecastError = ({error}) => (
    <div>
        <p>{error}</p>
    </div>
);

ForecastError.propTypes = {
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ])
};

export default ForecastError;
