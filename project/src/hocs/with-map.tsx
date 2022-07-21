import {ComponentType} from 'react';

import Map from '../components/map/map';

import {City, Point, Points} from '../types/map';

type HOCProps = {
  renderMap: (
    city: City,
    points: Points,
    selectedPoint: Point | undefined,
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
          points: Points,
          selectedPoint: Point | undefined,
          className: string,
        ) => (
          <Map
            city={city}
            points={points}
            selectedPoint={selectedPoint}
            className={className}
          />
        )}
      />
    );
  }

  return WithMap;
}

export default withMap;
