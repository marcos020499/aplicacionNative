import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform
} from "react-native";

import Image1 from "../../assets/Rectangle.png";
import Image2 from "../../assets/Group68.png";
import InputMessage from "./InputMessage";
import GlobalStyle from "./GlobalStyle";


const CreateAccount = ({
  setMessage = null,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  routes,
  navigation,
  route,
  placeholders,
  returns
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageSombra} source={Image1}></Image>
      <Image style={styles.imagePersonaje} source={Image2}></Image>
      <View style={route.name !== "createAcountProfession"? styles.containerText: styles.containerTextWidth }>
        <Text style={[styles.title, GlobalStyle.bold]}>
          {title1}
          <Text style={[styles.titleWhite, GlobalStyle.extraBold]}>
            {title3}
          </Text>
          {title4}
        </Text>
        <Text style={[styles.title, GlobalStyle.bold]}>
          {title2}
          <Text style={[styles.titleWhite, GlobalStyle.extraBold]}>
            {title5}
          </Text>
          {title6}
        </Text>
      </View>
      <View style={route.name === 'createAcountName' ? styles.inputName: route.name === 'createAcountFinish'? styles.inputFinish: route.name === 'createAcountProfession'? styles.inputProfession: styles.input}>
        <InputMessage
          message={setMessage}
          routes={routes}
          navigation={navigation}
          route={route}
          returns={returns}
          placeholders={placeholders}
        ></InputMessage>
      </View>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    zIndex:1,
    backgroundColor: "#FF7C66",
    minHeight: '100%',
  },
  imageSombra: {
    width: 104,
    height: 71,
    marginTop: 70,
    marginLeft: 55,
  },
  imagePersonaje: {
    width: 80,
    height: 104,
    marginTop: 45,
    marginLeft: 72,
    position: "absolute",
  },
  containerText: {
    marginHorizontal: 25,
    marginTop: 40,
    width: 331,
    height: 81,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  containerTextWidth: {
    marginHorizontal: 25,
    marginTop: 40,
    width: 331,
    height: 180,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 13,
    color: "#232A30",
    letterSpacing: 6,
    fontWeight: "bold",
  },
  titleWhite: {
    fontSize: 13,
    color: "white",
    letterSpacing: 4.5,
  },
  word: {
    color: "#FFFFF",
  },
  input: {
    marginTop: Platform.OS == 'android' ?'99%': '99%',
  },
  inputVerification: {
    marginTop: Platform.OS == 'android' ?'99%': '99%',
  },
  inputFinish: {
    marginTop: Platform.OS == 'android' ?'99%': '99%',
  },
  inputName: {
    marginTop: Platform.OS == 'android' ?'112%': '116%',
  },
  inputProfession: {
    marginTop: Platform.OS == 'android' ?'52%': '52%',
    top: Platform.OS == 'android' ?'12%': '12%',
  },
});
