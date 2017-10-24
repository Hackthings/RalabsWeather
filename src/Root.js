import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';
import getUsersCity from './helpers/usersLocation/getUsersCity';

const store = configureStore();

getUsersCity();

const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default Root;
