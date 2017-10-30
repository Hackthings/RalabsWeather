import React, {PropTypes} from 'react';
import _ from 'lodash';
import Day from './Day';
import Meta from './elements/Meta';

const Forecast = ({forecast, lastUpdated}) => (
    <div>
        <ul>
            {
                _.map(forecast.data, (dayForecast, i) => (
                    <li key={i}>
                        <Day forecast={dayForecast}/>
                    </li>
                ))
            }
        </ul>
        {lastUpdated && <Meta lastUpdated={lastUpdated}/>}
    </div>
);

Forecast.propTypes = {
    forecast: PropTypes.object,
    lastUpdated: Meta.propTypes.lastUpdated
};

export default Forecast;
