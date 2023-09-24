import { useEffect } from 'react';

import { Loader } from '@googlemaps/js-api-loader';

import Styled from 'components/GoogleMap/Styled';

const GoogleMap = () => {
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        version: 'weekly',
        language: 'ja',
        region: 'JP',
      });
      const position = {
        lat: 37.4115009,
        lng: 127.1297925,
      };

      const { Map } = await loader.importLibrary('maps');
      const { Marker } = await loader.importLibrary('marker');

      const map = new Map(document.getElementById('google-map'), {
        zoom: 16,
        center: position,
      });

      new Marker({
        map: map,
        position,
      });
    };
    initMap();
  }, []);

  return <Styled.MapWrapper id="google-map" />;
};
export default GoogleMap;
