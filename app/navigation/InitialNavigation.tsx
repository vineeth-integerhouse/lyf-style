import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREENS} from '~app/constants/navigation';
import Landing from '~app/screens/landing/Landing';

type InitialStackParamsList = {
  [SCREENS.LANDING]: undefined;
};

const Stack = createNativeStackNavigator<InitialStackParamsList>();

const InitialNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREENS.LANDING} component={Landing} />
    </Stack.Navigator>
  );
};

export default InitialNavigation;
