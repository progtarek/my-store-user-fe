import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './layouts/Home/Home';

const history = createBrowserHistory();
const store = configureStore({ language: 'en' });

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
