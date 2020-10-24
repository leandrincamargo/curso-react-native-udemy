import React from 'react';
import { Text, View } from 'react-native';

interface TextoCentralProps {
  corFundo?: string;
  corTexto?: string;
}

const TextoCentral: React.FC<TextoCentralProps> = ({ corFundo, corTexto, children }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: corFundo || '#000',
      }}
    >
      <Text style={{ fontSize: 50, color: corTexto || '#FFF' }}>{children}</Text>
    </View>
  );
};

export default TextoCentral;
