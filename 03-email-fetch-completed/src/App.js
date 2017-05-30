import React from 'react';
import _ from 'lodash';
import {formatUrl} from 'url-lib';

import Actions from './Actions';
import EmailDetails from './EmailDetails';
import EmailList from './EmailList';
import Filter from './Filter';

const hasSelectedEmails = (selectedEmails) => _.some(selectedEmails, _.identity);

const checkStatus = (response = {}) => {
    if (response.status >= 300) {
        return Promise.reject(response);
    }
    return Promise.resolve(response);
};

const fetchJSON = (url, options = {}) => (
    fetch(url, options)
        .then(checkStatus)
        .then((response) => response.json())
)

const getEmails = (queryParams) => (
    fetchJSON(formatUrl('http://localhost:8080/emails', queryParams))
)

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emails: [],
            filterText: '',
            selectedEmails: {},
            selectedEmailId: 0,
            showUnread: false,
            showDeleted: false
        };
    }

    _fetchEmails({filterText, showDeleted, showUnread}) {
        let params = {
            deleted: showDeleted,
            q: filterText,
            unread: showUnread
        };

        getEmails(params)
            .then((emails) => this.setState({emails}))
            .catch((error) => console.error(error));
    }

    componentDidMount() {
        this._fetchEmails(this.state);
    }

    handleFilterChange(name, value) {
        this.setState({[name]: value});

        let prevState = this.state;

        prevState[name] = value;
        this._fetchEmails(prevState);
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
        // let {emails, selectedEmails} = this.state;
        // let modifiedEmails = _.map(emails, (email) => {
        //     if (selectedEmails[email.id]) {
        //         email.read = true;
        //     }
        //     return email;
        // });
        //
        // this.setState({
        //     emails: modifiedEmails,
        //     selectedEmailId: 0
        // });
    }

    handleMarkAsUnread() {
        // let {emails, selectedEmails} = this.state;
        // let modifiedEmails = _.map(emails, (email) => {
        //     if (selectedEmails[email.id]) {
        //         email.read = false;
        //     }
        //     return email;
        // });
        //
        // this.setState({
        //     emails: modifiedEmails,
        //     selectedEmailId: 0
        // });
    }

    handleMarkAsDeleted() {
        // let {emails, selectedEmails} = this.state;
        // let modifiedEmails = _.map(emails, (email) => {
        //     if (selectedEmails[email.id]) {
        //         email.deleted = true;
        //     }
        //     return email;
        // });
        //
        // this.setState({
        //     emails: modifiedEmails,
        //     selectedEmailId: 0
        // });
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
                    emailId={selectedEmailId}
                    onEmailDetailsCloseClicked={this.handleClearSelectedEmailRow.bind(this)}
                />
            );
        }

        return(
            <div>
                <Filter
                    filterText={filterText}
                    onInputChange={this.handleFilterChange.bind(this)}
                    showDeleted={showDeleted}
                    showUnread={showUnread}
                />
                <Actions
                    onClearSelectedEmailsClicked={this.handleClearSelectedEmais.bind(this)}
                    onMarkAsReadClicked={this.handleMarkAsRead.bind(this)}
                    onMarkAsUnreadClicked={this.handleMarkAsUnread.bind(this)}
                    onMarkAsDeletedClicked={this.handleMarkAsDeleted.bind(this)}
                    showButtons={hasSelectedEmails(selectedEmails)}
                />
                <EmailList
                    emails={emails}
                    onEmailRowSelected={this.handleEmailRowSelected.bind(this)}
                    onEmailSelected={this.handleEmailSelected.bind(this)}
                    selectedEmails={selectedEmails}
                />
                {emailDetailsContent}
            </div>
        );
    }
}
