import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaA from '../components/TelaA';
import TelaB from '../components/TelaB';
import TelaC from '../components/TelaC';
import TelaD from '../components/TelaD';

const { Navigator, Screen } = createDrawerNavigator();

export default function Drawer() {
  return (
    <Navigator initialRouteName="TelaB">
      <Screen name="TelaA" component={TelaA} />
      <Screen name="TelaB" component={TelaB} />
      <Screen name="TelaC" component={TelaC} />
      <Screen name="TelaD" component={TelaD} />
    </Navigator>
  );
}
