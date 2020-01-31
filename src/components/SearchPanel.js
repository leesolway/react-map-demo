import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { pickUpIconSet, dropOffIconSet } from '../assets/icons';
import { AddressContext } from '../context/AddressContext';
import createJob from '../services/createJob';
import Column from './layout/Column';

import Button from './Button';
import SearchAddressInput from './SearchAddressInput';
import Panel from './Panel';
import Toast from './Toast';

const SearchPanelWrapper = styled.div`
  position: absolute;
  top: 32px;
  left: 32px;
  z-index: 10;
  width: 400px;
`;

const SearchPanel = () => {
  const addressContext = useContext(AddressContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const {
    pickUpAddressGeo,
    pickUpAddressInput,
    setPickUpAddressInput,

    dropOffAddressGeo,
    dropOffAddressInput,
    setDropOffAddressInput,

    setPickUpAddressGeo,
    setDropOffAddressGeo,

    reset,
  } = addressContext;

  const hasValidPickUpGeoData = !!pickUpAddressGeo && !!pickUpAddressGeo.address;
  const hasValidDropOffGeoData = !!dropOffAddressGeo && !!dropOffAddressGeo.address;

  const isButtonDisabled = !hasValidPickUpGeoData || !hasValidDropOffGeoData || isSubmitting;
  const buttonText = isSubmitting ? 'Creating...' : 'Create job';

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      await createJob(pickUpAddressGeo.address, dropOffAddressGeo.address);

      // Reset the stored data
      reset();

      // Show toast for a limited time
      setToastMessage('Job has been created successfully!');
      setTimeout(() => setToastMessage(''), 3000);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SearchPanelWrapper>
        <Panel>
          <Column>
            <SearchAddressInput
              iconSet={pickUpIconSet}
              placeholder="Pick up address"
              setData={setPickUpAddressGeo}
              hasValidGeoData={hasValidPickUpGeoData}
              value={pickUpAddressInput}
              setValue={setPickUpAddressInput}
            />
            <SearchAddressInput
              iconSet={dropOffIconSet}
              placeholder="Drop off address"
              setData={setDropOffAddressGeo}
              hasValidGeoData={hasValidDropOffGeoData}
              value={dropOffAddressInput}
              setValue={setDropOffAddressInput}
            />
            <Button
              style={{ marginLeft: '48px' }}
              disabled={isButtonDisabled}
              onClick={handleSubmit}
            >
              {buttonText}
            </Button>
          </Column>
        </Panel>
      </SearchPanelWrapper>

      {toastMessage && <Toast message={toastMessage} />}
    </>
  );
};

export default SearchPanel;
