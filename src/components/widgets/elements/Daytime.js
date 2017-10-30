import React, {PropTypes} from 'react';

const Daytime = ({forecast}) => (
    <div>
        {forecast.datetime}
    </div>
);

Daytime.propTypes = {
    forecast: PropTypes.object
};

export default Daytime;
