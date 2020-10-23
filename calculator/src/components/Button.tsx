import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native';

interface ButtonProps {
  onClick: any;
  label: string;
  double?: boolean;
  triple?: boolean;
  operation?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, double, triple, operation }) => {
  const stylesButton: any[] = [styles.button];

  if (double) stylesButton.push(styles.buttonDouble);
  if (triple) stylesButton.push(styles.buttonTriple);
  if (operation) stylesButton.push(styles.operationButton);

  return (
    <TouchableHighlight onPress={() => onClick(label)}>
      <Text style={stylesButton}>{label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },

  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },

  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },

  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

export default Button;
