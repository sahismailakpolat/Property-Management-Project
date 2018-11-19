import React, { Component } from 'react';

import Button from '../button';

import RequestsBoxes from './requestsBoxes';
import Requests from './requests';

class RequestsGrid extends Component {

    handleAddRequests = () => {
        this.props.history.push('/requests/new');
    }

    render() {
        return (
            <div className='requests-grid'>
                <Button className='requests-grid__button' icon='fas fa-plus' callback={() => this.handleAddNewsletter()} />
                <RequestsBoxes />
                <Requests />
            </div>
        )
    }
}

export default RequestsGrid;