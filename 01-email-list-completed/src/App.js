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

    handleFiterTextChange(value) {
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
                    onFilterText={this.handleFiterTextChange.bind(this)}
                    onShowDeleted={this.handleShowDeletedChange.bind(this)}
                    onShowUnread={this.handleShowUnreadChange.bind(this)}
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
