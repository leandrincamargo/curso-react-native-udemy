import React from 'react';
import { View } from 'react-native';

interface AleatorioProps {
  cor?: string;
  lado?: number;
}

const Aleatorio: React.FC<AleatorioProps> = ({ cor = '#000', lado }) => {
  const ladoConst = lado || 50;
  return <View style={{ height: ladoConst, width: ladoConst, backgroundColor: cor }}></View>;
};

export default Aleatorio;
