import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TelaA from '../components/TelaA';
import TelaB from '../components/TelaB';
import TelaC from '../components/TelaC';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Tab() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          switch (route.name) {
            case 'TelaA':
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              break;
            case 'TelaB':
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              break;
            case 'TelaC':
              iconName = focused ? 'ios-list-box' : 'ios-list';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        showLabel: true,
        // labelStyle: { fontSize: 30 },
      }}
      initialRouteName="TelaB"
    >
      <Screen name="TelaA" component={TelaA} options={{ title: 'Inicial' }} />
      <Screen name="TelaB" component={TelaB} options={{ title: 'Meio' }} />
      <Screen name="TelaC" component={TelaC} options={{ title: 'Final' }} />
    </Navigator>
  );
}
