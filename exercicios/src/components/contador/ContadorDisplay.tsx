import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import estilo from '../estilo';

interface ContadorDisplayProps {
  num: number;
}

const ContadorDisplay: React.FC<ContadorDisplayProps> = ({ num }) => {
  return (
    <View style={style.display}>
      <Text style={[estilo.txtG, style.displayText]}>{num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  display: {
    backgroundColor: '#000',
    padding: 20,
    width: 300,
  },
  displayText: { color: '#FFF' },
});

export default ContadorDisplay;
