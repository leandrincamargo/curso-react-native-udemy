import React from 'react';
import { Button, View } from 'react-native';

interface PassoStackProps {
  avancar?: string;
  voltar?: boolean;
  navigation: any;
  avancarParams?: any;
}

const PassoStack: React.FC<PassoStackProps> = ({
  avancar,
  voltar,
  navigation,
  avancarParams,
  children,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {voltar ? <Button title="Voltar" onPress={() => navigation.goBack()} /> : false}
        {avancar ? (
          <Button title="Avançar" onPress={() => navigation.navigate(avancar, avancarParams)} />
        ) : (
          false
        )}
      </View>
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
};

export default PassoStack;
