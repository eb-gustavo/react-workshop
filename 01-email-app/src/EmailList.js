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
        showUnread: PropTypes.bool,
        showDeleted: PropTypes.bool
    }

    render() {
        let {emails, filterText, showDeleted, showUnread} = this.props;
        let filteredEmails = _filterEmails(emails, filterText, showDeleted, showUnread);
        let emailList = filteredEmails.map((email) => (
            <EmailRow key={email.id} {...email} /> )
        );

        return (
            <table>
                <thead>
                    <tr>
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
