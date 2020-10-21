import React, { useState } from 'react';
import { Text } from 'react-native';

import estilo from '../estilo';

import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

export default function ContadorV2() {
  const [num, setNum] = useState(0);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <>
      <Text style={estilo.txtG}>Contador</Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes dec={dec} inc={inc} />
    </>
  );
}
