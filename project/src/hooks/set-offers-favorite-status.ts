import {useEffect} from 'react';

import {fetchLoadFavorites} from '../store/api-actions';
import {setOffersFavoriteStatus} from '../store/main-process/main-process';
import {setOffersNearFavoriteStatus} from '../store/offer-data/offer-data';

import {useAppDispatch} from '.';
import useAppSelectors from './app-selectors';

const useSetOffersFavoriteStatus = (isForNear?: boolean) => {
  const dispatch = useAppDispatch();
  const {favorites, isFavoritesLoading, isFavoritesLoaded} = useAppSelectors();

  useEffect((): void => {
    !isFavoritesLoaded && !isFavoritesLoading && dispatch(fetchLoadFavorites());
  },[isFavoritesLoaded, isFavoritesLoading]);

  useEffect((): void => {
    isForNear
      ? dispatch(setOffersNearFavoriteStatus({favorites}))
      : dispatch(setOffersFavoriteStatus({favorites}));
  },[favorites]);

  return [favorites, isFavoritesLoading, isFavoritesLoaded];
};

export default useSetOffersFavoriteStatus;
