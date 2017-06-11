import React from 'react';
import {Container} from 'flux/utils';

import EmailList from './EmailList';
import EmailsStore from './EmailsStore';
import {
    selectEmail,
    selectEmailId
} from './EmailsActions';

class EmailsContainer extends React.Component {
    static getStores() {
        return [EmailsStore];
    }

    static calculateState() {
        return {
            ...EmailsStore.getState(),

            onEmailRowSelected: selectEmailId,
            onEmailSelected: selectEmail
        };
    }

    render() {
        return <EmailList {...this.state} />;
    }
}

export default Container.create(EmailsContainer);
