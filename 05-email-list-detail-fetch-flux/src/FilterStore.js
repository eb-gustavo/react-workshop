import {ReduceStore} from 'flux/utils';

import AppDispatcher from './AppDispatcher';
import {
    FILTER_TEXT,
    SHOW_DELETED,
    SHOW_UNREAD
} from './FilterActionTypes';

class FilterStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return {
            filterText: '',
            showDeleted: false,
            showUnread: false
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case FILTER_TEXT:
                return {...state, filterText: action.text};

            case SHOW_DELETED:
                return {...state, showDeleted: action.value};

            case SHOW_UNREAD:
                return {...state, showUnread: action.value};

            default:
                return state;
        }
    }
}

export default new FilterStore();
