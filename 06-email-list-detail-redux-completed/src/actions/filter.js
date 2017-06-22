export const FILTER_TEXT = 'filterText';
export const SHOW_DELETED = 'showDeleted';
export const SHOW_UNREAD = 'showUnread';

export const filterByText = (text) => ({
    type: FILTER_TEXT,
    text
});

export const showDeleted = (value) => ({
    type: SHOW_DELETED,
    value
});

export const showUnread = (value) => ({
    type: SHOW_UNREAD,
    value
});
