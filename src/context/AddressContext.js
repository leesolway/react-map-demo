import React, { createContext, useState } from 'react';

const AddressContext = createContext({
  pickUpAddressGeo: {},
  pickUpAddressInput: '',

  dropOffAddressGeo: {},
  dropOffAddressInput: '',
});

const AddressContextProvider = ({ children }) => {
  const [pickUpAddressGeo, setPickUpAddressGeo] = useState({});
  const [pickUpAddressInput, setPickUpAddressInput] = useState('');

  const [dropOffAddressGeo, setDropOffAddressGeo] = useState({});
  const [dropOffAddressInput, setDropOffAddressInput] = useState('');

  const reset = () => {
    setPickUpAddressGeo({});
    setPickUpAddressInput('');

    setDropOffAddressGeo({});
    setDropOffAddressInput('');
  };

  return (
    <AddressContext.Provider
      value={{
        pickUpAddressGeo,
        setPickUpAddressGeo,

        pickUpAddressInput,
        setPickUpAddressInput,

        dropOffAddressGeo,
        setDropOffAddressGeo,

        dropOffAddressInput,
        setDropOffAddressInput,

        reset,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export { AddressContextProvider, AddressContext };
