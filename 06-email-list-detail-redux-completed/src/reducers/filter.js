import {
    FILTER_TEXT,
    SHOW_DELETED,
    SHOW_UNREAD
} from '../actions/filter';

export const filterReducer = (state = {}, action) => {
    if (action.type === FILTER_TEXT) {
        return {
            ...state,
            filterText: action.text
        };
    }

    if (action.type === SHOW_DELETED) {
        return {
            ...state,
            showDeleted: action.value
        };
    }

    if (action.type === SHOW_UNREAD) {
        return {
            ...state,
            showUnread: action.value
        };
    }

    return state;
};
