import React, {PropTypes} from 'react';

const Meta = ({lastUpdated}) => (
    <div className='forecast-metadata'>
        <p>
            <span className='updatetime'>Last updated: </span>
            <span>{lastUpdated}</span>
        </p>
    </div>
);

Meta.propTypes = {
    lastUpdated: PropTypes.string
};

export default Meta;
