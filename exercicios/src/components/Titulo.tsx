import React from 'react';
import { Text } from 'react-native';

import estilo from './estilo';

interface TituloProps {
  principal: string;
  secundario: string;
}

const Titulo: React.FC<TituloProps> = ({ principal, secundario }) => {
  return (
    <>
      <Text style={estilo.txtG}>{principal}</Text>
      <Text>{secundario}</Text>
    </>
  );
};

export default Titulo;
