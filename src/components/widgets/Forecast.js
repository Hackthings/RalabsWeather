import React, {PropTypes} from 'react';
import _ from 'lodash';
import Heading from './elements/Heading';
import Day from './Day';
import Meta from './elements/Meta';

const Forecast = ({city, forecast, lastUpdated}) => (
    <div>
        {city && <Heading city={city}/>}
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
    city: Heading.propTypes.city,
    forecast: PropTypes.object,
    lastUpdated: Meta.propTypes.lastUpdated
};

export default Forecast;
