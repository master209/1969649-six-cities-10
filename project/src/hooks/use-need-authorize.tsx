import {useNavigate} from 'react-router-dom';

import useAppSelectors from '../hooks/use-app-selectors';

import useIsAuthorized from './use-is-authorized';

import {AppRoute} from '../const';

// если пользователь авторизован, но сервер вернул 401, то нужна повторная авторизация
const useNeedAuthorize = () => {
  const navigate = useNavigate();
  const isAuthorized = useIsAuthorized();
  const {isError401} = useAppSelectors();

  if (isAuthorized && isError401) {
    /* eslint-disable-next-line no-console */
    console.log('useNeedAuthorize');

    navigate(AppRoute.Login);
  }
};

export default useNeedAuthorize;
