import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

import config from '../config';
import { pickUpIconSet, dropOffIconSet } from '../assets/icons';
import { AddressContext } from '../context/AddressContext';
import Marker from './Marker';

const MapWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Map = ({ center, zoom }) => {
  const addressContext = useContext(AddressContext);
  const markerArr = [];

  if (addressContext.pickUpAddressGeo.address) {
    markerArr.push({
      key: 'pickUpMarkerKey',
      lat: addressContext.pickUpAddressGeo.latitude,
      lng: addressContext.pickUpAddressGeo.longitude,
      imageSrc: pickUpIconSet.marker,
    });
  }

  if (addressContext.dropOffAddressGeo.address) {
    markerArr.push({
      key: 'dropOffMarkerKey',
      lat: addressContext.dropOffAddressGeo.latitude,
      lng: addressContext.dropOffAddressGeo.longitude,
      imageSrc: dropOffIconSet.marker,
    });
  }

  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: config.googleMapsKey }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={{
          fullscreenControl: false,
          zoomControl: false,
        }}
      >
        {markerArr.map(({ lat, lng, imageSrc, key }) => {
          return <Marker lat={lat} lng={lng} imageSrc={imageSrc} key={key} />;
        })}
      </GoogleMapReact>
    </MapWrapper>
  );
};

Map.defaultProps = {
  center: {
    lat: 48.8669362,
    lng: 2.3097307,
  },
  zoom: 15,
};

Map.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  zoom: PropTypes.number.isRequired,
};

export default Map;
