import _ from 'lodash';
import {ReduceStore} from 'flux/utils';

import AppDispatcher from './AppDispatcher';
import {
    CLEAR_SELECTED_EMAIL_ID,
    CLEAR_SELECTED_EMAILS,
    MARK_EMAILS_AS_DELETED,
    MARK_EMAILS_AS_READ,
    MARK_EMAILS_AS_UNREAD,
    SELECT_EMAIL_ID,
    SELECT_EMAIL
} from './EmailsActionTypes';
import {emails} from './constants';

const hasSelectedEmails = (selectedEmails) => _.some(selectedEmails, _.identity);
const getSelectedEmail = (emails, selectedEmailId) => _.find(emails, {id: selectedEmailId});

class EmailsStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return {
            emails,
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

            case MARK_EMAILS_AS_DELETED:
                let deletedEmails = _.map(state.emails, (email) => {
                    if (state.selectedEmails[email.id]) {
                        email.deleted = true;
                    }
                    return email;
                });

                return {...state, emails: deletedEmails}

            case MARK_EMAILS_AS_READ:
                let readEmails = _.map(state.emails, (email) => {
                    if (state.selectedEmails[email.id]) {
                        email.read = true;
                    }
                    return email;
                });

                return {...state, emails: readEmails}

            case MARK_EMAILS_AS_UNREAD:
                let unreadEmails = _.map(state.emails, (email) => {
                    if (state.selectedEmails[email.id]) {
                        email.read = false;
                    }
                    return email;
                });

                return {...state, emails: unreadEmails}

            case SELECT_EMAIL_ID:
                return {
                    ...state,
                    selectedEmail: getSelectedEmail(state.emails, action.id)
                };

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
