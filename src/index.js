import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';

import App from './App';

import "./scss/styles.scss";

import store from "./redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);