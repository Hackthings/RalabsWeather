import React, {PropTypes} from 'react';
import Daytime from './elements/Daytime';
import _ from 'lodash';

const Day = ({forecast}) => (
    <div>
        <p>{forecast.date}</p>
        <ul>
            {
                _.map(forecast.data, (daytimeForecast, i) => (
                    <li key={i}>
                        <Daytime forecast={daytimeForecast}/>
                    </li>
                ))
            }
        </ul>
    </div>
);

Daytime.propTypes = {
    forecast: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string,
        data: Daytime.propTypes.forecast
    }))
};

export default Day;
