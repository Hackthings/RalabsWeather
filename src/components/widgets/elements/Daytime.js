import React from 'react';
import Image from './daytimeElements/Image';
import Data from './daytimeElements/Data';

const Daytime = ({forecast}) => (
    <div>
        <Data
            forecast={forecast}
        />
        <Image {...forecast.weather}/>
    </div>
);

Daytime.propTypes = {
    forecast: Data.propTypes.forecast
};

export default Daytime;
