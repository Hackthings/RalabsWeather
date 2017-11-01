import React, {PropTypes} from 'react';

const Image = ({icon, description}) => (
    <img
        alt={`Weather icon: ${description}`}
        src={`/dist/icons/${icon}.png`}
    />
);

Image.propTypes = {
    icon: PropTypes.string,
    description: PropTypes.string
};

export default Image;
