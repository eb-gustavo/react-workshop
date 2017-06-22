import _ from 'lodash';

import {
    CLEAR_SELECTED_EMAIL_ID,
    CLEAR_SELECTED_EMAILS,
    MARK_EMAILS_AS_DELETED,
    MARK_EMAILS_AS_READ,
    MARK_EMAILS_AS_UNREAD,
    SELECT_EMAIL_ID,
    SELECT_EMAIL
} from '../actions/emails';

const getSelectedEmail = (emails, selectedEmailId) => _.find(emails, {id: selectedEmailId});

export const emailsReducer = (state = {}, action) => {
    if (action.type === CLEAR_SELECTED_EMAIL_ID) {
        return {
            ...state,
            selectedEmail: {}
        };
    }

    if (action.type === CLEAR_SELECTED_EMAILS) {
        return {
            ...state,
            selectedEmails: {}
        };
    }

    if (action.type === MARK_EMAILS_AS_DELETED) {
        let deletedEmails = _.map(state.emails, (email) => {
            if (state.selectedEmails[email.id]) {
                email.deleted = true;
            }
            return email;
        });

        return {
            ...state,
            emails: deletedEmails
        };
    }

    if (action.type === MARK_EMAILS_AS_READ) {
        let readEmails = _.map(state.emails, (email) => {
            if (state.selectedEmails[email.id]) {
                email.read = true;
            }
            return email;
        });

        return {
            ...state,
            emails: readEmails
        };
    }

    if (action.type === MARK_EMAILS_AS_UNREAD) {
        let unreadEmails = _.map(state.emails, (email) => {
            if (state.selectedEmails[email.id]) {
                email.read = false;
            }
            return email;
        });

        return {
            ...state,
            emails: unreadEmails
        };
    }

    if (action.type === SELECT_EMAIL_ID) {
        return {
            ...state,
            selectedEmail: getSelectedEmail(state.emails, action.id)
        };
    }

    if (action.type === SELECT_EMAIL) {
        let selectedEmails = {
            ...state.selectedEmails,
            [action.id]: action.selected
        };

        // i'm adding a timestamp here because, since selectedEmails it is
        // not changeing its shape, re-render is not being triggered
        return {
            ...state,
            selectedEmails
        };
    }

    return state;
};
