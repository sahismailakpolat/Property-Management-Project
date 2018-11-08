import React, { Component } from 'react';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
class NewsletterGrid extends Component {
    render() {

        const latest = {
            _id: '1993',
            title: 'Happy Holiday Fam',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/960x258'
        }



        return (
            <div className='newsletter-grid'>
                <NewsletterBox date={new Date()} />
                <NewsletterArchive />
                <NewsletterLatest {...latest} />
            </div>
        )
    }
}

export default NewsletterGrid;