import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tickets, currency } from '../actions';
import { filterTickets, updateTicketsPriceByRate } from '../utils/tickets';

import TilesList from '../components/TilesList';
import Ticket from '../components/Ticket';
import NotifyMeassage from '../components/NotifyMeassage';

class TicketsListContainer extends Component {
  state = {
    tickets: this.props.tickets,
    filteredTickets: this.props.tickets
  };

  componentDidMount() {
    this.fetchTickets();
    this.fetchCurrencyRates();
  }

  fetchTickets() {
    const { actions } = this.props;

    actions.fetchTicketsList();
  }

  fetchCurrencyRates() {
    const { actions } = this.props;

    actions.fetchCurrencyRates();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tickets !== this.props.tickets ||
      prevProps.checkedCurrencyIndex !== this.props.checkedCurrencyIndex) {
      this.updateTicketsPrice();
    }

    if (prevState.tickets !== this.state.tickets ||
      prevProps.filters !== this.props.filters) {
      this.filterTickets();
    }
  }

  filterTickets() {
    const newTickets = filterTickets(this.state.tickets, this.props.filters);

    this.setState(prevState => ({
      ...prevState,
      filteredTickets: newTickets,
    }));
  }

  updateTicketsPrice() {
    const { currencyRates, currencies, checkedCurrencyIndex } = this.props;
    const currentCurrencyRate = currencyRates[currencies[checkedCurrencyIndex]];
    const newTickets = updateTicketsPriceByRate(this.props.tickets, currentCurrencyRate);

    this.setState(prevState => ({
      ...prevState,
      tickets: newTickets,
    }));
  }

  render() {
    const { isLoading, isLoaded, hasError, currencies, checkedCurrencyIndex } = this.props;
    const { filteredTickets: tickets } = this.state;

    return (
      <Fragment>
        {hasError &&
          <NotifyMeassage type="error">
            Упс, что то случилось. Попробуйте перезагрузить страницу. Не волнуйтесь, скоро мы все починим <span role="img" aria-label="wing">😉</span>
          </NotifyMeassage>}
        {isLoading &&
          <NotifyMeassage type="loading">
            <span role="img" aria-label="loading">🧘‍♀️</span>
          </NotifyMeassage>}
        {isLoaded && tickets.length > 0 &&
          <TilesList>
            {tickets.map((ticket, index) => (
              <Ticket
                key={index}
                data={ticket}
                currency={currencies[checkedCurrencyIndex]}/>
            ))}
          </TilesList>}
      </Fragment>
    );
  }
}

TicketsListContainer.propTypes = {
  tickets: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  filters: PropTypes.array.isRequired,
  currencyRates: PropTypes.object.isRequired,
  currencies: PropTypes.array.isRequired,
  checkedCurrencyIndex: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets.tickets,
    isLoading: state.tickets.isLoading,
    isLoaded: state.tickets.isLoaded,
    hasError: state.tickets.hasError,
    filters: state.filters,
    currencyRates: state.currency.currencyRates,
    currencies: state.currency.currencies,
    checkedCurrencyIndex: state.currency.checkedCurrencyIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...tickets,
      ...currency,
    }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketsListContainer);
