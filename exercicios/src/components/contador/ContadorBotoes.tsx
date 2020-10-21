import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface ContadorBotoesProps {
  inc: any;
  dec: any;
}

const ContadorBotoes: React.FC<ContadorBotoesProps> = ({ inc, dec }) => {
  return (
    <View style={style.botoes}>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </View>
  );
};

const style = StyleSheet.create({
  botoes: {
    flexDirection: 'row',
  },
});

export default ContadorBotoes;
