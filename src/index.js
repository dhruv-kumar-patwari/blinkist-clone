import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'typeface-roboto'
import { theme } from './component/Theme/Theme'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <CssBaseline />
        <App />
    </ThemeProvider>,
  document.getElementById('root')
);