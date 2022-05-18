import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import OnBoarding33 from '../../assets/onboarding3.png';
import Right from '../../assets/right.png';
import GlobalStyle from '../components/GlobalStyle';
import { withNavigation } from '@react-navigation/compat';

const Onboarding3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerphase}>
        <Text style={[styles.phase, GlobalStyle.bold]}>PASO 3</Text>
        <TouchableOpacity onPress={() => navigation.navigate('createAcount')}>
          <Image style={{width: 24, height: 15}} source={Right} />
        </TouchableOpacity>
      </View>
      <Text style={[styles.title, GlobalStyle.globalStyle]}>
        escala tus recursos
      </Text>
      <View style={styles.containertextimg}>
        <Text style={[styles.text, GlobalStyle.globalStyle]}>
          Que tus ingresos no estén topados por tu tiempo. Genera tokens del
          tiempo elegiendo uno de nuestros multiplicadores de recursos.
        </Text>
      </View>
      <Image style={styles.image} source={OnBoarding33} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    paddingHorizontal: 50,
    paddingTop: '15%',
    height: '100%',
  },

  containerphase: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  containertextimg: {
    display: 'flex',
    flexDirection: 'row',
  },

  title: {
    marginTop: 60,
    lineHeight: 60,
    fontSize: 50,
    marginRight: 50,
    color: '#FF7C66',
  },

  phase: {
    fontSize: 11,
    color: '#232A2F',

    letterSpacing: 6,
  },

  text: {
    marginTop: 55,
    fontSize: 15,
    color: '#232A30',
    width: 181,
    height: 108,
  },

  image: {
    height: 283,
    width: 207,
    position: 'relative',
    alignSelf: 'center',
    top: '16%',
  },
});

export default Onboarding3