import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableHighlight, } from "react-native";

const ButtonsProfession = ({routes, navigation}) => {
  const [ isPress, setIsPress ] = useState(false);
  const [ isPress2, setIsPress2 ] = useState(false);
  const [ isPress3, setIsPress3 ] = useState(false);
  const touchProps = {
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => navigation.navigate(routes)               
  };
  const touchProps2 = {
    onHideUnderlay: () => setIsPress2(false),
    onShowUnderlay: () => setIsPress2(true),
    onPress: () => navigation.navigate(routes)                 
  };
  const touchProps3 = { 
    onHideUnderlay: () => setIsPress3(false),
    onShowUnderlay: () => setIsPress3(true),
    onPress: () => navigation.navigate(routes)                
  };
  return (
    <View style={styles.container}>
      <TouchableHighlight {...touchProps} style={ !isPress ? styles.button : styles.buttonPress }><Text style={{color: !isPress ? 'black': 'white'}}>Empresario</Text></TouchableHighlight>
      <TouchableHighlight {...touchProps2} style={ !isPress2 ? styles.button : styles.buttonPress }><Text style={{color: isPress2? 'white': 'black'}}>Profesionista</Text></TouchableHighlight>
      <TouchableHighlight {...touchProps3} style={ !isPress3 ? styles.button : styles.buttonPress }><Text style={{color: isPress3? 'white': 'black'}}>Freelance</Text></TouchableHighlight>
    </View>
  );
};

export default ButtonsProfession;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    bottom: 15
  },
  button:{
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 20,
    margin: 8,
    color: 'rgba(35, 42, 48, 0.7)'
  },
  buttonPress:{
    borderWidth: 1.5,
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 20,
    margin: 8,
    backgroundColor: 'black',
    color: 'white'
  }
});
