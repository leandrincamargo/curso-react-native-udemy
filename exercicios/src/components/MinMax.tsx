import React from 'react';
import { Text } from 'react-native';

import estilo from './estilo';

interface MinMaxProps {
  min: number;
  max: number;
}

const MinMax: React.FC<MinMaxProps> = ({ min, max }) => {
  return (
    <Text style={estilo.txtG}>
      O valor de {max} é maior que o {min}
    </Text>
  );
};

export default MinMax;
