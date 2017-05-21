import React from 'react';
import PropTypes from 'prop-types';

import EmailList from './EmailList';
import Filter from './Filter';

export default class App extends React.Component {
    static propTypes = {
        emails: PropTypes.arrayOf(PropTypes.shape({
            date: PropTypes.string.isRequired,
            from: PropTypes.string.isRequired,
            subject: PropTypes.string.isRequired
        })).isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            filterText: '',
            showUnread: false,
            showDeleted: false
        };
    }

    handleFilterTextChange(value) {
        this.setState({filterText: value});
    }

    handleShowDeletedChange(value) {
        this.setState({showDeleted: value});
    }

    handleShowUnreadChange(value) {
        this.setState({showUnread: value});
    }

    render() {
        let {emails} = this.props;

        return(
            <div>
                <Filter
                    onFilterTextValueChanged={this.handleFilterTextChange.bind(this)}
                    onShowDeletedValueChanged={this.handleShowDeletedChange.bind(this)}
                    onShowUnreadValueChanged={this.handleShowUnreadChange.bind(this)}
                    {...this.state}
                />
                <EmailList
                    emails={emails}
                    {...this.state}
                />
            </div>
        );
    }
}
