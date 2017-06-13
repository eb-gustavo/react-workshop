import _ from 'lodash';
import {ReduceStore} from 'flux/utils';

import AppDispatcher from './AppDispatcher';
import {emails} from './constants';

const hasSelectedEmails = (selectedEmails) => _.some(selectedEmails, _.identity);

class EmailStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return {
            emails: emails,
            hasSelectedEmails: false,
            selectedEmail: 0,
            selectedEmails: {}
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case 'select-email':
                let selectedEmails = {
                    ...state.selectedEmails,
                    [action.id]: action.selected
                }

                return {
                    ...state,
                    selectedEmails,
                    hasSelectedEmails: hasSelectedEmails(selectedEmails)
                }
            case 'select-email-row':
                return {...state, selectedEmail: action.id}
            default:
                return state;
        }
    }
}

export default new EmailStore();
