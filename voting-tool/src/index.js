import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const store = configureStore();

const setTheme = createMuiTheme({
  typography: { useNextVariants: true },
  palette: {
    primary: { main: '#E39B48' },
    secondary: { main: '#FFBED6' },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={setTheme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
