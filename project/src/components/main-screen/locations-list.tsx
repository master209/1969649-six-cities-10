import {locations} from '../../const';

function LocationsList(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((location) => (
            <li key={location} className="locations__item">
              <a className="locations__item-link tabs__item" href="#todo">
                <span>{location}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default LocationsList;
