import React from 'react';
import {Container} from 'flux/utils';

import Actions from './Actions';
import EmailsStore from './EmailsStore';
import {
    clearSelectedEmails,
    markEmailsAsDeleted,
    markEmailsAsRead,
    markEmailsAsUnread
} from './EmailsActions';

class ActionsContainer extends React.Component {
    static getStores() {
        return [EmailsStore];
    }

    static calculateState() {
        let {hasSelectedEmails} = EmailsStore.getState();

        return {
            showButtons: hasSelectedEmails,

            onClearSelectedEmails: clearSelectedEmails,
            onMarkAsDeleted: markEmailsAsDeleted,
            onMarkAsRead: markEmailsAsRead,
            onMarkAsUnread: markEmailsAsUnread
        };
    }

    render() {
        return <Actions {...this.state} />;
    }
}

export default Container.create(ActionsContainer);
