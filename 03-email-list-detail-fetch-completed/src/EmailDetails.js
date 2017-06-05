import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

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

const getEmail = (id) => (
    fetchJSON(`http://localhost:8080/emails/${id}`)
)

export default class Actions extends React.Component {
    static propTypes = {
        onEmailDetailsClose: PropTypes.func.isRequired,
        emailId: PropTypes.number
    }

    constructor(props) {
        super(props);

        this.state = {
            email: {}
        };
    }

    _fetchEmail(id) {
        getEmail(id)
            .then((email) => this.setState({email}))
            .catch((error) => console.error(error));
    }

    componentWillReceiveProps(nextProps) {
        let {emailId} = nextProps;

        if (emailId) {
            this._fetchEmail(emailId);
        } else {
            this.setState({email: {}});
        }
    }

    handleCloseClicked() {
        let {onEmailDetailsClose} = this.props;

        this.setState({email: {}})

        onEmailDetailsClose();
    }

    render() {
        let {email} = this.state;
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
                        <b>Message:</b>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: message}} />
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
