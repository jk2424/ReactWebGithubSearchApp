import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  searchForm: {
    marginTop: 50
  },

  formWrapper: {
    display: "flex",
    marginTop: 30
  },

  headingText: {
    fontWeight: 300,
    letterSpacing: 1,
    color: "#fff"
  },

  textFieldLabel: {
    color: "#fff"
  },

  textFieldLarge: {
    width: 100,
    marginRight: 80
  },

  textFieldSmall: {
    width: 80
  },

  cssUnderline: {
    "&:before": {
      borderBottomColor: "#fff"
    },
    "&:after": {
      borderBottomColor: "#fff"
    }
  },

  cssLabel: {
    color: "#fff",
    "&$cssFocused": {
      color: "#fff"
    }
  },

  cssFocused: {},

  button: {
    marginTop: 50,
    background: "linear-gradient(135deg,#fd853a 0%,#fd6e37 100%)",
    color: "#fff",
    letterSpacing: 1,
    boxShadow: "none"
  }
};

class SearchForm extends Component {
  state = {
    language: "",
    stars: ""
  };

  render() {
    return <div />;
  }
}

export default SearchForm;
