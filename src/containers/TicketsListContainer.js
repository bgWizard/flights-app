import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/tickets';
import { filterTickets } from '../utils/tickets';

import TilesList from '../components/TilesList';
import Ticket from '../components/Ticket';

class TicketsListContainer extends Component {
  state = {
    tickets: [],
  };

  componentDidMount() {
    this.fetchTickets();
  }

  fetchTickets() {
    const { actions } = this.props;

    actions.fetchTicketsList();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filters !== this.props.filters ||
      prevProps.tickets !== this.props.tickets) {
      this.filterTickets();
    }
  }

  filterTickets() {
    const { filters, tickets } = this.props;

    const filteredTickets = filterTickets(tickets, filters);

    this.setState((prevState) => ({
      ...prevState,
      tickets: filteredTickets
    }))
  }

  render() {
    const { isLoading, isLoaded } = this.props;
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
                data={ticket}/>
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
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets.tickets,
    isLoading: state.tickets.isLoading,
    isLoaded: state.tickets.isLoaded,
    hasError: state.tickets.hasError,
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
)(TicketsListContainer);
