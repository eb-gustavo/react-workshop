import React from 'react';
import {Container} from 'flux/utils';

import Filter from './Filter';
import FilterStore from './FilterStore';
import {
    filterByText,
    showDeleted,
    showUnread
} from './FilterActions';

class FilterContainer extends React.Component {
    static getStores() {
        return [FilterStore];
    }

    static calculateState() {
        return {
            ...FilterStore.getState(),

            onFilterText: filterByText,
            onShowDeleted: showDeleted,
            onShowUnread: showUnread
        };
    }

    render() {
        return <Filter {...this.state} />;
    }
}

export default Container.create(FilterContainer);
