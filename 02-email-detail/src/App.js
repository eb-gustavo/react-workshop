import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Actions from './Actions';
import EmailDetails from './EmailDetails';
import EmailList from './EmailList';
import Filter from './Filter';

const getSelectedEmail = (emails, selectedEmailId) => _.find(emails, {id: selectedEmailId});
const hasSelectedEmails = (selectedEmails) => _.some(selectedEmails, _.identity);

export default class App extends React.Component {
    static propTypes = {
        emails: PropTypes.arrayOf(PropTypes.shape({
            date: PropTypes.string.isRequired,
            from: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            subject: PropTypes.string.isRequired,
            deleted: PropTypes.bool,
            read: PropTypes.bool
        })).isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            emails: props.emails,
            filterText: '',
            selectedEmails: {},
            selectedEmailId: 0,
            showUnread: false,
            showDeleted: false
        };
    }

    handleInputChange(name, value) {
        this.setState({[name]: value});
    }

    handleEmailRowSelected(id) {
        this.setState({selectedEmailId: id});
    }

    handleClearSelectedEmailRow() {
        this.setState({selectedEmailId: 0});
    }

    handleEmailSelected(id, selected) {
        let {selectedEmails} = this.state;

        selectedEmails[id] = selected;
        this.setState({selectedEmails});
    }

    handleClearSelectedEmais() {
        this.setState({selectedEmails: {}});
    }

    handleMarkAsRead() {
        let {emails, selectedEmails} = this.state;
        let modifiedEmails = _.map(emails, (email) => {
            if (selectedEmails[email.id]) {
                email.read = true;
            }
            return email;
        });

        this.setState({
            emails: modifiedEmails,
            selectedEmailId: 0
        });
    }

    handleMarkAsUnread() {
        let {emails, selectedEmails} = this.state;
        let modifiedEmails = _.map(emails, (email) => {
            if (selectedEmails[email.id]) {
                email.read = false;
            }
            return email;
        });

        this.setState({
            emails: modifiedEmails,
            selectedEmailId: 0
        });
    }

    handleMarkAsDeleted() {
        let {emails, selectedEmails} = this.state;
        let modifiedEmails = _.map(emails, (email) => {
            if (selectedEmails[email.id]) {
                email.deleted = true;
            }
            return email;
        });

        this.setState({
            emails: modifiedEmails,
            selectedEmailId: 0
        });
    }

    handleMarkAsNotDeleted() {
        let {emails, selectedEmails} = this.state;
        let modifiedEmails = _.map(emails, (email) => {
            if (selectedEmails[email.id]) {
                email.deleted = false;
            }
            return email;
        });

        this.setState({
            emails: modifiedEmails,
            selectedEmailId: 0
        });
    }

    render() {
        let {
            emails,
            filterText,
            selectedEmails,
            selectedEmailId,
            showUnread,
            showDeleted
        } = this.state;
        let emailDetailsContent = null;

        if (selectedEmailId) {
            emailDetailsContent = (
                <EmailDetails
                    email={getSelectedEmail(emails, selectedEmailId)}
                    onEmailDetailsCloseClicked={this.handleClearSelectedEmailRow.bind(this)}
                />
            );
        }

        return(
            <div>
                <Filter
                    filterText={filterText}
                    onInputChange={this.handleInputChange.bind(this)}
                    showDeleted={showDeleted}
                    showUnread={showUnread}
                />
                <Actions
                    onClearSelectedEmailsClicked={this.handleClearSelectedEmais.bind(this)}
                    onMarkAsReadClicked={this.handleMarkAsRead.bind(this)}
                    onMarkAsUnreadClicked={this.handleMarkAsUnread.bind(this)}
                    onMarkAsDeletedClicked={this.handleMarkAsDeleted.bind(this)}
                    onMarkAsNotDeletedClicked={this.handleMarkAsNotDeleted.bind(this)}
                    showButtons={hasSelectedEmails(selectedEmails)}
                />
                <EmailList
                    emails={emails}
                    filterText={filterText}
                    onEmailRowSelected={this.handleEmailRowSelected.bind(this)}
                    onEmailSelected={this.handleEmailSelected.bind(this)}
                    selectedEmails={selectedEmails}
                    showDeleted={showDeleted}
                    showUnread={showUnread}
                />
                {emailDetailsContent}
            </div>
        );
    }
}
