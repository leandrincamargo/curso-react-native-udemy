import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { createUser } from '../store/actions/user';

const Register: React.FC = (props: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const prev = useRef({ isLoading: props.isLoading }).current;

  useEffect(() => {
    if (prev.isLoading && !props.isLoading) {
      setName('');
      setEmail('');
      setPassword('');
      props.navigation.navigate('Feed');
    }
    return () => (prev.isLoading = props.isLoading);
  }, [props.isLoading]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        style={styles.input}
        autoFocus
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        onPress={() => {
          props.onCreateUser({ name, email, password });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },

  buttonText: {
    fontSize: 20,
    color: '#FFF',
  },

  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#EEE',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    paddingLeft: 15,
  },
});

const mapStateToProps = ({ user }) => {
  return {
    isLoading: user.isLoading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onCreateUser: (user: any) => dispatch(createUser(user)),
  };
};

// export default Register;
export default connect(mapStateToProps, mapDispatchToProps)(Register);
