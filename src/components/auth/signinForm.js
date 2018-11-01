import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from './textLink';



class SigninForm extends Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className='sign-in-form'>
                <FormTitle className="sign-in__title" text='Login' />
                <Field
                    className='sign-in-form__email'
                    placeholder='Enter an Email'
                    name='Email'
                    type='email'
                    title='Email'
                    component={FormInput}

                />
                <Field
                    className='sign-in-form__password'
                    placeholder='Enter an Password'
                    name='Password'
                    type='password'
                    title='Password'
                    component={FormInput}

                />
                <Field
                    className='sign-in-form__login'
                    name='Login'
                    type='submit'
                    title='Login'
                    component={FormButton}

                />
                <div className='sign-in-form__text-links'>
                    <TextLink to='/forgot' text='Forgot Password' />
                    <TextLink to='/signup' text='Not a member? Register here' />
                </div>
            </form>
        )

    }

}
SigninForm = reduxForm({
    form: 'signin'
})(SigninForm);

export default SigninForm;