import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewNewsletterForm from '../newsletter/newsletterNewForm';

class NewRequest extends Component {

    onSubmit = (fields) => {
        // if (button == 'submit') {
        //console.log('trying to submit to backend');

        // }
        this.props.createNewRequest(this.props._id, {}, () => {
            this.props.history.push("/dashboard");
        })
    };

    onCancel = () => {
        this.props.history.push('/dashboard')

        //console.log('trying to cancel');
    }

    render() {
        return (
            <div className='new-request'>
                <NewNewsletterForm
                    onCancel={() => this.onCancel()}
                    onSubmit={(event) => this.onSubmit(event)}
                    formTitle='New Request'
                    fieldOnePlaceholder='Service Request Title Here'
                    fieldOneTitle='Service Request Title'
                    fieldTwoPlaceholder='Service Request Description Here'
                    fieldTwoTitle='Description'
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { _id } = state.auth.user;
    return { _id }
}

NewRequest = connect(mapStateToProps, actions)(NewRequest);

export default NewRequest;