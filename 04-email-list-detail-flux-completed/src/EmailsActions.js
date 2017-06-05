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

export const markEmailsAsDeleted = () => {
    AppDispatcher.dispatch({
        type: MARK_EMAILS_AS_DELETED
    });

    clearSelectedEmailId();
};

export const markEmailsAsRead = () => {
    AppDispatcher.dispatch({
        type: MARK_EMAILS_AS_READ
    });

    clearSelectedEmailId();
};

export const markEmailsAsUnread = () => {
    AppDispatcher.dispatch({
        type: MARK_EMAILS_AS_UNREAD
    });

    clearSelectedEmailId();
};

export const selectEmail = (id, selected) => {
    AppDispatcher.dispatch({
        type: SELECT_EMAIL,
        id,
        selected
    });
};

export const selectEmailId = (id) => {
    AppDispatcher.dispatch({
        type: SELECT_EMAIL_ID,
        id
    });
};
