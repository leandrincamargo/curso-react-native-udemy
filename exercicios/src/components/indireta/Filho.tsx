import React from 'react';
import { Button } from 'react-native';

interface FilhoProps {
  min: number;
  max: number;
  funcao: any;
}

const Filho: React.FC<FilhoProps> = ({ min, max, funcao }) => {
  function gerarNumero(min: number, max: number) {
    const fator = max - min + 1;
    return Math.floor(Math.random() * fator) + min;
  }

  return (
    <>
      <Button
        title="Executar"
        onPress={function () {
          const n = gerarNumero(min, max);
          funcao(n, 'O valor é:');
        }}
      />
    </>
  );
};

export default Filho;
