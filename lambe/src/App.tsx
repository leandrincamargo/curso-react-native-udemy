import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';

import Navigator from './Navigator';
import { setMessage } from './store/actions/message';

const App: React.FC = (props: any) => {
  useEffect(() => {
    if (props.text && props.text.toString().trim()) {
      Alert.alert(props.title || 'Mensagem', props.text);
      props.clearMessage();
    }
  }, [props.text]);

  return <Navigator />;
};

const mapStateToProps = ({ message }) => {
  return {
    title: message.title,
    text: message.text,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    clearMessage: () => dispatch(setMessage({ title: '', message: '' })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
