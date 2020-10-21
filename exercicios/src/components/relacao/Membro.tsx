import React from 'react';
import { Text } from 'react-native';
import estilo from '../estilo';

interface MembroProps {
  nome: string;
  sobrenome: string;
}

const Membro: React.FC<MembroProps> = ({ nome, sobrenome }) => {
  return (
    <Text style={estilo.txtG}>
      {nome} {sobrenome}
    </Text>
  );
};

export default Membro;
