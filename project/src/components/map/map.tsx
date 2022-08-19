import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';

import useMap from '../../hooks/map';

import {City, Location, Locations} from '../../types/offers';

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
  locations: Locations;
  selectedLocation: Location | undefined;
  className: string;
};

function Map({city, locations, selectedLocation, className}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city.location);

  useEffect(() => {
    map &&
    locations.forEach(({latitude:lat, longitude:lng}) => {
      const marker = new Marker({lat, lng});

      marker
        .setIcon(
          selectedLocation?.latitude === lat && selectedLocation?.longitude === lng
            ? currentCustomIcon
            : defaultCustomIcon
        )
        .addTo(map);
    });
  }, [map, locations, selectedLocation]);

  return (
    <section className={`${className} map`} ref={mapRef} />
  );
}

export default Map;
