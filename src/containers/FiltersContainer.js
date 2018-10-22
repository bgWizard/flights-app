import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/filters';
import { filterName } from '../constants/common';

import Filters from '../components/Filters';
import Filter from '../components/Filter';
import CheckboxesList from '../components/CheckboxesList';
import Checkbox from '../components/Checkbox';

const filterNameMapping = {
  [filterName.ALL]: 'Все',
  [filterName.WITHOUT_STOPS]: 'Без пересадок',
  [filterName.ONE_STOP]: '1 пересадка',
  [filterName.TWO_STOPS]: '2 пересадки',
  [filterName.THREE_STOPS]: '3 пересадки',
};

class FiltersContainer extends Component {
  onFilterChange = (filterIndex, filter) => () => {
    const { actions } = this.props;

    if (filter.name === filterName.ALL) {
      if (filter.isChecked) {
        actions.uncheckAllFilters();
      } else {
        actions.checkAllFilters();
      }
      return;
    }

    actions.toggleFilterByName(filterIndex);
  };

  onOnlyOneFilterClick = (filterIndex) => () => {
    const { actions } = this.props;

    actions.uncheckAllFilters();
    actions.toggleFilterByName(filterIndex);
  };

  render() {
    const { filters } = this.props;

    return (
      <Filters>
        <Filter title="Currency">
          inner
        </Filter>
        <Filter title="Количество пересадок">
          <CheckboxesList
            onItemLinkClick={this.onOnlyOneFilterClick}
            classMod='sidebar'
            isFirstLinkDisabled={true}>
            {filters.map((filter, index) => (
              <Checkbox
                key={filter.name}
                id={filter.name}
                checked={filter.isChecked}
                onChange={this.onFilterChange(index, filter)}
                labelText={filterNameMapping[filter.name]}/>
            ))}
          </CheckboxesList>
        </Filter>
      </Filters>
    );
  }
}

FiltersContainer.propTypes = {
  filters: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer);
