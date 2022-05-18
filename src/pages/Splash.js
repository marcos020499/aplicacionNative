import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import Container from '../components/Container';
import GlobalStyle from '../components/GlobalStyle';

const Splash = () => {
  return (
    <Container>
      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={require('../../assets/EON-logoblack1.png')}
        />
      </View>
      <View>
        <Text style={[styles.text, GlobalStyle.globalStyle]}>EONNET.IO</Text>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  containerLogo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  logo: {
    width: 107,
    height: 16,
  },
  text: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 8,
    marginBottom: 10,
    marginLeft: 10,
    color: 'rgba(35, 42, 48, 0.5)',
  },
});
export default Splash;
