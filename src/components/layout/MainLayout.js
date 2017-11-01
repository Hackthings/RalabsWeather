import React, {PropTypes} from 'react';

const MainLayout = ({children}) => (
    <div className='app-container'>
        <header className='header'>
            <div className='container'>
                <h1>Weather Forecast</h1>
            </div>
        </header>
        {children}
        <footer className='footer'>
            <div className='container'>
                <p>Powered by Ralabs</p>
            </div>
        </footer>
    </div>
);

MainLayout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node)
};

export default MainLayout;
