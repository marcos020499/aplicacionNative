import React, { useRef } from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import BlackDinamicText from "../components/BlackDinamicText";
import CreateAccount from "../components/CreateAccount";
import DinamicText from "../components/DinamicText";

const CreateAccountLastName = ({ navigation, route }) => {
  const scrollViewRef = useRef();
  return (
    <View style={styles.container}>
      <ScrollView
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({ animated: true })
      }>
        <View>
        <View style={styles.DinamicContainerOne}>
          <DinamicText
            chatQuestion={"¡Hola! - Vamos a registrar en la APP tu usuario"}
          />
        </View>
        <View style={styles.DinamicContainer}>
          <DinamicText chatQuestion={"¿Cuál es tu Nombre?"} />
        </View>
        <View style={styles.dinamicResponse}>
          <BlackDinamicText chatResponse={"Gerry"} />
        </View>
        <CreateAccount
          title1={"(ME GUSTA TU NOMBRE)..."}
          title2={"¿CUAL ES TU "}
          title5={"APELLIDO"}
          title6={"?"}
          routes={"createAcountSendEmail"}
          returns={"createAcountName"}
          navigation={navigation}
          route={route}
          placeholders={"Escribe aqui tu mensaje"}
        />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateAccountLastName;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF7C66",
  },
  DinamicContainerOne: {
    marginTop: Platform.OS == 'android'?20:60,
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
