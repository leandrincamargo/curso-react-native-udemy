import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Splash: React.FC = (props: any) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('App');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/imgs/icon.png')} style={styles.image} />
      <Text style={styles.header}>Lambe-Lambe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Splash;
