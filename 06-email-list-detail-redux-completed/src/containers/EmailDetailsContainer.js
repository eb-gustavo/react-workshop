import {connect} from 'react-redux'

import {clearSelectedEmailId} from '../actions/emails';
import EmailDetails from '../components/EmailDetails'

const _mapStateToProps = ({emails}) => ({
    email: emails.selectedEmail
});

const _mapDispatchToProps = (dispatch) => ({
    onEmailDetailsClose: () => dispatch(clearSelectedEmailId())
});

const EmailDetailsContainer = connect(
    _mapStateToProps,
    _mapDispatchToProps
)(EmailDetails);

export default EmailDetailsContainer;
