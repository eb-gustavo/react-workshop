import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import EmailRow from './EmailRow';

const _filterEmails = (emails, filterText, showDeleted, showUnread) => (
    _.chain(emails)
        .filter((email) => {
            if (showUnread) {
              return !email.read;
            }
            return true;
        })
        .filter((email) => {
            if (showDeleted) {
              return email.deleted;
            }
            return true;
        })
        .filter((email) => {
            if (filterText) {
              return email.subject.toLowerCase().indexOf(filterText.toLowerCase()) > -1;
            }
            return true;
        })
        .value()
);

export default class EmailList extends React.Component {
    static propTypes = {
        emails: PropTypes.arrayOf(PropTypes.shape({
            date: PropTypes.string.isRequired,
            from: PropTypes.string.isRequired,
            subject: PropTypes.string.isRequired
        })).isRequired,
        filterText: PropTypes.string.isRequired,
        onEmailRowSelected: PropTypes.func.isRequired,
        onEmailSelected: PropTypes.func.isRequired,
        selectedEmails: PropTypes.object.isRequired,
        showUnread: PropTypes.bool,
        showDeleted: PropTypes.bool
    }

    static defaultProps = {
        onEmailRowSelected: () => {},
        onEmailSelected: () => {}
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
        let {emails, filterText, selectedEmails, showDeleted, showUnread} = this.props;
        let filteredEmails = _filterEmails(emails, filterText, showDeleted, showUnread);
        let emailList = filteredEmails.map((email) => (
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
