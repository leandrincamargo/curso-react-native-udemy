import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { login } from '../store/actions/user';

const Login: React.FC = (props: any) => {
  const [name, setName] = useState('Temporário');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const prev = useRef({ isLoading: props.isLoading }).current;

  useEffect(() => {
    if (prev.isLoading && !props.isLoading) {
      props.navigation.navigate('Feed');
    }
    return () => (prev.isLoading = props.isLoading);
  }, [props.isLoading]);

  const login = () => {
    props.onLogin({ name, email, password });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoFocus
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
      <TouchableOpacity onPress={login} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Register');
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Criar nova conta...</Text>
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
  },
});

const mapStateToProps = ({ user }) => {
  return {
    isLoading: user.isLoading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogin: (user: any) => dispatch(login(user)),
  };
};

// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);
