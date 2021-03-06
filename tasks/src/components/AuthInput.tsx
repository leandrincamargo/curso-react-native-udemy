import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

interface AuthInputProps {
  icon: string;
  style: any;
  value: string;
  secureTextEntry?: boolean;
  onChangeText: any;
  placeholder: string;
}

const AuthInput: React.FC<AuthInputProps> = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <FontAwesome name={props.icon} size={20} style={styles.icon} />
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    backgroundColor: '#EEE',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    color: '#333',
    marginLeft: 20,
  },

  input: {
    marginLeft: 20,
    width: '70%',
  },
});

export default AuthInput;
