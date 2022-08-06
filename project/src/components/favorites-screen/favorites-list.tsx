import {Link} from 'react-router-dom';

import FavoritesEmptyScreen from '../../pages/favorites-empty-screen/favorites-empty-screen';
import {FavoritesCard} from './';

import {fetchLoadOffers} from '../../store/api-actions';
import {changeCity} from '../../store/main-process/main-process';
import {getFavorites, getIsFavoritesLoaded} from '../../store/favorite-data/selectors';

import {useAppSelector, useAppDispatch} from '../../hooks';

import {Offer} from '../../types/offers';

import {AppRoute, cities} from '../../const';

/* «Список избранных предложений» */
function FavoritesList(): JSX.Element {
  const dispatch = useAppDispatch();

  const favorites = useAppSelector(getFavorites);
  const isFavoritesLoaded = useAppSelector(getIsFavoritesLoaded);

  // вычисляет количество favorites в городе city
  const favoritesByCityCount = (city: string): number =>
    favorites.reduce((acc, next: Offer) =>
      next.city.name === city ? ++acc : acc, 0);

  const onChangeCity = (city: string) => {
    dispatch(changeCity({city}));
    dispatch(fetchLoadOffers(city));
  };

  const renderFavorites = () => (
    <ul className="favorites__list">
      {cities.map((city) =>
        favoritesByCityCount(city)
          ?
          (
            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div
                  className="locations__item"
                  onClick={() => onChangeCity(city)}
                >
                  <Link className="locations__item-link" to={AppRoute.Main}>
                    <span>{city}</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                {favorites.map((favorite) => (
                  favorite.city.name === city && (
                    <FavoritesCard
                      key={favorite.id}
                      offer={favorite}
                    />)
                ))}
              </div>
            </li>
          )
          : null
      )}
    </ul>
  );

  return (
    <div className="page">
      {isFavoritesLoaded && favorites.length
        ? renderFavorites()
        : <FavoritesEmptyScreen />}
    </div>
  );

}

export default FavoritesList;
