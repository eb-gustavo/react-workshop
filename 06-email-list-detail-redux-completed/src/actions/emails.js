export const CLEAR_SELECTED_EMAIL_ID = 'clearSelectedEmailId';
export const CLEAR_SELECTED_EMAILS = 'clearSelectedEmails';
export const MARK_EMAILS_AS_DELETED = 'markEmailsAsDeleted';
export const MARK_EMAILS_AS_READ = 'markEmailsAsRead';
export const MARK_EMAILS_AS_UNREAD = 'markEmailsAsUnread';
export const SELECT_EMAIL_ID = 'selectEmailId';
export const SELECT_EMAIL = 'selectEmail';

export const clearSelectedEmailId = () => ({
    type: CLEAR_SELECTED_EMAIL_ID
});

export const clearSelectedEmails = () => ({
    type: CLEAR_SELECTED_EMAILS
});

export const markEmailsAsDeleted = () => ({
    type: MARK_EMAILS_AS_DELETED
});

export const markEmailsAsRead = () => ({
    type: MARK_EMAILS_AS_READ
});

export const markEmailsAsUnread = () => ({
    type: MARK_EMAILS_AS_UNREAD
});

export const selectEmail = (id, selected) => ({
    type: SELECT_EMAIL,
    id,
    selected
});

export const selectEmailId = (id) => ({
    type: SELECT_EMAIL_ID,
    id
});
