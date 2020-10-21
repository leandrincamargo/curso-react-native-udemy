import React from 'react';
import { Text, View } from 'react-native';

import estilo from './estilo';

interface ParImparProps {
  num?: number;
}

const ParImpar: React.FC<ParImparProps> = ({ num = 0 }) => {
  return (
    <View>
      <Text style={estilo.txtG}>O resultado é:</Text>
      {num % 2 === 0 ? (
        <Text style={estilo.txtG}>Par</Text>
      ) : (
        <Text style={estilo.txtG}>Impar</Text>
      )}
    </View>
  );
};

export default ParImpar;
