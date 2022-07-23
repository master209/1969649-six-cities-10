import {MouseEvent} from 'react';

import {changeLocation} from '../../store/action';

import {useAppDispatch, useAppSelector} from '../../hooks';

import {locations} from '../../const';

function LocationsList(): JSX.Element {
  const {activeLocation} = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const onChangeLocation = (ev: MouseEvent<HTMLElement>, location: string) => {
    ev.preventDefault();
    dispatch(changeLocation({location}));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((location) => {
            const activeClass = `locations__item-link tabs__item${(location === activeLocation) ? '--active' : ''}`;
            return (
              <li key={location} className="locations__item">
                <a className={activeClass} href="/"
                  onClick={(ev) => onChangeLocation(ev, location)}
                >
                  <span>{location}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default LocationsList;
