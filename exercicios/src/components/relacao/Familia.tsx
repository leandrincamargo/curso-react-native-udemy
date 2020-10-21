import React from 'react';
import { Text } from 'react-native';

const Familia: React.FC = ({ children }) => {
  return (
    <>
      <Text>[Início] Membros da Família:</Text>
      {children}
      <Text>[Fim] Membros da Família</Text>
    </>
  );
};

export default Familia;
