import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'react-loading';

const loadingProps = {
    color: 'black',
    delay: 0,
    height: '64px',
    type: 'bubbles',
    width: '64px'
};

export default class LoadingView extends React.Component {
    static propTypes = {
        isLoading: PropTypes.bool
    }

    render() {
        let {isLoading} = this.props;
        let component = null;

        if (isLoading) {
            component = (
                <center>
                    <Loading {...loadingProps} />
                </center>
            );
        }

        return (
            <div>
                {component}
            </div>
        );
    }
}
