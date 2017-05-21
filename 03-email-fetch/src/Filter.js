import React from 'react';
import PropTypes from 'prop-types';

export default class Filter extends React.Component {
    static propTypes = {
        filterText: PropTypes.string.isRequired,
        onInputChange: PropTypes.func.isRequired,
        showUnread: PropTypes.bool,
        showDeleted: PropTypes.bool
    }

    static defaultProps = {
        onInputChange: () => {}
    }

    handleInputChange(e) {
        let {onInputChange} = this.props;
        let {name, checked, type, value} = e.target;
        let inputValue = type === 'checkbox' ? checked : value;

        onInputChange(name, inputValue);
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
                    onChange={this.handleInputChange.bind(this)}
                />
                <label>
                    <input
                        name='showUnread'
                        type='checkbox'
                        checked={showUnread}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    Show unread
                </label>
                <label>
                    <input
                        name='showDeleted'
                        type='checkbox'
                        checked={showDeleted}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    Show deleted
                </label>
            </form>
        );
    }
}
