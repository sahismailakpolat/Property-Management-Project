import {
    STORE_USER
} from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case STORE_USER:
            console.log(action.payload);
            return {
                ...state,
                user: action.payload
            }
        default: return state;
    }
}