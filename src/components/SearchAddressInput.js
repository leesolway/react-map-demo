import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import addressLookup from '../services/addressLookup';
import TextInput from './TextInput';

const SearchAddressInput = ({
  iconSet,
  hasValidGeoData,
  placeholder,
  setData,
  value,
  setValue,
  ...props
}) => {
  const [error, setError] = useState(false);

  // Debounce
  const timeoutId = React.useRef();
  const inputRef = useRef('');

  useEffect(() => {
    const requestAddress = async value => {
      try {
        const addressResonse = await addressLookup(value);
        setData(addressResonse.data);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };

    clearTimeout(timeoutId.current);

    // Reset the stored values
    if (!value.trim()) {
      setData({});
      setError(false);
      return;
    }

    timeoutId.current = setTimeout(() => {
      requestAddress(inputRef.current);
    }, 500);
  }, [value, setData]);

  const handleBlur = event => {
    inputRef.current = event.target.value;
  };

  const handleOnChange = event => {
    setValue(event.target.value);

    // Access the latest value to use in the API Call
    inputRef.current = event.target.value;
  };

  const getIcon = () => {
    switch (true) {
      case error:
        return iconSet.error;
      case hasValidGeoData:
        return iconSet.present;
      default:
        return iconSet.blank;
    }
  };

  const icon = getIcon();

  return (
    <TextInput
      imageSrc={icon}
      value={value}
      onBlur={handleBlur}
      onChange={handleOnChange}
      placeholder={placeholder}
      style={{ width: '100%' }}
      {...props}
    />
  );
};

SearchAddressInput.propTypes = {
  iconSet: PropTypes.shape({
    blank: PropTypes.string.isRequired,
    present: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
  hasValidGeoData: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default SearchAddressInput;
