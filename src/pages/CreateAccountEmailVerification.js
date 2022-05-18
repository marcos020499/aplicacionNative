import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import BlackDinamicText from "../components/BlackDinamicText";
import CreateAccount from "../components/CreateAccount";
import DinamicText from "../components/DinamicText";

const CreateAccountEmailVerification = ({ navigation, route }) => {
  const scrollViewRef = useRef();

  return (
    <View style={styles.container}>
      <ScrollView
      contentContainerStyle={{flexGrow:1}}
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
          <DinamicText chatQuestion={"¿Cuál es tu Email?"} />
        </View>
        <View style={styles.dinamicResponse}>
          <BlackDinamicText chatResponse={"Diaz@eonnet.io"} />
        </View>
        <CreateAccount
          title1={
            "GRACIAS, VERIFICA TU CORREO MEDANTE EL ENLACE ADJUNTO. TE ESPERO..."
          }
          navigation={navigation}
          route={route}
          routes={"createAcountSendText"}
          returns={'createAcountSendEmail'}
        />
      </ScrollView>
    </View>
  );
};

export default CreateAccountEmailVerification;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#FF7C66",
  },
  DinamicContainerOne: {
    marginTop: Platform.OS == 'android'?20: -50,
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
