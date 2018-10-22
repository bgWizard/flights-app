import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filters, currency } from '../actions';
import { filterName } from '../constants/common';

import Filters from '../components/Filters';
import Filter from '../components/Filter';
import CheckboxesList from '../components/CheckboxesList';
import Checkbox from '../components/Checkbox';
import Switcher from '../components/Switcher';
import NotifyMeassage from '../components/NotifyMeassage';

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

    actions.toggleFilterByIndex(filterIndex);
  };

  onOnlyOneFilterClick = (filterIndex) => () => {
    const { actions } = this.props;

    actions.uncheckAllFilters();
    actions.toggleFilterByIndex(filterIndex);
  };

  onCurrencyChange = (index) => () => {
    const { actions } = this.props;

    actions.toggleCurrencyByIndex(index);
  };

  render() {
    const {
      filters,
      currencies,
      checkedCurrencyIndex,
      currencyIsLoaded,
      currencyIsLoading,
      currencyHasError
    } = this.props;

    return (
      <Filters>
        <Fragment>
          {currencyHasError &&
            <NotifyMeassage type="error">
              К сожалению смена валюты пока не доступна <span role="img" aria-label="sad">😔</span>
            </NotifyMeassage>}
          {currencyIsLoading &&
          <NotifyMeassage type="loading">
            <span role="img" aria-label="loading">🧘‍♂️</span>
          </NotifyMeassage>}
          {currencyIsLoaded &&
            <Filter title="ВАЛЮТА">
              <Switcher
                activeItemIndex={checkedCurrencyIndex}
                onChange={this.onCurrencyChange}>
                {currencies}
              </Switcher>
            </Filter>}
        </Fragment>
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
  currencies: PropTypes.array.isRequired,
  checkedCurrencyIndex: PropTypes.number.isRequired,
  currencyHasError: PropTypes.bool.isRequired,
  currencyIsLoading: PropTypes.bool.isRequired,
  currencyIsLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    currencyHasError: state.currency.hasError,
    currencyIsLoading: state.currency.isLoading,
    currencyIsLoaded: state.currency.isLoaded,
    currencies: state.currency.currencies,
    checkedCurrencyIndex: state.currency.checkedCurrencyIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...filters,
      ...currency,
    }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer);
