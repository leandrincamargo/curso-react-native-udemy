import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function DigiteSeuNome() {
  const [nome, setNome] = useState('');
  return (
    <View>
      <Text>{nome}</Text>
      <TextInput
        placeholder="Digite seu Nome"
        value={nome}
        onChangeText={(nome) => setNome(nome)}
      />
    </View>
  );
}
