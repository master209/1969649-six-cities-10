import {ComponentType} from 'react';

import Map from '../components/map/map';

import {City, Location, Offers} from '../types/offers';

type HOCProps = {
  renderMap: (
    city: City,
    offersNear4: Offers, // 4 оффера для отрисовки на карте
    selectedLocation: Location | undefined,
    className: string,
  ) => void
};

function withMap<T>(Component: ComponentType<T>): ComponentType<Omit<T, keyof HOCProps>> {
  type ComponentProps = Omit<T, keyof HOCProps>;

  function WithMap(props: ComponentProps): JSX.Element {

    return (
      <Component
        {...props as T}
        renderMap={(
          city: City,
          offersNear4: Offers,
          selectedLocation: Location | undefined,
          className: string,
        ) => (
          <Map
            key={offersNear4[3].id.toString()} // картра должна перерисовываться каждый раз, иначе новые маркеры добавляются к старым
            city={city}
            offersNear4={offersNear4}
            selectedLocation={selectedLocation}
            className={className}
          />
        )}
      />
    );
  }

  return WithMap;
}

export default withMap;
