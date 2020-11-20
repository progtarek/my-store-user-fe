import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Router } from 'react-router-dom';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import App from './App';

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <I18nextProvider i18n={i18n}>
          <Suspense fallback='...loading'>
            <App />
          </Suspense>
        </I18nextProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
