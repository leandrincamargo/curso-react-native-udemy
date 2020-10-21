import React, { useState } from 'react';
import { Button, Text } from 'react-native';

import estilo from './estilo';

interface ContadorProps {
  inicial?: number;
  passo?: number;
}

const Contador: React.FC<ContadorProps> = ({ inicial = 0, passo = 1 }) => {
  const [numero, setNumero] = useState(inicial);

  const inc = () => setNumero(numero + passo);
  const dec = () => setNumero(numero - passo);

  return (
    <>
      <Text style={estilo.txtG}>{numero}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  );
};

export default Contador;
