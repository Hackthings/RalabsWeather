import React, {PropTypes} from 'react';

const MainLayout = ({children}) => (
    <div className='app-container'>
        <header className='header'>
            <h1>Weather Forecast</h1>
        </header>
        <div className='main'>
            {children}
        </div>
        <footer className='footer'>
            <p>Powered by Ralabs</p>
        </footer>
    </div>
);

MainLayout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node)
};

export default MainLayout;
