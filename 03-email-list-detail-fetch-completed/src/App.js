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

const updateEmail = (emailId, data = {}) => (
    fetchJSON(`http://localhost:8080/emails/${emailId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
)

const deleteEmail = (emailId) => (
    fetchJSON(`http://localhost:8080/emails/${emailId}`, {
        method: 'DELETE'
    })
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
            .then((emails) => this.setState({emails, selectedEmails: {}, selectedEmailId: 0}))
            .catch((error) => console.error(error));
    }

    componentDidMount() {
        this._fetchEmails(this.state);
    }

    handleFiterTextChange(value) {
        this.setState({filterText: value});

        let prevState = this.state;

        prevState.filterText = value;
        this._fetchEmails(prevState);
    }

    handleShowDeletedChange(value) {
        this.setState({showDeleted: value});

        let prevState = this.state;

        prevState.showDeleted = value;
        this._fetchEmails(prevState);
    }

    handleShowUnreadChange(value) {
        this.setState({showUnread: value});

        let prevState = this.state;

        prevState.showUnread = value;
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
        let {selectedEmails} = this.state;
        let promise = Promise.resolve();

        _.each(selectedEmails, (value, emailId) => {
            if (value) {
                promise = promise.then(() => updateEmail(emailId, {read: true}));
            }
        });
        promise.then(() => this._fetchEmails(this.state));
    }

    handleMarkAsUnread() {
        let {selectedEmails} = this.state;
        let promise = Promise.resolve();

        _.each(selectedEmails, (value, emailId) => {
            if (value) {
                promise = promise.then(() => updateEmail(emailId, {read: false}));
            }
        });
        promise.then(() => this._fetchEmails(this.state));
    }

    handleMarkAsDeleted() {
        let {selectedEmails} = this.state;
        let promise = Promise.resolve();

        _.each(selectedEmails, (value, emailId) => {
            if (value) {
                promise = promise.then(() => deleteEmail(emailId));
            }
        });
        promise.then(() => this._fetchEmails(this.state));
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

        return (
            <div>
                <Filter
                    filterText={filterText}
                    showDeleted={showDeleted}
                    showUnread={showUnread}
                    onFilterText={this.handleFiterTextChange.bind(this)}
                    onShowDeleted={this.handleShowDeletedChange.bind(this)}
                    onShowUnread={this.handleShowUnreadChange.bind(this)}
                />
                <Actions
                    showButtons={hasSelectedEmails(selectedEmails)}
                    onClearSelectedEmails={this.handleClearSelectedEmais.bind(this)}
                    onMarkAsRead={this.handleMarkAsRead.bind(this)}
                    onMarkAsUnread={this.handleMarkAsUnread.bind(this)}
                    onMarkAsDeleted={this.handleMarkAsDeleted.bind(this)}
                />
                <EmailList
                    emails={emails}
                    onEmailRowSelected={this.handleEmailRowSelected.bind(this)}
                    onEmailSelected={this.handleEmailSelected.bind(this)}
                    selectedEmails={selectedEmails}
                />
                <EmailDetails
                    emailId={selectedEmailId}
                    onEmailDetailsClose={this.handleClearSelectedEmailRow.bind(this)}
                />
            </div>
        );
    }
}
