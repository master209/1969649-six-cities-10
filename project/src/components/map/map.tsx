import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';

import useMap from '../../hooks/use-map';

import {City, Point, Points} from '../../types/map';

import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

import 'leaflet/dist/leaflet.css';
import './style.css';

const createIcon = (iconUrl: string) => (
  new Icon({
    iconUrl: iconUrl,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  })
);

const defaultCustomIcon = createIcon(URL_MARKER_DEFAULT);
const currentCustomIcon = createIcon(URL_MARKER_CURRENT);

export type MapProps = {
  city: City;
  points: Points;
  selectedPoint: Point | undefined;
  className: string;
};

function Map({city, points, selectedPoint, className}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach(({lat, lng, id}) => {
        const marker = new Marker({lat, lng});

        marker
          .setIcon(
            selectedPoint !== undefined && id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <section className={`${className} map`} ref={mapRef}></section>
  );
}

export default Map;
