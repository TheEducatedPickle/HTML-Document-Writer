import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import { indigo, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blue,
  },
  typography: { useNextVariants: true },
});

function Palette() {
  return (
    <MuiThemeProvider theme={theme}>
      <App></App>
    </MuiThemeProvider>
  );
}

export default Palette;
