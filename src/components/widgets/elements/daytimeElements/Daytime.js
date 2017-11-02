import React, {PropTypes} from 'react';

const Daytime = ({daytime}) => (
    <h3 className='daytime-name'>{daytime}</h3>
);

Daytime.propTypes = {
    daytime: PropTypes.string
};

export default Daytime;
