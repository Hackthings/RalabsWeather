import React, {PropTypes} from 'react';
import DataTable from './DataTable';

const Data = ({forecast}) => (
    <div>
        <h3>{forecast.daytime}</h3>
        <p>{forecast.weather.description}</p>
        <DataTable
            {...forecast}
        />
    </div>
);

Data.propTypes = {
    forecast: PropTypes.object
};

export default Data;
