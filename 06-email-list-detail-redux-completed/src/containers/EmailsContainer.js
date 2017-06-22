import {connect} from 'react-redux'

import {
    selectEmail,
    selectEmailId
} from '../actions/emails';
import EmailList from '../components/EmailList'

const _mapStateToProps = ({emails, filter}) => ({
    emails: emails.emails,
    filterText: filter.filterText,
    selectedEmails: emails.selectedEmails,
    showDeleted: filter.showDeleted,
    showUnread: filter.showUnread
});

const _mapDispatchToProps = (dispatch) => ({
    onEmailRowSelected: (id) => dispatch(selectEmailId(id)),
    onEmailSelected: (id, selected) => dispatch(selectEmail(id, selected))
});

const EmailListContainer = connect(
    _mapStateToProps,
    _mapDispatchToProps
)(EmailList);

export default EmailListContainer;
