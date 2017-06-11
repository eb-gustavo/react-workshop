import React from 'react';
import PropTypes from 'prop-types';

export default class Filter extends React.Component {
    static propTypes = {
        filterText: PropTypes.string.isRequired,
        onFilterText: PropTypes.func.isRequired,
        onShowDeleted: PropTypes.func.isRequired,
        onShowUnread: PropTypes.func.isRequired,
        showDeleted: PropTypes.bool,
        showUnread: PropTypes.bool
    }

    handleFiterTextChange(e) {
        let {onFilterText} = this.props;
        let {value} = e.target;

        onFilterText(value);
    }

    handleShowDeletedChange(e) {
        let {onShowDeleted} = this.props;
        let {checked} = e.target;

        onShowDeleted(checked);
    }

    handleShowUnreadChange(e) {
        let {onShowUnread} = this.props;
        let {checked} = e.target;

        onShowUnread(checked);
    }

    render() {
        let {filterText, showUnread, showDeleted} = this.props;

        return (
            <form>
                <input
                    name='filterText'
                    type='text'
                    placeholder='Search...'
                    value={filterText}
                    onChange={this.handleFiterTextChange.bind(this)}
                />
                <label>
                    <input
                        name='showUnread'
                        type='checkbox'
                        checked={showUnread}
                        onChange={this.handleShowUnreadChange.bind(this)}
                    />
                    Show unread
                </label>
                <label>
                    <input
                        name='showDeleted'
                        type='checkbox'
                        checked={showDeleted}
                        onChange={this.handleShowDeletedChange.bind(this)}
                    />
                    Show deleted
                </label>
            </form>
        );
    }
}
