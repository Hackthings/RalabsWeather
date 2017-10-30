import React, {PropTypes} from 'react';

const Meta = ({lastUpdated}) => (
    <div>
        <p>{`Last updated: ${lastUpdated}`}</p>
    </div>
);

Meta.propTypes = {
    lastUpdated: PropTypes.string
};

export default Meta;
