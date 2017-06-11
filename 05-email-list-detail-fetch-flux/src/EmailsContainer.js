import React from 'react';
import {Container} from 'flux/utils';

import EmailList from './EmailList';
import EmailsStore from './EmailsStore';
import FilterStore from './FilterStore';
import {
    selectEmail,
    selectEmailId
} from './EmailsActions';

class EmailsContainer extends React.Component {
    static getStores() {
        return [EmailsStore, FilterStore];
    }

    static calculateState() {
        return {
            ...EmailsStore.getState(),
            ...FilterStore.getState(),

            onEmailRowSelected: selectEmailId,
            onEmailSelected: selectEmail
        };
    }

    render() {
        return <EmailList {...this.state} />;
    }
}

export default Container.create(EmailsContainer);
