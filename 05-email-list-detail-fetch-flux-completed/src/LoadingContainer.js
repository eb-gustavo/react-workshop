import React from 'react';
import {Container} from 'flux/utils';

import Loading from './Loading'
import LoadingStore from './LoadingStore';

class LoadingContainer extends React.Component {
    static getStores() {
        return [LoadingStore];
    }

    static calculateState() {
        return {
            ...LoadingStore.getState()
        };
    }

    render() {
        return <Loading {...this.state} />;
    }
}

export default Container.create(LoadingContainer);
