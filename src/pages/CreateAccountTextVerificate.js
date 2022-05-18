import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import BlackDinamicText from "../components/BlackDinamicText";
import CreateAccount from "../components/CreateAccount";
import DinamicText from "../components/DinamicText";

const CreateAccountTextVerification = ({ navigation, route }) => {
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
          <DinamicText chatQuestion={"¿Cuál es tu Celular?"} />
        </View>
        <View style={styles.dinamicResponse}>
          <BlackDinamicText chatResponse={"+52 332684939"} />
        </View>
        <CreateAccount
          title1={
            "GRACIAS, VERIFICA TU CELULAR MEDIANTE CODIGO DE 4 DIGITOS..."
          }
          navigation={navigation}
          route={route}
          routes={"createAcountPassword"}
          returns={'createAcountSendText'}
          placeholders={'1234'}
        />
      </ScrollView>
    </View>
  );
};

export default CreateAccountTextVerification;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#FF7C66",
  },
  DinamicContainerOne: {
    marginTop: Platform.OS == 'android'?20:-50,
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
