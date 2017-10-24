import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const configureStore = (initialState) => (
    createStore(
        rootReducer,
        initialState,
        enhancers
    )
);

export default configureStore;
