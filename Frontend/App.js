import React from 'react';
import { NativeRouter } from 'react-router-native';

import Main from './app/Main';
import GalaxyBackground from './app/components/GalaxyBackground';

const App = () => {
  return (
    <NativeRouter>
      <GalaxyBackground>
        <Main />
      </GalaxyBackground>
    </NativeRouter>
  );
};

export default App;



