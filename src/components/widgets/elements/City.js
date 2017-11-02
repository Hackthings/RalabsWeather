import React, {PropTypes} from 'react';

const City = ({city}) => (
    <div className='city-name'>
        <h2>{city}</h2>
    </div>
);

City.propTypes = {
    city: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
};

export default City;
