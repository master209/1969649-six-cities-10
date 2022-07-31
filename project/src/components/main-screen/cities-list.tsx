import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';

import {fetchOffersAction} from '../../store/api-actions';
import {changeCity} from '../../store/action';

import {useAppDispatch} from '../../hooks';

import {AppRoute} from '../../const';

type CitiesListProps = {
  cities: string[];
  activeCity: string;
};

//  «Список городов»
function CitiesList({cities, activeCity} : CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const onChangeCity = (ev: MouseEvent<HTMLElement>, city: string) => {
    dispatch(changeCity({city}));
    dispatch(fetchOffersAction());
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
