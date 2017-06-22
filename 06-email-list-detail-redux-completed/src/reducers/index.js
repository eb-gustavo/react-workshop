import {combineReducers} from 'redux';

import {emailsReducer} from './emails';
import {filterReducer} from './filter';

export default combineReducers({
    emails: emailsReducer,
    filter: filterReducer
});
