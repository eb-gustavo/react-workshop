import React from 'react';
import {Container} from 'flux/utils';

import FilterStore from './FilterStore';
import EmailStore from './EmailStore';
import EmailList from './EmailList';
import {
    selectEmailRow,
    selectEmail
} from './EmailActions';

class EmailContainer extends React.Component {
    static getStores() {
        return [EmailStore, FilterStore];
    }

    static calculateState() {
        return {
            ...FilterStore.getState(),
            ...EmailStore.getState(),

            onEmailRowSelected: selectEmailRow,
            onEmailSelected: selectEmail
        };
    }

    render() {
        return <EmailList {...this.state} />;
    }
}

export default Container.create(EmailContainer);
