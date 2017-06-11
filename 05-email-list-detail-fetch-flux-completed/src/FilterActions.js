import AppDispatcher from './AppDispatcher';
import {loadEmails} from './EmailsActions';
import {
    FILTER_TEXT,
    SHOW_DELETED,
    SHOW_UNREAD
} from './FilterActionTypes';

export const filterByText = (text) => {
    AppDispatcher.dispatch({
        type: FILTER_TEXT,
        text
    });

    loadEmails();
};

export const showDeleted = (value) => {
    AppDispatcher.dispatch({
        type: SHOW_DELETED,
        value
    });

    loadEmails();
};

export const showUnread = (value) => {
    AppDispatcher.dispatch({
        type: SHOW_UNREAD,
        value
    });

    loadEmails();
};
