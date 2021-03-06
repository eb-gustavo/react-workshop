import React from 'react';
import PropTypes from 'prop-types';

import EmailRow from './EmailRow';

export default class EmailList extends React.Component {
    static propTypes = {
        emails: PropTypes.arrayOf(PropTypes.shape({
            date: PropTypes.string.isRequired,
            from: PropTypes.string.isRequired,
            subject: PropTypes.string.isRequired
        })).isRequired,
        onEmailRowSelected: PropTypes.func.isRequired,
        onEmailSelected: PropTypes.func.isRequired,
        selectedEmails: PropTypes.object.isRequired
    }

    handleEmailRowSelected(id) {
        let {onEmailRowSelected} = this.props;

        onEmailRowSelected(id);
    }

    handleEmailSelected(id, selected) {
        let {onEmailSelected} = this.props;

        onEmailSelected(id, selected);
    }

    render() {
        let {emails, selectedEmails} = this.props;
        let emailList = emails.map((email) => (
            <EmailRow
                key={email.id}
                email={email}
                isSelected={selectedEmails[email.id]}
                onEmailRowSelected={this.handleEmailRowSelected.bind(this)}
                onEmailSelected={this.handleEmailSelected.bind(this)}
            />
        ));

        return (
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>From</th>
                        <th>Subject</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {emailList}
                </tbody>
            </table>
        );
    }
}
