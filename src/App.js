import React from 'react';

import MapLayout from './components/MapLayout';
import GlobalStyles from './components/styles/GlobalStyles';
import { Normalize } from './components/styles/NormalizeStyles';

const App = () => {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <MapLayout />
    </>
  );
};

export default App;
