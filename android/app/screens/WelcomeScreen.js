import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/iconn.png')} />
        <Text>Let's goooo!!!</Text>
      </View>

      <Button
        title='Login'
        style={styles.loginButton}
        onPress={() => navigation.navigate('login')}
      />
      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
    justifyContent: 'flex-end',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
    justifyContent: 'flex-end',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
});

export default WelcomeScreen;
