import React from 'react';
import {Container} from 'flux/utils';

import FilterStore from './FilterStore';
import Filter from './Filter';
import {
    filterChange,
    showUnread,
    showDeleted
} from './FilterActions';

class FilterContainer extends React.Component {
    static getStores() {
        return [FilterStore];
    }

    static calculateState() {
        return {
            ...FilterStore.getState(),
            onFilterText: filterChange,
            onShowDeleted: showDeleted,
            onShowUnread: showUnread
        };
    }

    render() {
        return <Filter {...this.state} />;
    }
}

export default Container.create(FilterContainer);
