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
            filter: FilterStore.getState(),
            onFilterText: filterByText,
            onShowDeleted: showDeleted,
            onShowUnread: showUnread
        };
    }

    render() {
        let {filter, ...state} = this.state;

        return <Filter {...filter} {...state} />;
    }
}

export default Container.create(FilterContainer);
