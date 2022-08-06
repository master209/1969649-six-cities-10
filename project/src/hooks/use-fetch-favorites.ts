import {useEffect} from 'react';

import {fetchLoadFavorites} from '../store/api-actions';
import {setFavoritesStatus} from '../store/main-process/main-process';

import {useAppDispatch} from '.';
import useIsAuthorized from '../hooks/use-is-authorized';
import useAppSelectors from '../hooks/use-app-selectors';

const useFetchFavorites = () => {
  const dispatch = useAppDispatch();
  const isAuthorized = useIsAuthorized();
  const {favorites, isFavoritesLoading, isFavoritesLoaded} = useAppSelectors();

  useEffect((): void => {
    isAuthorized
    && (!isFavoritesLoaded && !isFavoritesLoading)
    && dispatch(fetchLoadFavorites());
  },[]);

  useEffect((): void => {
    dispatch(setFavoritesStatus({favorites}));
  },[favorites]);

  return [favorites, isFavoritesLoading, isFavoritesLoaded];
};

export default useFetchFavorites;
