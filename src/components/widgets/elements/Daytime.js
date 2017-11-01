import React, {PropTypes} from 'react';
import Image from './daytimeElements/Image';

const Daytime = ({forecast}) => (
    <div>
        {console.log(forecast)}
        <p>
            {forecast.daytime}

            <Image {...forecast.weather}/>

            {forecast.weather.description}

            {forecast.temp}
            <span> &#8451;</span>

            {forecast.pres}

            {forecast.wind_spd}

            {forecast.rh}
            <span> &#x00025;</span>

            {forecast.app_temp}
            <span> &#8451;</span>
        </p>
    </div>
);

Daytime.propTypes = {
    forecast: PropTypes.object
};

export default Daytime;
