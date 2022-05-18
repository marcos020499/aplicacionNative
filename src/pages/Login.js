import React, {useRef} from "react";
import { Platform, Text, ScrollView, StyleSheet, Image, View, TextInput, TouchableOpacity } from "react-native";
import GlobalStyle from "../components/GlobalStyle";
const Login = ({navigation}) => {
  const inputRef = React.useRef();
  setTimeout(() => inputRef.current.focus(), 100);
  return (
    <View style={styles.Container}>
      <ScrollView>
      <View style={styles.containerStep}>
        <Text style={[styles.textTop, GlobalStyle.globalStyle]}>
          Quiero ser parte de EON
        </Text>
        <Image
          style={styles.logo}
          source={require("../../assets/EON-logoblack2.png")}
        />
        <View style={styles.containerLogin}>
          <View style={styles.searchSection}>
            <Image
              style={styles.searchIcon}
              source={require("../../assets/Vector-2.png")}
            />
            <TextInput
              style={styles.input}
              placeholder="EMAIL"
              ref={inputRef}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.searchSection}>
            <Image
              style={[
                styles.searchIcon,
                styles.searchIcon2
              ]}
              source={require("../../assets/Vector-3.png")}
            />
            <TextInput
              style={styles.input}
              ref={inputRef}
              placeholder="CONTRASEÑA"

              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <View style={styles.containerButtons}>
          <TouchableOpacity>
            <Text style={[
              styles.textButtons,
              GlobalStyle.globalStyle
            ]} >Registrate en la APP</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[
              styles.textButtons,
              GlobalStyle.globalStyle
            ]}>Olvidé mi contraseña</Text>
          </TouchableOpacity>
        
          <Image
            style={styles.logo2}
            source={require("../../assets/Group88.png")}
          />
          </View>
        
        <View style={styles.succesContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('createAcountName')}>
            <Text style={[
              GlobalStyle.bold,
              styles.succesText
            ]}>INGRESAR</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: Platform.OS == 'android'? 52: 52,
    backgroundColor: '#FF7C66',
  },
  textTop: {
    textAlign: "right",
    paddingRight: '5%'
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: Platform.OS == 'android'? '25%': '25%',
  },
  logo2: {
    width: 176,
    height: 126
  },
  containerLogin:{
    display: 'flex',
    justifyContent: 'center',
    marginTop: Platform.OS == 'android'? '20%': '20%'
  },
  searchSection: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#FF7C66',
  },
  input: {
    borderWidth: 2,
    paddingLeft: 32,
    borderRadius: 24,
    borderColor: 'black',
    letterSpacing: 10,
    backgroundColor:'#FF7C66',
    color: "#232A30",
    //WIDTH
    width: 308,
    height: 71,
    //text
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 13,
    zIndex: 1
  },
  searchIcon: {
    top: 50,
    left: 115,
    zIndex: 2
  },
  searchIcon2: {
    top: 55
  },
  containerButtons:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: Platform.OS == 'android'? 30: 45
  },
  textButtons: {
    fontSize: 13,
    textAlign: 'center',
    paddingTop: 10,
    color: '#232A2F'
  },
  logo2:{
    display: 'flex',
    marginTop: 27
  },
  succesContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    height: 123,
    alignSelf: 'stretch',
    top: Platform.OS == 'android'? 0: 12
  },
  succesText:{
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 8
    
  }
});
export default Login;
