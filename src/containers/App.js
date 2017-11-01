import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {selectCity, fetchForecastIfNeeded} from '../store/actions/actionCreators';
import _ from 'lodash';
import MainLayout from '../components/layout/MainLayout';
import Form from '../components/Form';
import Main from '../components/Main';
import {getUsersCityForecast} from '../helpers/usersLocation/getUsersCityForecast';
import {displayDate} from '../helpers/time';
import {getForecast} from '../helpers/forecast/filterRes';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleCityChange = _.bind(this.handleCityChange, this);
    }
    componentDidMount() {
        const {dispatch} = this.props;
        getUsersCityForecast(city => dispatch(selectCity(city)));
    }
    componentWillReceiveProps(nextProps) {
        console.log('appComponentWillReceiveProps');
        const {dispatch, city} = nextProps;
        dispatch(fetchForecastIfNeeded(city));
        /*
        if (nextProps.city !== this.props.city) {
            const {dispatch, city} = nextProps;
            dispatch(fetchForecastIfNeeded(city));
        }
        */
    }
    handleCityChange(nextCity) {
        this.props.dispatch(selectCity(nextCity));
    }
    render() {
        const {city, forecast, isFetching, lastUpdated, error} = this.props;

        return (
            <MainLayout>
                <Form
                    handleCityChange={this.handleCityChange}
                />
                <Main
                    city={city}
                    lastUpdated={lastUpdated}
                    isFetching={isFetching}
                    error={error}
                    forecast={forecast}
                />
            </MainLayout>
        );
    }
}

App.propTypes = {
    city: Main.propTypes.city.isRequired,
    forecast: Main.propTypes.forecast.isRequired,
    isFetching: Main.propTypes.isFetching.isRequired,
    lastUpdated: Main.propTypes.lastUpdated,
    error: Main.propTypes.error,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    const {selectedCity, forecastByCity} = state;
    console.log('mapStateToProps is called');
    const {
        isFetching,
        receivedAt,
        error,
        forecast} = forecastByCity[selectedCity] || {
        isFetching: true,
        error: null,
        forecast: {}
    };
    console.log(getForecast(forecast));
    return {
        city: selectedCity,
        isFetching,
        lastUpdated: receivedAt && displayDate(receivedAt, 0, true),
        error,
        forecast: getForecast(forecast)
    };
};

export default connect(mapStateToProps)(App);
