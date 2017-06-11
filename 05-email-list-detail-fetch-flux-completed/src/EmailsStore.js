import _ from 'lodash';
import {ReduceStore} from 'flux/utils';

import AppDispatcher from './AppDispatcher';
import {
    CLEAR_SELECTED_EMAIL_ID,
    CLEAR_SELECTED_EMAILS,
    LOAD_EMAILS,
    SELECT_EMAIL_ID,
    SELECT_EMAIL
} from './EmailsActionTypes';

const hasSelectedEmails = (selectedEmails) => _.some(selectedEmails, _.identity);

class EmailsStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return {
            emails: [],
            hasSelectedEmails: false,
            selectedEmail: {},
            selectedEmails: {}
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case CLEAR_SELECTED_EMAIL_ID:
                return {...state, selectedEmail: {}};

            case CLEAR_SELECTED_EMAILS:
                return {...state, selectedEmails: {}, hasSelectedEmails: false};

            case LOAD_EMAILS:
                return {...state, emails: action.emails};

            case SELECT_EMAIL_ID:
                return {...state, selectedEmail: action.email};

            case SELECT_EMAIL:
                let selectedEmails = {
                    ...state.selectedEmails,
                    [action.id]: action.selected
                };

                // i'm adding a timestamp here because, since selectedEmails it is
                // not changeing its shape, re-render is not being triggered
                return {
                    ...state,
                    selectedEmails,
                    hasSelectedEmails: hasSelectedEmails(selectedEmails),
                    timestamp: new Date().getTime()
                };

            default:
                return state;
        }
    }
}

export default new EmailsStore();
