import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import {AppContainer} from 'react-hot-loader';
import './styles.css';

const app = document.getElementById('app');

ReactDOM.render(
    <AppContainer>
        <Root/>
    </AppContainer>,
    app
);

if (module.hot) {
    module.hot.accept('./Root', () => {
        const NextRoot = require('./Root').default;

        ReactDOM.render(
            <AppContainer>
                <NextRoot/>
            </AppContainer>,
            app
        );
    });
}
