import {useEffect} from 'react';

import {fetchLoadFavorites} from '../store/api-actions';
import {setOffersFavoriteStatus} from '../store/main-process/main-process';
import {setOffersNearFavoriteStatus} from '../store/offer-data/offer-data';

import {useAppDispatch} from '.';
import useIsAuthorized from './is-authorized';
import useAppSelectors from './app-selectors';

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
    dispatch(setOffersFavoriteStatus({favorites}));
    dispatch(setOffersNearFavoriteStatus({favorites}));
  },[favorites]);

  return [favorites, isFavoritesLoading, isFavoritesLoaded];
};

export default useFetchFavorites;
