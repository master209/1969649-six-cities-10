import {useNavigate} from 'react-router-dom';

import {useAppSelector} from './index';
import {getIsError401} from '../store/favorite-data/selectors';

import useIsAuthorized from './use-is-authorized';

import {AppRoute} from '../const';

// если пользователь авторизован, но сервер вернул 401, то нужна повторная авторизация
const useNeedAuthorize = () => {
  const navigate = useNavigate();
  const isAuthorized = useIsAuthorized();

  const isError401 = useAppSelector(getIsError401);

  if (isAuthorized && isError401) {
    /* eslint-disable-next-line no-console */
    console.log('useNeedAuthorize');

    navigate(AppRoute.Login);
  }
};

export default useNeedAuthorize;
