import {useNavigate} from 'react-router-dom';

import useAppSelectors from '../app-selectors';

import useIsAuthorized from '../is-authorized/is-authorized';

import {AppRoute} from '../../const';

// если пользователь авторизован, но сервер вернул 401, то нужна повторная авторизация
const useNeedAuthorize = (): any => {
  const navigate = useNavigate();
  const isAuthorized = useIsAuthorized();
  const {isError401} = useAppSelectors();

  if (isAuthorized && isError401) {
    return navigate(AppRoute.Login);
  }
};

export default useNeedAuthorize;
