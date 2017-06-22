import {connect} from 'react-redux'

import {
    filterByText,
    showDeleted,
    showUnread
} from '../actions/filter';
import Filter from '../components/Filter'

const _mapStateToProps = ({filter}) => ({
    filterText: filter.filterText,
    showDeleted: filter.showDeleted,
    showUnread: filter.showUnread
});

const _mapDispatchToProps = (dispatch) => ({
    onFilterText: (value) => dispatch(filterByText(value)),
    onShowDeleted: (checked) => dispatch(showDeleted(checked)),
    onShowUnread: (checked) => dispatch(showUnread(checked))
});

const FilterContainer = connect(
    _mapStateToProps,
    _mapDispatchToProps
)(Filter);

export default FilterContainer;
