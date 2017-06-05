import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class Actions extends React.Component {
    static propTypes = {
        onEmailDetailsClose: PropTypes.func.isRequired,
        email: PropTypes.shape({
            date: PropTypes.string,
            from: PropTypes.string,
            message: PropTypes.string,
            subject: PropTypes.string
        })
    }

    handleCloseClicked() {
        let {onEmailDetailsClose} = this.props;

        onEmailDetailsClose();
    }

    render() {
        let {email} = this.props;
        let component = null;

        if (!_.isEmpty(email)) {
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
