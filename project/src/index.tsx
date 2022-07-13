import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';
import {AuthorizationStatus} from './const';

// пока в приложении нет логики авторизации, здесь можно явно задать состояние
const authorizationStatus = AuthorizationStatus.NoAuth; //Auth

const Setting = {
  PLACES_FOUND: 312,
  isGuest: authorizationStatus === AuthorizationStatus.NoAuth, //через перечисление это условие выдает ошибку
};


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      isGuest={Setting.isGuest}
      placesFound = {Setting.PLACES_FOUND}
    />
  </React.StrictMode>,
);
