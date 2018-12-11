import {
    signUp,
    signIn
} from './auth';

import {
    fetchNewsletters,
    fetchNewsletterWithId,
    createNewNewsletter,
    editNewsletter  //Here
} from './newsletter';

import {
    changeSelectedRequestType,
    createNewRequest,
    fetchRequests,
    changeStatus
} from './requests';

export {
    signUp,
    signIn,
    fetchNewsletters,
    fetchNewsletterWithId,
    changeSelectedRequestType,
    createNewRequest,
    fetchRequests,
    changeStatus,
    createNewNewsletter,
    editNewsletter   //Here
};