import React from 'react';
import PropTypes from 'prop-types';

export default class Actions extends React.Component {
    static propTypes = {
        onEmailDetailsClose: PropTypes.func.isRequired,
        email: PropTypes.shape({
            date: PropTypes.string.isRequired,
            from: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            subject: PropTypes.string.isRequired
        })
    }

    handleCloseClicked() {
        let {onEmailDetailsClose} = this.props;

        onEmailDetailsClose();
    }

    render() {
        let {email} = this.props;
        let component = null;

        if (email) {
            let {
                date,
                from,
                message,
                subject
            } = email;

            component = (
                <div>
                    <button
                        onClick={this.handleCloseClicked.bind(this)}
                    >
                        Close
                    </button>
                    <div>
                        <b>Subject:</b> {subject}
                    </div>
                    <div>
                        <b>Date:</b> {date}
                    </div>
                    <div>
                        <b>From:</b> {from}
                    </div>
                    <div>
                        <b>Message:</b> {message}
                    </div>
                </div>
            );
        }

        return (
            <div>
                {component}
            </div>
        );
    }
}
