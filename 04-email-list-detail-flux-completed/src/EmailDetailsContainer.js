import React from 'react';
import {Container} from 'flux/utils';

import EmailDetails from './EmailDetails';
import EmailsStore from './EmailsStore';
import {clearSelectedEmailId} from './EmailsActions';

class EmailDetailsContainer extends React.Component {
    static getStores() {
        return [EmailsStore];
    }

    static calculateState() {
        let {selectedEmail} = EmailsStore.getState();

        return {
            email: selectedEmail,

            onEmailDetailsClose: clearSelectedEmailId
        };
    }

    render() {
        return <EmailDetails {...this.state} />;
    }
}

export default Container.create(EmailDetailsContainer);
