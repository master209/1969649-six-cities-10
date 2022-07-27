import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';

import {
  changeCity,
  changeSort,
  loadOffers,
  loadPoints
} from '../../store/action';

import {useAppSelector, useAppDispatch} from '../../hooks';

import {AppRoute} from '../../const';

type CitiesListProps = {
  cities: string[];
  activeCity: string;
};

//  «Список городов»
function CitiesList({cities, activeCity} : CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const {sortBy} = useAppSelector((state) => state);

  const onChangeCity = (ev: MouseEvent<HTMLElement>, city: string) => {
    ev.preventDefault();
    dispatch(changeCity({city}));
    dispatch(loadOffers());
    dispatch(loadPoints());
    dispatch(changeSort({sort:sortBy}));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            const activeClass = `locations__item-link tabs__item${(city === activeCity) ? '--active' : ''}`;
            return (
              <li key={city} className="locations__item">
                <Link className={activeClass} to={AppRoute.Main}
                  onClick={(ev) => onChangeCity(ev, city)}
                >
                  <span>{city}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
