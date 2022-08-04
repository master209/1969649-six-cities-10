import FavoritesEmptyScreen from '../../pages/favorites-empty-screen/favorites-empty-screen';
import {FavoritesCard} from './';

import {getFavorites, getIsFavoritesLoaded} from '../../store/favorite-data/selectors';

import {useAppSelector} from '../../hooks';

/* «Список избранных предложений» */
function FavoritesList(): JSX.Element {
  const favorites = useAppSelector(getFavorites);
  const isFavoritesLoaded = useAppSelector(getIsFavoritesLoaded);

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
                {favorites.map((favorite) => (
                  <FavoritesCard
                    key={favorite.id}
                    offer={favorite}
                  />
                ))}
              </div>
            </li>
          </ul>
        )
        : <FavoritesEmptyScreen />}
    </div>
  );

}

export default FavoritesList;
