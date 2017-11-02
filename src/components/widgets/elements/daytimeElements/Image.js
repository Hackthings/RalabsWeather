import React, {PropTypes} from 'react';

const Image = ({icon, description}) => (
    <div className='weather-image-wrapper'>
        <img
            alt={`Weather icon: ${description}`}
            src={`/dist/icons/${icon}.png`}
        />
    </div>
);

Image.propTypes = {
    icon: PropTypes.string,
    description: PropTypes.string
};

export default Image;
