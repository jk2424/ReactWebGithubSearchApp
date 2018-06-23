import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const styles = {
  withGradient: {
    height: 360,
    background: 'linear-gradient(to bottom, #5a4ba3 0%, #7b3795 100%)',
  },

  contentWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
  },
};

class App extends Component {
  state={
    language: '',
    starts: ''
  };

  handleSearchSumbit = (language = '', stars = '') => {

  }

  render() {
    const { classes } = this.props;
    const { lanuage, stars } = this.state;

    return (
      <main>
        <CssBaseline />

        <section className={classes.withGradient}>
          <section className={classes.contentWrapper}>
            <SearchForm />
          </section>

          <section>
            <SearchResults />
          </section>
        </section>
      </main>
    );
  }
}

export default withStyles(styles)(App);
// export default App;
