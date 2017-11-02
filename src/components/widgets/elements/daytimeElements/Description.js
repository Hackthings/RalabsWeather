import React, {PropTypes} from 'react';

const Description = ({description}) => (
    <p>{description}</p>
);

Description.propTypes = {
    description: PropTypes.string
};

export default Description;
