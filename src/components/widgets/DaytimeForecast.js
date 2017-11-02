import React, {PropTypes} from 'react';
import Image from './elements/daytimeElements/Image';
import Daytime from './elements/daytimeElements/Daytime';
import Description from './elements/daytimeElements/Description';
import DataTable from './elements/daytimeElements/DataTable';

const DaytimeForecast = ({forecast}) => (
    <div>
        <Daytime daytime={forecast.daytime}/>
        <Description description={forecast.weather.description}/>
        <Image {...forecast.weather}/>
        <DataTable {...forecast}/>
    </div>
);

DaytimeForecast.propTypes = {
    forecast: PropTypes.object
};

export default DaytimeForecast;
