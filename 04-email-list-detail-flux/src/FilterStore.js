import {ReduceStore} from 'flux/utils';

import AppDispatcher from './AppDispatcher';

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
            case 'filter-change':
                return {...state, filterText: action.filter}
            case 'show-unread':
                return {...state, showUnread: action.unread}
            case 'show-deleted':
                return {...state, showDeleted: action.deleted}
            default:
                return state;
        }
    }
}

export default new FilterStore();
