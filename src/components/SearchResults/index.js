import React, { Component } from 'react';
import axios from 'axios';

import ResultsGrid from './ResultsGrid';
import { buildSearchURI } from '../../utils';

class SearchResults extends Component {
  state={
    repos: []
  }

  componentDidUpdate = async (prevProps, prevState) => {
    const {language, stars, searchInProgress} = this.props;

    if (prevState.repos !== this.state.repos){
      this.props.resetSearch();

      return;
    }

    if (searchInProgress) {

      const encodedURI = buildSearchURI({language,stars});
      const githubResponse = await axios.get(encodedURI);
      const repos = githubResponse.data.items.slice(0,14);

      console.log(repos);

      this.setState({repos});

    }

  };

  render() {
    return <ResultsGrid repos={this.state.repos}/>
  }
}

export default SearchResults;
