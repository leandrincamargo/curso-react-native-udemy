import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native';
import { Gravatar } from 'react-native-gravatar';
import { FontAwesome } from '@expo/vector-icons';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import commonStyles from '../commonStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface MenuProps {
  email: string;
  name: string;
}

const Menu: React.FC<MenuProps> = (props: any) => {
  const logout = () => {
    delete Axios.defaults.headers.common['Authorization'];
    AsyncStorage.removeItem('userData');
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Auth',
          },
        ],
      }),
    );
  };

  return (
    <DrawerContentScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
        <Gravatar style={styles.avatar} options={{ email: props.email, secure: true }} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.email}>{props.email}</Text>
        </View>
        <TouchableOpacity onPress={logout}>
          <View style={styles.logoutIcon}>
            <FontAwesome name="sign-out" size={30} color="#800" />
          </View>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: '#DDD',
  },

  title: {
    color: '#000',
    fontFamily: commonStyles.fontFamily,
    fontSize: 30,
    paddingTop: Platform.OS === 'ios' ? 70 : 30,
    padding: 10,
  },

  avatar: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderRadius: 30,
    margin: 10,
    backgroundColor: '#222',
  },

  userInfo: {
    marginLeft: 10,
  },

  name: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    color: commonStyles.colors.mainText,
    marginBottom: 5,
  },

  email: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 15,
    color: commonStyles.colors.subText,
    marginBottom: 10,
  },

  logoutIcon: {
    marginLeft: 10,
    marginBottom: 10,
  },
});

export default Menu;
