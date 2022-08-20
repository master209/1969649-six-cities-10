import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';

import HistoryRouter from '../src/components/history-route/history-route';
import browserHistory from './browser-history';
import App from './components/app/app';

import {store} from './store';
import {fetchCheckAuth} from './store/api-actions/api-actions';

import {getEmail} from './services/email';

import 'react-toastify/dist/ReactToastify.css';

const email = getEmail();
store.dispatch(fetchCheckAuth(email));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
