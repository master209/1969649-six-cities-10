import {Link} from 'react-router-dom';

import useSetSort from '../../../hooks/set-sort/set-sort';

import {AppRoute} from '../../../const';

type CitiesListProps = {
  cities: string[];
  activeCity: string;
  onChangeCity: (city: string) => void;
};

/* «Список городов» */
function CitiesList({cities, activeCity, onChangeCity} : CitiesListProps): JSX.Element {
  useSetSort();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            const activeClass = `locations__item-link tabs__item${(city === activeCity) ? '--active' : ''}`;

            return (
              <li key={city} className="locations__item">
                <Link
                  className={activeClass}
                  to={AppRoute.Main}
                  onClick={() => onChangeCity(city)}
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
