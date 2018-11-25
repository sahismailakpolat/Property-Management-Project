import React, { Component } from 'react';

import NewNewsletterForm from '../newsletter/newsletterNewForm';

class NewRequest extends Component {

    onSubmit = (fields) => {
        // if (button == 'submit') {
        //console.log('trying to submit to backend');

        // }
        this.props.history.push('/dashboard')
    }

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

export default NewRequest;