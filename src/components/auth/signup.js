import React, { Component } from 'react';
import SignupForm from './signupForm';
import Fields from 'redux-form/lib/Fields';

class Signup extends Component {

    onSubmit = (fields) => {

    }

    render() {
        return (
            <div className='sign-up'>
                <SignupForm onSubmit={(event) => this.onSubmit(event)} />
            </div>
        )
    }
}


export default Signup;