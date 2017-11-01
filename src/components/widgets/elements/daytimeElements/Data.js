import React, {PropTypes} from 'react';
import List from './List';

const Data = ({forecast}) => (
    <div>
        <h3>{forecast.daytime}</h3>
        <p>{forecast.weather.description}</p>
        <List
            {...forecast}
        />
    </div>
);

Data.propTypes = {
    forecast: PropTypes.object
};

export default Data;
