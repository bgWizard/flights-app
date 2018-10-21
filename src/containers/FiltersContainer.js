import React, { Component } from 'react';

import Filters from '../components/Filters';
import Filter from '../components/Filter';
import CheckboxesList from '../components/CheckboxesList';
import Checkbox from '../components/Checkbox';

class FiltersContainer extends Component {
  render() {
    return (
      <Filters>
        <Filter title="Currency">
          inner
        </Filter>
        <Filter title="Количество пересадок">
          <CheckboxesList>
            <Checkbox
              id='test'
              classMod='primary'
              onChange={console.log.bind(null, 'checkbox checked')}
              labelText='Text checkbox'/>
            <Checkbox
              id='test2'
              classMod='primary'
              labelText='Text checkbox 2'/>
          </CheckboxesList>
        </Filter>
      </Filters>
    );
  }
}

export default FiltersContainer;
