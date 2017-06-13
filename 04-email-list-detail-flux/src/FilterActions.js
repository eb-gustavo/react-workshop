import AppDispatcher from './AppDispatcher';

export const filterChange = (value) => {
    AppDispatcher.dispatch({
        type: 'filter-change',
        filter: value
    });
}

export const showUnread = (value) => {
    AppDispatcher.dispatch({
        type: 'show-unread',
        unread: value
    });
}

export const showDeleted = (value) => {
    AppDispatcher.dispatch({
        type: 'show-deleted',
        deleted: value
    });
}
