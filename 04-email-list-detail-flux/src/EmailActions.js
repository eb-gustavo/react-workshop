import AppDispatcher from './AppDispatcher';

export const selectEmailRow = (id) => {
    AppDispatcher.dispatch({
        type: 'select-email-row',
        id
    });
}

export const selectEmail = (id, selected) => {
    AppDispatcher.dispatch({
        type: 'select-email',
        id,
        selected
    });
}
