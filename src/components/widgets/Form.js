import React, {PropTypes} from 'react';
import _ from 'lodash';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.submitCity = _.bind(this.submitCity, this);
    }
    submitCity(e) {
        e.preventDefault();

        const nextCity = this.refs.cityName.value.trim();
        if (nextCity) {
            this.props.handleCityChange(nextCity);
        }

        this.refs.cityForm.reset();
    }
    render() {
        return (
            <form
                ref='cityForm'
                onSubmit={this.submitCity}
            >
                <label>Enter city name: <input ref='cityName'/></label>
                <input type='submit' value='Submit'/>
            </form>
        );
    }
}

Form.propTypes = {
    handleCityChange: PropTypes.func.isRequired
};

export default Form;
