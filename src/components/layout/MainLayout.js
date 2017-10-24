import React, {PropTypes} from 'react';

const MainLayout = ({children}) => (
    <div>
        <header>
            <h1>Weather Forecast</h1>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <p>Powered by Ralabs</p>
        </footer>
    </div>
);

MainLayout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node)
};

export default MainLayout;
