import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createLogger from 'redux-logger';
import reducers from './reducers/index';
import promise from 'redux-promise';
import routes from './routes';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  logger, promise
)(createStore);

injectTapEventPlugin();

const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
