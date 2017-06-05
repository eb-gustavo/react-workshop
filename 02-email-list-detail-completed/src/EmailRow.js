import React from 'react';
import PropTypes from 'prop-types';

const _buildData = (isRead, isDeleted, data) => {
    let content = (<span>{data}</span>);

    if (!isRead) {
        content = (<b>{content}</b>);
    }

    if (isDeleted) {
        content = (<span style={{color: 'red'}}>{content}</span>);
    }

    return content;
};

export default class EmailRow extends React.Component {
    static propTypes = {
        email: PropTypes.shape({
            date: PropTypes.string.isRequired,
            from: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            subject: PropTypes.string.isRequired,
            deleted: PropTypes.bool,
            read: PropTypes.bool
        }).isRequired,
        onEmailRowSelected: PropTypes.func.isRequired,
        onEmailSelected: PropTypes.func.isRequired,
        isSelected: PropTypes.bool
    }

    handleEmailRowSelected() {
        let {email: {id}, onEmailRowSelected} = this.props;

        onEmailRowSelected(id);
    }

    handleEmailSelected(e) {
        let {email: {id}, onEmailSelected} = this.props;
        let {checked} = e.target;

        onEmailSelected(id, checked);
    }

    render() {
        let {
            email: {
                date,
                deleted,
                from,
                read,
                subject
            },
            isSelected
        } = this.props;

        return (
            <tr>
                <td>
                    <input
                        type='checkbox'
                        checked={isSelected}
                        onChange={this.handleEmailSelected.bind(this)}
                    />
                </td>
                <td onClick={this.handleEmailRowSelected.bind(this)}>{_buildData(read, deleted, from)}</td>
                <td onClick={this.handleEmailRowSelected.bind(this)}>{_buildData(read, deleted, subject)}</td>
                <td onClick={this.handleEmailRowSelected.bind(this)}>{_buildData(read, deleted, date)}</td>
            </tr>
        );
    }
}
