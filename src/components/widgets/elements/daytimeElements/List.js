import React, {PropTypes} from 'react';

const List = ({temp, pres, wind_spd, wind_cdir_full, rh, app_temp}) => (
    <ul>
        <li>{`Temperature: ${temp}`} &#8451;</li>
        <li>{`Pressure: ${pres}`} mb</li>
        <li>{`Wind: ${wind_spd} m/s, ${wind_cdir_full}`}</li>
        <li>{`Relative humidity: ${rh}`}&#x00025;</li>
        <li>{`Feels like ${app_temp}`} &#8451;</li>
    </ul>
);

List.propTypes = {
    temp: PropTypes.string,
    pres: PropTypes.number,
    wind_spd: PropTypes.number,
    wind_cdir_full: PropTypes.string,
    rh: PropTypes.number,
    app_temp: PropTypes.string
};

export default List;
