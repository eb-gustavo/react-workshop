import React from 'react';
import PropTypes from 'prop-types';

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
        emailId: PropTypes.number,
        onEmailDetailsClose: PropTypes.func.isRequired
    }

    static defaultProps = {
        onEmailDetailsClose: () => {}
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

    componentDidMount() {
        let {emailId} = this.props;

        this._fetchEmail(emailId);
    }

    componentWillReceiveProps(nextProps) {
        let {emailId} = nextProps;

        this._fetchEmail(emailId);
    }

    handleCloseClicked() {
        let {onEmailDetailsClose} = this.props;

        this.setState({email: {}})

        onEmailDetailsClose();
    }

    render() {
        let {
            email: {
                date,
                from,
                message,
                subject
            }
        } = this.state;

        return(
            <div>
                <button
                    onClick={this.handleCloseClicked.bind(this)}
                >
                    Close
                </button>
                <div>
                    <b>Subject:</b> <span>{subject}</span>
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
}
