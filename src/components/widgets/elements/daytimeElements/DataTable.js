import React, {PropTypes} from 'react';

const DataTable = ({temp, pres, windSpd, windDir, rh, appTemp}) => (
    <table>
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
                <td>{windSpd} m/s, {windDir}</td>
            </tr>
            <tr>
                <th>Relative humidity</th>
                <td>{rh} &#x00025;</td>
            </tr>
            <tr>
                <th>Feels like</th>
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
