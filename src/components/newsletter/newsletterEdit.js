import React, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm';

class EditNewsletter extends Component {

    onSubmit = (fields) => {
        // if (button == 'submit') {
        //console.log('trying to submit to backend');

        // }
        this.props.history.push('/dashboard')
    }

    onCancel = () => {
        this.props.history.push('/dashboard')

        //console.log('trying to cancel');
    };

    componentDidMount() {
        console.log(this.props.match.params.id);
    }

    render() {
        return (
            <div className='new-newsletter'>
                <NewNewsletterForm
                    onCancel={() => this.onCancel()}
                    onSubmit={(event) => this.onSubmit(event)}
                    title='Edit Newsletter'
                />
            </div>
        )
    }
}

export default EditNewsletter;