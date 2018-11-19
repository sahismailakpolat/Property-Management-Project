import React, { Component } from 'react';
import RequestsBox from './requestsBox';

class RequestsBoxes extends Component {
    render() {
        return (
            <div className='requests-boxes'>
                <RequestsBox title={'pending'} count={2} />
                <RequestsBox title={'pending'} count={1} />
                <RequestsBox title={'pending'} count={5} />


            </div>
        )
    }
}

export default RequestsBoxes;