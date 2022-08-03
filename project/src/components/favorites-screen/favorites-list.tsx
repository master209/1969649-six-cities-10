import {useEffect} from 'react';

import FavoritesEmptyScreen from '../../pages/favorites-empty-screen/favorites-empty-screen';
import {FavoritesCard} from './';
import {Loader} from '../../components/common';

import {fetchFavoritesAction} from '../../store/api-actions';
import {
  getFavorites,
  getIsFavoriteLoading,
  getIsFavoritesLoaded
} from '../../store/favorite-data/selectors';

import {useAppDispatch, useAppSelector} from '../../hooks';

/* «Список избранных предложений» */
function FavoritesList(): JSX.Element {
  const dispatch = useAppDispatch();

  const favorites = useAppSelector(getFavorites);
  const isFavoritesLoading = useAppSelector(getIsFavoriteLoading);
  const isFavoritesLoaded = useAppSelector(getIsFavoritesLoaded);

  useEffect((): void => {
    if (!isFavoritesLoaded && !isFavoritesLoading) {
      dispatch(fetchFavoritesAction());
      <Loader />;
    }
  },[]);

  return (
    <div className="page">
      {isFavoritesLoaded && favorites.length
        ? (
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#todo">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                <FavoritesCard offer={favorites[3]} />
                <FavoritesCard offer={favorites[1]} />
              </div>
            </li>
          </ul>
        )
        : <FavoritesEmptyScreen />}
    </div>
  );

}

export default FavoritesList;
