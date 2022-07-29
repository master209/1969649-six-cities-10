import {useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';

import {Location} from '../types/offers';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, {latitude:lat, longitude:lng, zoom}: Location): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  let instance: Map | null = null;

  useEffect(() => {
    if (mapRef.current && !map && !instance) {
      instance = new Map(mapRef.current, {
        center: {lat, lng},
        zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, lat, lng, zoom]);

  return map;
}

export default useMap;
