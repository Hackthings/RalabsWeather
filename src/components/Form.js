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
            <div className='form-input'>
                <form
                    className='container city-input'
                    ref='cityForm'
                    onSubmit={this.submitCity}
                >
                    <label htmlFor='cityInput'>Enter city name: </label>
                    <input
                        id='cityInput'
                        ref='cityName'
                        type='text'
                        placeholder='Enter city name here...'
                    />
                    <label htmlFor='citySubmit'>Submit city name</label>
                    <input id='citySubmit' type='submit' value='Submit'/>
                </form>
            </div>
        );
    }
}

Form.propTypes = {
    handleCityChange: PropTypes.func.isRequired
};

export default Form;
