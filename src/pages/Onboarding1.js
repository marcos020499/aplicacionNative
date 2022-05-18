import React from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity, Button} from 'react-native';
import Container from '../components/Container';
import GlobalStyle from '../components/GlobalStyle';

const Onboarding1 = ({navigation}) => {
  return (
    <Container>
      <View style={styles.containerStep}>
        <Text style={[styles.textStep, GlobalStyle.bold]}>PASO 1</Text>
        <TouchableOpacity onPress={() => navigation.navigate('o2')}>
        <Image style={{width: 24, height: 15}} source={require('../../assets/Vector.png')} />
        </TouchableOpacity>
      </View>
      <Text style={[styles.title, GlobalStyle.globalStyle]}>
        multiplica tu tiempo
      </Text>
      <Text style={[styles.overview, GlobalStyle.globalStyle]}>
        Que tus ingresos no estén anclados por tu tiempo. Genera tokens del
        tiempo elegiendo uno de nuestros multiplicadores de recursos.
      </Text>
    </Container>
  );
};
const styles = StyleSheet.create({
  containerStep: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  textStep: {
    fontSize: 11,
    color: '#E5E5E5',
    letterSpacing: 8,
  },
  title: {
    marginTop: 67,
    fontSize: 50,
  },
  overview: {
    marginTop: 42,
    fontSize: 15,
    maxWidth: 181,
  },
});
export default Onboarding1
