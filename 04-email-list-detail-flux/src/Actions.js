import React from 'react';
import PropTypes from 'prop-types';

export default class Actions extends React.Component {
    static propTypes = {
        onClearSelectedEmails: PropTypes.func.isRequired,
        onMarkAsDeleted: PropTypes.func.isRequired,
        onMarkAsRead: PropTypes.func.isRequired,
        onMarkAsUnread: PropTypes.func.isRequired,
        showButtons: PropTypes.bool
    }

    handleClearSelectedEmaisClicked() {
        let {onClearSelectedEmails} = this.props;

        onClearSelectedEmails();
    }

    handleMarkAsReadClicked() {
        let {onMarkAsRead} = this.props;

        onMarkAsRead();
    }

    handleMarkAsUnreadClicked() {
        let {onMarkAsUnread} = this.props;

        onMarkAsUnread();
    }

    handleMarkAsDeletedClicked() {
        let {onMarkAsDeleted} = this.props;

        onMarkAsDeleted();
    }

    render() {
        let {showButtons} = this.props;
        let content = null;

        if (showButtons) {
            content = (
                <div>
                    <button
                        onClick={this.handleClearSelectedEmaisClicked.bind(this)}
                    >
                        Clear selection
                    </button>
                    <button
                        onClick={this.handleMarkAsReadClicked.bind(this)}
                    >
                        Mark as read
                    </button>
                    <button
                        onClick={this.handleMarkAsUnreadClicked.bind(this)}
                    >
                        Mark as unread
                    </button>
                    <button
                      onClick={this.handleMarkAsDeletedClicked.bind(this)}
                    >
                        Mark as deleted
                    </button>
                </div>
            );
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}
