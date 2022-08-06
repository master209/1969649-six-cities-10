import {useAppSelector} from '.';

import {getAuthorizationStatus} from '../store/user-process/selectors';

import {
  getOffers,
  getActiveCity,
  getSortBy,
  getIsSortListCollapsed,
  getIsOffersLoading,
  getIsOffersLoaded,
} from '../store/main-process/selectors';

import {
  getOffer,
  getOffersNear,
  getComments,
  getIsError404,
  getIsLoading
} from '../store/offer-data/selectors';

import {
  getFavorites,
  getIsError401,
  getIsFavoritesLoading,
  getIsFavoritesLoaded
} from '../store/favorite-data/selectors';

const useAppSelectors = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const offers = useAppSelector(getOffers);
  const activeCity = useAppSelector(getActiveCity);
  const sortBy = useAppSelector(getSortBy);
  const isSortListCollapsed = useAppSelector(getIsSortListCollapsed);
  const isOffersLoading = useAppSelector(getIsOffersLoading);
  const isOffersLoaded = useAppSelector(getIsOffersLoaded);

  const offer = useAppSelector(getOffer);
  const offersNear = useAppSelector(getOffersNear);
  const comments = useAppSelector(getComments);
  const isError404 = useAppSelector(getIsError404);
  const isOfferLoading = useAppSelector(getIsLoading);

  const favorites = useAppSelector(getFavorites);
  const isError401 = useAppSelector(getIsError401);
  const isFavoritesLoading = useAppSelector(getIsFavoritesLoading);
  const isFavoritesLoaded = useAppSelector(getIsFavoritesLoaded);

  return {
    authorizationStatus,
    offers, activeCity, sortBy, isSortListCollapsed, isOffersLoading, isOffersLoaded,
    offer, offersNear, comments, isError404, isOfferLoading,
    favorites , isError401, isFavoritesLoading, isFavoritesLoaded,
  };
};

export default useAppSelectors;
