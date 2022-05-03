import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import React, { Component } from "react";
import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";


const muiCache = createCache({
  key: "mui",
  prepend: true,
});

class CustomStyleTable extends Component {
  state = {};
  
  getMuiTheme = () =>
    createTheme({
      components: {
        MUIDataTable: {
          root: {
            backgroundColor: "#FF000",
          },
          paper: {
            boxShadow: "none",
          },
        },
        MUIDataTableBodyCell: {
          styleOverrides: {
            root: {
              backgroundColor: "#ff0062",
            },
          },
        },
      },
    });

  render() {
    return (
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={this.getMuiTheme()}>{this.props.children}</ThemeProvider>
      </CacheProvider>
    );
  }
}

export default CustomStyleTable;
