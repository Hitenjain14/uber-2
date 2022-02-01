//@ts-nocheck
import mapboxgl from '!mapbox-gl';
import tw from 'tailwind-styled-components';
import { useEffect } from 'react';

mapboxgl.accessToken =
  'pk.eyJ1IjoiaGl0ZW5qYWluMTQiLCJhIjoiY2t5aXB1ZzV4MWV5djJvcGxubnpmMHRkaiJ9.gTCZFJCYDDThZhIziHCigw';

function Map(props) {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [78.5385081, 28.3705691],
      zoom: 5.16,
    });

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }
    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }
    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.pickupCoordinates, props.dropoffCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
}

const Wrapper = tw.div`
    flex-1 h-1/2
`;

export default Map;
