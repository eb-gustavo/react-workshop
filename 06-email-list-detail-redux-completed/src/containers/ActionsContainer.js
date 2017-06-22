import _ from 'lodash';
import {connect} from 'react-redux'

import {
    clearSelectedEmailId,
    clearSelectedEmails,
    markEmailsAsDeleted,
    markEmailsAsRead,
    markEmailsAsUnread
} from '../actions/emails';
import Actions from '../components/Actions'

const hasSelectedEmails = (selectedEmails) => _.some(selectedEmails, _.identity);

const _mapStateToProps = ({emails}) => ({
    showButtons: hasSelectedEmails(emails.selectedEmails)
});

const _mapDispatchToProps = (dispatch) => ({
    onClearSelectedEmails: () => dispatch(clearSelectedEmails()),
    onMarkAsDeleted: () => {
        dispatch(markEmailsAsDeleted());
        dispatch(clearSelectedEmailId());
    },
    onMarkAsRead: () => {
        dispatch(markEmailsAsRead());
        dispatch(clearSelectedEmailId());
    },
    onMarkAsUnread: () => {
        dispatch(markEmailsAsUnread());
        dispatch(clearSelectedEmailId());
    }
});

const ActionsContainer = connect(
    _mapStateToProps,
    _mapDispatchToProps
)(Actions);

export default ActionsContainer;
