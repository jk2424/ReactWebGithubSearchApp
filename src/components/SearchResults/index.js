import React, { Component } from 'react';
import axios from 'axios';

import ResultsGrid from './ResultsGrid';

class SearchResults extends Component {
  state={
    repos: []
  }

  componentDidUpdate = (prevProps, prevState) => {
    const {language, stars, searchInProgress} = this.props;

    //A search is in search in progress
    if (searchInProgress) {
      //wantt to build the URI to send out
      // Want to get a valid response
      // Parse
      // Set the state
      
    }
  }

  render() {
    return <ResultsGrid />
  }
}

export default SearchResults;
