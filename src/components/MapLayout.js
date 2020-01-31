import React from 'react';

import { AddressContextProvider } from '../context/AddressContext';
import Map from './Map';
import SearchPanel from './SearchPanel';

const Layout = () => {
  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <AddressContextProvider>
        <Map />
        <SearchPanel />
      </AddressContextProvider>
    </main>
  );
};

export default Layout;
