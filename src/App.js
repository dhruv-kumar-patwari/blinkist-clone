import React from 'react';
import Page from './component/page/Page'
import { theme } from './Theme/Theme'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Auth0Provider } from '@auth0/auth0-react';


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
  return (
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Page />
    </ThemeProvider>
  </Auth0Provider>
  );
}

export default App;
