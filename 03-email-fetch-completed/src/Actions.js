import React from 'react';
import PropTypes from 'prop-types';

export default class Actions extends React.Component {
    static propTypes = {
        onClearSelectedEmailsClicked: PropTypes.func.isRequired,
        onMarkAsDeletedClicked: PropTypes.func.isRequired,
        onMarkAsReadClicked: PropTypes.func.isRequired,
        onMarkAsUnreadClicked: PropTypes.func.isRequired,
        showButtons: PropTypes.bool
    }

    handleClearSelectedEmaisClicked() {
        let {onClearSelectedEmailsClicked} = this.props;

        onClearSelectedEmailsClicked();
    }

    handleMarkAsReadClicked() {
        let {onMarkAsReadClicked} = this.props;

        onMarkAsReadClicked();
    }

    handleMarkAsUnreadClicked() {
        let {onMarkAsUnreadClicked} = this.props;

        onMarkAsUnreadClicked();
    }

    handleMarkAsDeletedClicked() {
        let {onMarkAsDeletedClicked} = this.props;

        onMarkAsDeletedClicked();
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
        return(
            <div>
                {content}
            </div>
        );
    }
}
