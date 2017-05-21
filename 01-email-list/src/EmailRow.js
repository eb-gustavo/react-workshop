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
        date: PropTypes.string.isRequired,
        from: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
        deleted: PropTypes.bool,
        read: PropTypes.bool
    }

    render() {
        let {
            date,
            deleted,
            from,
            read,
            subject
        } = this.props;

        return (
            <tr>
                <td>{_buildData(read, deleted, from)}</td>
                <td>{_buildData(read, deleted, subject)}</td>
                <td>{_buildData(read, deleted, date)}</td>
            </tr>
        );
    }
}
