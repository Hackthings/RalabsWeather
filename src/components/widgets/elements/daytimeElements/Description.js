import React, {PropTypes} from 'react';

const Description = ({description}) => (
    <p className='daytime-forecast-description'>{description}</p>
);

Description.propTypes = {
    description: PropTypes.string
};

export default Description;
