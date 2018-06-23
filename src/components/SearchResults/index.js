import React, { Component } from 'react';

import ResultsGrid from './ResultsGrid';

class SearchResults extends Component {
  state={
    repos: []
  }

  render() {
    return <ResultsGrid />
  }
}

export default SearchResults;
