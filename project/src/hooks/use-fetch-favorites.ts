import {useEffect} from 'react';

import {fetchFavoritesAction} from '../store/api-actions';
import {setFavoritesStatus} from '../store/main-process/main-process';

import {
  getFavorites,
  getIsFavoriteLoading,
  getIsFavoritesLoaded
} from '../store/favorite-data/selectors';

import {useAppDispatch, useAppSelector} from '.';
import useIsAuthorized from '../hooks/use-is-authorized';

const useFetchFavorites = () => {
  const dispatch = useAppDispatch();
  const isAuthorized = useIsAuthorized();

  const favorites = useAppSelector(getFavorites);
  const isFavoritesLoading = useAppSelector(getIsFavoriteLoading);
  const isFavoritesLoaded = useAppSelector(getIsFavoritesLoaded);

  useEffect((): void => {
    isAuthorized
    && (!isFavoritesLoaded && !isFavoritesLoading)
    && dispatch(fetchFavoritesAction());
  },[]);

  useEffect((): void => {
    isAuthorized
    && isFavoritesLoaded
    && dispatch(setFavoritesStatus({favorites}));
  },[favorites]);

  return [favorites, isFavoritesLoading, isFavoritesLoaded];
};

export default useFetchFavorites;
