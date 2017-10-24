import React, {PropTypes} from 'react';

const Heading = ({city}) => (
    <div>
        <h2>{city}</h2>
    </div>
);

Heading.propTypes = {
    city: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
};

export default Heading;
