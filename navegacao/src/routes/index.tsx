import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// import Drawer from './Drawer';
import Tab from './Tab';
// import Stack from './Stack';

export default function Routes() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <Drawer /> */}
        <Tab />
        {/* <Stack /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}
