import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {selectCity, fetchForecastIfNeeded} from '../store/actions/actionCreators';
import _ from 'lodash';
import MainLayout from '../components/layout/MainLayout';
import Heading from '../components/widgets/Heading';
import Form from '../components/widgets/Form';
import Forecast from '../components/widgets/Forecast';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleCityChange = _.bind(this.handleCityChange, this);
    }
    componentDidMount() {
        /*
        get currentCity
        const {dispatch} = this.props;
        dispatch(fetchForecastIfNeeded(currentCity));
        */
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
                {city && <Heading city={city}/>}
                <Form
                    handleCityChange={this.handleCityChange}
                />
                <Forecast
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
    city: Heading.propTypes.city.isRequired,
    forecast: Forecast.propTypes.forecast.isRequired,
    isFetching: Forecast.propTypes.isFetching.isRequired,
    lastUpdated: Forecast.propTypes.lastUpdated,
    error: Forecast.propTypes.error,
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

    return {
        city: selectedCity,
        isFetching,
        lastUpdated: receivedAt && new Date(receivedAt).toLocaleString(),
        error,
        forecast
    };
};

export default connect(mapStateToProps)(App);
