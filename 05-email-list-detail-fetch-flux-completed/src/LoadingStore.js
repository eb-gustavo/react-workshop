import {ReduceStore} from 'flux/utils';

import AppDispatcher from './AppDispatcher';
import {
    START_LOADING,
    STOP_LOADING
} from './LoadingActionTypes';

class LoadingStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return {
            isLoading: false
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case START_LOADING:
                return {...state, isLoading: true};

            case STOP_LOADING:
                return {...state, isLoading: false};

            default:
                return state;
        }
    }
}

export default new LoadingStore();
