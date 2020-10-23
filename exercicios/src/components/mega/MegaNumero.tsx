import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import estilo from '../estilo';

interface MegaNumeroProps {
  num: number;
}

const MegaNumero: React.FC<MegaNumeroProps> = ({ num }) => {
  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <View style={style.Container}>
      <Text style={[estilo.txtG, style.Num]}>{num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    height: 50,
    width: 50,
    backgroundColor: '#000',
    margin: 5,
    borderRadius: 25,
  },
  Num: {
    color: '#FFF',
  },
});

export default MegaNumero;
