import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {selectCity, fetchForecastIfNeeded} from '../store/actions/actionCreators';
import _ from 'lodash';
import MainLayout from '../components/layout/MainLayout';
import Heading from '../components/widgets/Heading';
import Form from '../components/widgets/Form';
import Main from '../components/widgets/Main';
import {getUsersCityForecast} from '../helpers/usersLocation/getUsersCityForecast';
import {displayUpdateDate} from '../helpers/time';

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
                {city && <Heading city={city}/>}
                <Form
                    handleCityChange={this.handleCityChange}
                />
                <Main
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

    return {
        city: selectedCity,
        isFetching,
        lastUpdated: receivedAt && displayUpdateDate(receivedAt),
        error,
        forecast
    };
};

export default connect(mapStateToProps)(App);
