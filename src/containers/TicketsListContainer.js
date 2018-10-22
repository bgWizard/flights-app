import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tickets } from '../actions';
import { filterTickets, updateTicketsPriceByRate } from '../utils/tickets';

import TilesList from '../components/TilesList';
import Ticket from '../components/Ticket';

class TicketsListContainer extends Component {
  state = {
    tickets: this.props.tickets,
    filteredTickets: this.props.tickets
  };

  componentDidMount() {
    this.fetchTickets();
  }

  fetchTickets() {
    const { actions } = this.props;

    actions.fetchTicketsList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tickets !== this.props.tickets ||
      prevProps.currencyRate !== this.props.currencyRate) {
      this.updateTicketsPrice();
    }

    if (prevState.tickets !== this.state.tickets ||
      prevProps.filters !== this.props.filters) {
      this.filterTickets();
    }
  }

  filterTickets() {
    console.log('filterTickets');
    const newTickets = filterTickets(this.state.tickets, this.props.filters);

    this.setState(prevState => ({
      ...prevState,
      filteredTickets: newTickets,
    }));
  }

  updateTicketsPrice() {
    console.log('updateTicketsPrice');
    const newTickets = updateTicketsPriceByRate(this.props.tickets, this.props.currencyRate);

    this.setState(prevState => ({
      ...prevState,
      tickets: newTickets,
    }));
  }

  render() {
    const { isLoading, isLoaded, currencies, checkedCurrencyIndex } = this.props;
    const { tickets } = this.state;

    return (
      <Fragment>
        {isLoading &&
          <p>
            Loading...
          </p>}
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
  currencyRate: PropTypes.number.isRequired,
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
    currencyRate: state.currency.currencyRate,
    currencies: state.currency.currencies,
    checkedCurrencyIndex: state.currency.checkedCurrencyIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(tickets, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketsListContainer);
