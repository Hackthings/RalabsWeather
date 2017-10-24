import {combineReducers} from 'redux';
import selectedCity from './selectedCity';
import forecastByCity from './forecastByCity';

const rootReducer = combineReducers({
    selectedCity,
    forecastByCity
});

export default rootReducer;
