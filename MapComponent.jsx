import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';


const MapComponent = ({ address }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={12}
      center={{ lat: address.lat, lng: address.lng }}
      mapContainerStyle={{ width: '100%', height: '400px' }}
    >
      <Marker position={{ lat: address.lat, lng: address.lng }} />
    </GoogleMap>
  );
};

export default MapComponent;
