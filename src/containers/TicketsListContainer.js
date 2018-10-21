import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/tickets';

import TilesList from '../components/TilesList';
import Ticket from '../components/Ticket';

class TicketsListContainer extends Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.fetchTicketsList();
  }

  render() {
    const { tickets, isLoading, isLoaded } = this.props;

    return (
      <Fragment>
        {isLoading &&
          <p>
            Loading...
          </p>}
        {isLoaded && tickets.length > 0 &&
          <TilesList
            items={tickets}
            ItemComponent={Ticket}/>}
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
};

function mapStateToProps(state) {
  return {
    tickets: state.tickets.tickets,
    isLoading: state.tickets.isLoading,
    isLoaded: state.tickets.isLoaded,
    hasError: state.tickets.hasError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketsListContainer);
