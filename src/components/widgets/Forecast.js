import React, {PropTypes} from 'react';
import _ from 'lodash';
import City from './elements/City';
import DayForecast from './DayForecast';
import Meta from './elements/Meta';

const Forecast = ({city, forecast, lastUpdated}) => (
    <div>
        {city && <City city={city}/>}
        <ul className='forecast'>
            {
                _.map(forecast.data, (dayForecast, i) => (
                    <li key={i} className='day-forecast'>
                        <DayForecast forecast={dayForecast}/>
                    </li>
                ))
            }
        </ul>
        {lastUpdated && <Meta lastUpdated={lastUpdated}/>}
    </div>
);

Forecast.propTypes = {
    city: City.propTypes.city,
    forecast: PropTypes.object,
    lastUpdated: Meta.propTypes.lastUpdated
};

export default Forecast;
