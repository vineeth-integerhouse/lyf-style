import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import Loader from './components/Loader';
import InitialNavigation from './navigation/InitialNavigation';

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer onReady={RNBootSplash.hide}>
        <InitialNavigation />
      </NavigationContainer>
      <Loader />
    </>
  );
};

export default App;
