import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import BlackDinamicPassword from "../components/BlackDinamicPassword";
import BlackDinamicText from "../components/BlackDinamicText";
import CreateAccount from "../components/CreateAccount";
import DinamicText from "../components/DinamicText";

const CreateAccountProfession = ({ navigation, route }) => {
  const scrollViewRef = useRef();

  return (
    <View style={styles.container}>
      <ScrollView
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({ animated: true })
      }
      >
        <View style={styles.DinamicContainerOne}>
          <DinamicText
            chatQuestion={"¡Hola! - Vamos a registrar en la APP tu usuario"}
          />
        </View>
        <View style={styles.DinamicContainer}>
          <DinamicText chatQuestion={"Confirma tu contraseña"} />
        </View>
        <View style={styles.dinamicResponse}>
          <BlackDinamicPassword chatResponse={"--------"} />
        </View>
        <CreateAccount
          title1={
            "SUPER! LA VERDAD SI SE LE VE FUTURO."}
          title2={'FINALMENTE [NOMBRE],CUÁL ES TU '}
          title5={'PROFESION'}
          title6={'CON EL QUE TE IDENTIFICAS MÁS PARA FORMAR PARTE DE EON?'}
          navigation={navigation}
          routes={"createAcountFinish"}
          returns={'createAcountPassword'}
          route={route}
        />
      </ScrollView>
    </View>
  );
};

export default CreateAccountProfession;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#FF7C66",
  },
  DinamicContainerOne: {
    marginTop: Platform.OS == 'android'? 20: -50,
    display: "flex",
    width: 331,
  },
  DinamicContainer: {
    display: "flex",
    width: 169,
  },
  dinamicResponse: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-end",
  },
});
