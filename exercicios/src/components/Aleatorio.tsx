import React from 'react';
import { Text } from 'react-native';

import estilo from './estilo';

interface AleatorioProps {
  min: number;
  max: number;
}

const Aleatorio: React.FC<AleatorioProps> = ({ min, max }) => {
  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return <Text style={estilo.txtG}>O valor aleatório é {randomInteger(min, max)}</Text>;
};

export default Aleatorio;
