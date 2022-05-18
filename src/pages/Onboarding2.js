import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import OnBoarding22 from '../../assets/onboarding2.png';
import Right from '../../assets/right.png';
import GlobalStyle from '../components/GlobalStyle';
const Onboarding2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerphase}>
      <Text style={[styles.phase, GlobalStyle.bold]}>PASO 2</Text>
        <TouchableOpacity onPress={() => navigation.navigate('o3')}>
        <Image style={{width: 24, height: 15}} source={Right} />
        </TouchableOpacity>
        
      </View>
      <Text style={[styles.title, GlobalStyle.globalStyle]}>
        incrementa tu influencia
      </Text>
      <View style={styles.containertextimg}>
        <Text style={[styles.text, GlobalStyle.globalStyle]}>
          Que tus ingresos no estén topados por tu tiempo. Genera tokens del
          tiempo elegiendo uno de nuestros multiplicadores de recursos.
        </Text>
      </View>
      <Image style={styles.image} source={OnBoarding22} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#232A30',
    paddingLeft: 50,
    paddingTop: '15%',
    height: '100%',
  },

  containerphase: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 50,
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
    color: '#E5E5E5',
    letterSpacing: 6,

  },

  text: {
    marginTop: 55,
    fontSize: 13,
    color: '#E5E5E5',
    width: 144,
    height: 152,
    position: 'absolute',
  },

  image: {
    marginTop: 10,
    width: '100%',
    height: 560,
  },
});

export default Onboarding2