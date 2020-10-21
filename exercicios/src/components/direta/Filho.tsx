import React from 'react';
import { Text } from 'react-native';

import estilo from '../estilo';

interface FilhoProps {
  a: number;
  b: number;
}

const Filho: React.FC<FilhoProps> = ({ a, b }) => {
  return (
    <>
      <Text style={estilo.txtG}>{a}</Text>
      <Text style={estilo.txtG}>{b}</Text>
    </>
  );
};

export default Filho;
