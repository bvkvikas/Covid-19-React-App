import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import {
  getTotalCases,
  getCountrywiseCases,
  getTimeLine
} from './store/actions';

const store = configureStore();

store.dispatch(getTotalCases());
store.dispatch(getCountrywiseCases());
store.dispatch(getTimeLine('Global'));

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <>
      <App />
    </>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
