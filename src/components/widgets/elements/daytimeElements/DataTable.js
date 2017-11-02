import React, {PropTypes} from 'react';

const DataTable = ({temp, pres, windSpd, windDir, rh, appTemp}) => (
    <table className='daytime-forecast-table'>
        <caption>Weather Data</caption>
        <tbody>
            <tr>
                <th>Temperature</th>
                <td>{temp} &#8451;</td>
            </tr>
            <tr>
                <th>Pressure</th>
                <td>{pres} mb</td>
            </tr>
            <tr>
                <th>Wind</th>
                <td>{windSpd} m/s</td>
            </tr>
            <tr>
                <th>Wind Direction</th>
                <td>{windDir}</td>
            </tr>
            <tr>
                <th>Relative Humidity</th>
                <td>{rh} &#x00025;</td>
            </tr>
            <tr>
                <th>Feels Like</th>
                <td>{appTemp} &#8451;</td>
            </tr>
        </tbody>
    </table>
);

DataTable.propTypes = {
    temp: PropTypes.string,
    pres: PropTypes.number,
    windSpd: PropTypes.number,
    windDir: PropTypes.string,
    rh: PropTypes.number,
    appTemp: PropTypes.string
};

export default DataTable;
