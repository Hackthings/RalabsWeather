import React, {PropTypes} from 'react';
import Daytime from './elements/Daytime';
import _ from 'lodash';

const Day = ({forecast}) => (
    <ul>
        {
            _.map(forecast, (daytimeForecast, i) => (
                <li key={i}>
                    <Daytime forecast={daytimeForecast}/>
                </li>
            ))
        }
    </ul>
);

Daytime.propTypes = {
    forecast: PropTypes.arrayOf(Daytime.propTypes.forecast)
};

export default Day;
