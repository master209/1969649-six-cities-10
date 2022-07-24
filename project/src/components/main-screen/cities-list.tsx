import {MouseEvent} from 'react';

import {
  changeCity,
  loadOffers,
  loadPoints
} from '../../store/action';

import {useAppDispatch} from '../../hooks';

type CitiesListProps = {
  cities: string[];
  activeCity: string;
};

//  «Список городов»
function CitiesList({cities, activeCity} : CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const onChangeCity = (ev: MouseEvent<HTMLElement>, city: string) => {
    ev.preventDefault();
    dispatch(changeCity({city}));
    dispatch(loadOffers());
    dispatch(loadPoints());
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            const activeClass = `locations__item-link tabs__item${(city === activeCity) ? '--active' : ''}`;
            return (
              <li key={city} className="locations__item">
                <a className={activeClass} href="/"
                  onClick={(ev) => onChangeCity(ev, city)}
                >
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;