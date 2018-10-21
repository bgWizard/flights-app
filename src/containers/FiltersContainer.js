import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/filterStops';
import { filterStopsNames } from '../constants/common';

import Filters from '../components/Filters';
import Filter from '../components/Filter';
import CheckboxesList from '../components/CheckboxesList';
import Checkbox from '../components/Checkbox';

const filterStopsNamesMapping = {
  [filterStopsNames.ALL]: 'Все',
  [filterStopsNames.WITHOUT_STOPS]: 'Без пересадок',
  [filterStopsNames.ONE_STOP]: '1 пересадка',
  [filterStopsNames.TWO_STOPS]: '2 пересадки',
  [filterStopsNames.THREE_STOPS]: '3 пересадки',
};

class FiltersContainer extends Component {
  onFilterStopsChange = (filterIndex, filter) => () => {
    const { actions } = this.props;

    if (filter.name === filterStopsNames.ALL) {
      if (filter.isChecked) {
        actions.uncheckAllStopsFilter();
      } else {
        actions.checkAllStopsFilter();
      }
      return;
    }

    actions.toggleStopFilterByName(filterIndex);
  };

  onOnlyOneFilterStopsClick = (filterIndex) => () => {
    const { actions } = this.props;

    actions.uncheckAllStopsFilter();
    actions.toggleStopFilterByName(filterIndex);
  };

  render() {
    const { filterStops } = this.props;

    return (
      <Filters>
        <Filter title="Currency">
          inner
        </Filter>
        <Filter title="Количество пересадок">
          <CheckboxesList
            onItemLinkClick={this.onOnlyOneFilterStopsClick}
            classMod='sidebar'
            isFirstLinkDisabled={true}>
            {filterStops.map((filter, index) => (
              <Checkbox
                key={filter.name}
                id={filter.name}
                checked={filter.isChecked}
                onChange={this.onFilterStopsChange(index, filter)}
                labelText={filterStopsNamesMapping[filter.name]}/>
            ))}
          </CheckboxesList>
        </Filter>
      </Filters>
    );
  }
}

FiltersContainer.propTypes = {
  filterStops: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    filterStops: state.filterStops,
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
