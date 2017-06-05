import {ReduceStore} from 'flux/utils';

import AppDispatcher from './AppDispatcher';
import {
    CLEAR_SELECTED_EMAIL_ID,
    CLEAR_SELECTED_EMAILS,
    SELECT_EMAIL_ID,
    SELECT_EMAIL
} from './EmailsActionTypes';
import {emails} from './constants';

class EmailsStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return {
            emails,
            selectedEmailId: 0,
            selectedEmails: {}
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case CLEAR_SELECTED_EMAIL_ID:
                return {...state, selectedEmailId: 0};

            case CLEAR_SELECTED_EMAILS:
                return {...state, selectedEmails: {}};

            case SELECT_EMAIL_ID:
                return {...state, selectedEmailId: action.id};

            case SELECT_EMAIL:
                let {selectedEmails} = state;
                let {id, selected} = action;

                selectedEmails[id] = selected;

                // i'm adding a timestamp here because, since selectedEmails it is
                // not changeing its shape, re-render is not being triggered
                return {...state, selectedEmails, timestamp: new Date().getTime()};

            default:
                return state;
        }
    }
}

export default new EmailsStore();
