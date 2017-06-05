import AppDispatcher from './AppDispatcher';
import {
    CLEAR_SELECTED_EMAIL_ID,
    CLEAR_SELECTED_EMAILS,
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
