import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MarkerImage = styled.img``;

const Marker = ({ imageSrc }) => <MarkerImage src={imageSrc} alt="Map Marker" />;

Marker.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default Marker;
