import React, {PropTypes} from 'react';

const DataTable = ({temp, pres, wind_spd, wind_cdir_full, rh, app_temp}) => (
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
                <td>{wind_spd} m/s, {wind_cdir_full}</td>
            </tr>
            <tr>
                <th>Relative humidity</th>
                <td>{rh} &#x00025;</td>
            </tr>
            <tr>
                <th>Feels like</th>
                <td>{app_temp} &#8451;</td>
            </tr>
        </tbody>
    </table>
);

DataTable.propTypes = {
    temp: PropTypes.string,
    pres: PropTypes.number,
    wind_spd: PropTypes.number,
    wind_cdir_full: PropTypes.string,
    rh: PropTypes.number,
    app_temp: PropTypes.string
};

export default DataTable;
