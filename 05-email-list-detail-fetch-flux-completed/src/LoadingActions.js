import AppDispatcher from './AppDispatcher';
import {
    START_LOADING,
    STOP_LOADING
} from './LoadingActionTypes';

export const startLoading = (text) => {
    AppDispatcher.dispatch({
        type: START_LOADING
    });
};

export const stopLoading = (value) => {
    AppDispatcher.dispatch({
        type: STOP_LOADING
    });
};
