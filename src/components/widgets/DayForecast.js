import React, {PropTypes} from 'react';
import DaytimeForecast from './DaytimeForecast';
import _ from 'lodash';

const DayForecast = ({forecast}) => (
    <div>
        <p className='forecast-date'>{forecast.date}</p>
        <ul>
            {
                _.map(forecast.data, (daytimeForecast, i) => (
                    <li key={i}>
                        <DaytimeForecast forecast={daytimeForecast}/>
                    </li>
                ))
            }
        </ul>
    </div>
);

DaytimeForecast.propTypes = {
    forecast: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string,
        data: DaytimeForecast.propTypes.forecast
    }))
};

export default DayForecast;
