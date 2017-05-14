import React from 'react';
import PropTypes from 'prop-types';

export default class Filter extends React.Component {
    static propTypes = {
        filterText: PropTypes.string.isRequired,
        onFilterTextValueChanged: PropTypes.func.isRequired,
        onShowDeletedValueChanged: PropTypes.func.isRequired,
        onShowUnreadValueChanged: PropTypes.func.isRequired,
        showUnread: PropTypes.bool,
        showDeleted: PropTypes.bool
    }

    static defaultProps = {
        onFilterTextValueChanged: () => {},
        onShowDeletedValueChanged: () => {},
        onShowUnreadValueChanged: () => {}
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextValueChanged(e.target.value);
    }

    handleShowDeletedInputChange(e) {
        this.props.onShowDeletedValueChanged(e.target.checked);
    }

    handleShowUnreadInputChange(e) {
        this.props.onShowUnreadValueChanged(e.target.checked);
    }

    render() {
        let {filterText, showUnread, showDeleted} = this.props;

        return (
            <div>
                <div>
                    <input
                        type='text'
                        placeholder='Search...'
                        value={filterText}
                        onChange={this.handleFilterTextInputChange.bind(this)}
                    />
                </div>
                <div>
                    <input
                        type='checkbox'
                        checked={showUnread}
                        onChange={this.handleShowUnreadInputChange.bind(this)}
                    /> Show unread
                    <input
                        type='checkbox'
                        checked={showDeleted}
                        onChange={this.handleShowDeletedInputChange.bind(this)}
                    /> Show deleted
                </div>
            </div>
        );
    }
}
