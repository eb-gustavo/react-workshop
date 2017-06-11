import AppDispatcher from './AppDispatcher';
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
};

export const showDeleted = (value) => {
    AppDispatcher.dispatch({
        type: SHOW_DELETED,
        value
    });
};

export const showUnread = (value) => {
    AppDispatcher.dispatch({
        type: SHOW_UNREAD,
        value
    });
};
