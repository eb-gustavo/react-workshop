import _ from 'lodash';

import {
    deleteEmail,
    getEmail,
    getEmails,
    updateEmail
} from './api';
import AppDispatcher from './AppDispatcher';
import {
    CLEAR_SELECTED_EMAIL_ID,
    CLEAR_SELECTED_EMAILS,
    LOAD_EMAILS,
    SELECT_EMAIL_ID,
    SELECT_EMAIL
} from './EmailsActionTypes';
import EmailsStore from './EmailsStore';
import FilterStore from './FilterStore';
import {
    startLoading,
    stopLoading
} from './LoadingActions';

export const clearSelectedEmailId = () => {
    AppDispatcher.dispatch({
        type: CLEAR_SELECTED_EMAIL_ID
    });
};

export const clearSelectedEmails = () => {
    AppDispatcher.dispatch({
        type: CLEAR_SELECTED_EMAILS
    });
};

export const loadEmails = () => {
    let {
        filterText: q,
        showDeleted: deleted,
        showUnread: unread
    } = FilterStore.getState();

    startLoading();
    getEmails({deleted, q, unread})
        .then((emails) => {
            AppDispatcher.dispatch({
                type: LOAD_EMAILS,
                emails
            });

            clearSelectedEmails();
            clearSelectedEmailId();
        })
        .catch((error) => {
            // dispatch error
            console.error(error)
        })
        .then(() => stopLoading());
}

export const markEmailsAsDeleted = () => {
    let {selectedEmails} = EmailsStore.getState();
    let promise = Promise.resolve();

    startLoading();

    _.each(selectedEmails, (value, emailId) => {
        if (value) {
            promise = promise.then(() => deleteEmail(emailId));
        }
    });
    promise
        .catch((error) => {
            // dispatch error
            console.error(error)
        })
        .then(() => loadEmails());
};

export const markEmailsAsRead = () => {
    let {selectedEmails} = EmailsStore.getState();
    let promise = Promise.resolve();

    startLoading();

    _.each(selectedEmails, (value, emailId) => {
        if (value) {
            promise = promise.then(() => updateEmail(emailId, {read: true}));
        }
    });
    promise
        .catch((error) => {
            // dispatch error
            console.error(error)
        })
        .then(() => loadEmails());
};

export const markEmailsAsUnread = () => {
    let {selectedEmails} = EmailsStore.getState();
    let promise = Promise.resolve();

    startLoading();

    _.each(selectedEmails, (value, emailId) => {
        if (value) {
            promise = promise.then(() => updateEmail(emailId, {read: false}));
        }
    });
    promise
        .catch((error) => {
            // dispatch error
            console.error(error)
        })
        .then(() => loadEmails());
};

export const selectEmail = (id, selected) => {
    AppDispatcher.dispatch({
        type: SELECT_EMAIL,
        id,
        selected
    });
};

export const selectEmailId = (id) => {
    startLoading();

    getEmail(id)
        .then((email) => {
            AppDispatcher.dispatch({
                type: SELECT_EMAIL_ID,
                email
            });
        })
        .catch((error) => {
            // dispatch error
            console.error(error)
        })
        .then(() => stopLoading());
};
