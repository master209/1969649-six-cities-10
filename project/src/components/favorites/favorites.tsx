import {Link} from 'react-router-dom';

import FavoritesEmptyScreen from '../../pages/favorites-empty-screen/favorites-empty-screen';
import OfferCard from '../offer-card/offer-card';

import useAppSelectors from '../../hooks/app-selectors';

import {Offer} from '../../types/offers';

import {AppRoute, cities} from '../../const';

type FavoritesProps = {
  onChangeCity: (city: string) => void;
};

/* «Список избранных предложений» */
function Favorites({onChangeCity}: FavoritesProps): JSX.Element {
  const {favorites, isFavoritesLoaded} = useAppSelectors();

  // вычисляет количество favorites в городе city
  const getFavoritesByCityCount = (city: string): number =>
    favorites.reduce((acc, next: Offer) =>
      next.city.name === city ? ++acc : acc, 0);

  const renderFavorites = () => (
    <ul className="favorites__list">
      {cities.map((city) =>
        getFavoritesByCityCount(city)
          ?
          (
            <li
              key={city}
              className="favorites__locations-items"
              onClick={() => onChangeCity(city)}
            >
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to={AppRoute.Main}>
                    <span>{city}</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                {favorites.map((favorite) => (
                  favorite.city.name === city && (
                    <OfferCard
                      key={favorite.id}
                      offer={favorite}
                      classPrefix="favorites"
                      imgSize={{width: 150, height: 110}}
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

export default Favorites;
