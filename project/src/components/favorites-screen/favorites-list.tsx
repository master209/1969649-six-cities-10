import {Link} from 'react-router-dom';

import FavoritesEmptyScreen from '../../pages/favorites-empty-screen/favorites-empty-screen';
import {FavoritesCard} from './';

import useAppSelectors from '../../hooks/use-app-selectors';

import {Offer} from '../../types/offers';

import {AppRoute, cities} from '../../const';

type FavoritesListProps = {
  onChangeCity: (city: string) => void;
};

/* «Список избранных предложений» */
function FavoritesList({onChangeCity}: FavoritesListProps): JSX.Element {
  const {favorites, isFavoritesLoaded} = useAppSelectors();

  // вычисляет количество favorites в городе city
  const favoritesByCityCount = (city: string): number =>
    favorites.reduce((acc, next: Offer) =>
      next.city.name === city ? ++acc : acc, 0);

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
