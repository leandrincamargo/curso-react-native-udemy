import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TelaA from '../components/TelaA';
import TelaB from '../components/TelaB';
import TelaC from '../components/TelaC';
import PassoStack from '../components/PassoStack';

const { Navigator, Screen } = createStackNavigator();

export default function Stack() {
  return (
    <Navigator initialRouteName="TelaA" screenOptions={{ headerShown: true }}>
      <Screen name="TelaA" options={{ title: 'Informações Iniciais' }}>
        {(props) => (
          <PassoStack {...props} avancar="TelaB">
            <TelaA />
          </PassoStack>
        )}
      </Screen>
      <Screen name="TelaB">
        {(props) => (
          <PassoStack {...props} voltar avancar="TelaC" avancarParams={{ numero: 1007 }}>
            <TelaB />
          </PassoStack>
        )}
      </Screen>
      <Screen name="TelaC">
        {(props) => (
          <PassoStack {...props} voltar avancar="TelaC">
            <TelaC {...props} />
          </PassoStack>
        )}
      </Screen>
    </Navigator>
  );
}
