import React, { Component } from 'react';
import { ReactComponent as Logo } from '../static/logo.svg';

import Filters from './FiltersContainer';
import TicketsList from './TicketsListContainer';

class App extends Component {
  render() {
    return (
      <main className="app">
        <header className="app__header">
          <Logo className="app__header-logo" alt="logo"/>
        </header>
        <section className="app__body">
          <aside className="app__sidebar">
            <Filters/>
          </aside>
          <div className="app__content">
            <TicketsList/>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
