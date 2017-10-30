import React, {PropTypes} from 'react';

const Error = ({error}) => (
    <div>
        <p>{error}</p>
    </div>
);

Error.propTypes = {
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ])
};

export default Error;
