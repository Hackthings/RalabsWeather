import {SELECT_CITY} from '../actions/actionTypes';

const selectedCity = (state = '', action) => {
    switch (action.type) {
        case SELECT_CITY:
            console.log('reducer updates state to city:', action.city);
            return action.city;
        default:
            return state;
    }
};

export default selectedCity;
