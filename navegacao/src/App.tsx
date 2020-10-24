import React from 'react';
import { SafeAreaView } from 'react-native';

import TelaA from './components/TelaA';
import TelaB from './components/TelaB';
import TelaC from './components/TelaC';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TelaA />
      <TelaB />
      <TelaC />
    </SafeAreaView>
  );
}
