import FavoritesEmptyScreen from '../../pages/favorites-empty-screen/favorites-empty-screen';
import {FavoritesCard} from './';

import {getFavorites, getIsFavoritesLoaded} from '../../store/favorite-data/selectors';

import {useAppSelector} from '../../hooks';

import {Offer} from '../../types/offers';

import {cities} from '../../const';

/* «Список избранных предложений» */
function FavoritesList(): JSX.Element {
  const favorites = useAppSelector(getFavorites);
  const isFavoritesLoaded = useAppSelector(getIsFavoritesLoaded);

  // вычисляет количество favorites в городе city
  const favoritesByCityCount = (city: string): number =>
    favorites.reduce((acc, item: Offer) =>
      item.city.name === city ? ++acc : 0, 0);

  const renderFavorites = () => (
    <ul className="favorites__list">
      {cities.map((city) =>
        favoritesByCityCount(city)
          ?
          (
            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#todo">
                    <span>{city}</span>
                  </a>
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
