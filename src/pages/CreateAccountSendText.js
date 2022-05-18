import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import BlackDinamicText from "../components/BlackDinamicText";
import CreateAccount from "../components/CreateAccount";
import DinamicText from "../components/DinamicText";

const CreateAccountSendText = ({ navigation, route }) => {
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
          <DinamicText chatQuestion={"Correo verificado"} />
        </View>
        <View style={styles.dinamicResponse}>
          <BlackDinamicText chatResponse={"Diaz@eonnet.io"} />
        </View>
        <CreateAccount
          title1={"GRACIAS [Gerry], AHORA POR FAVOR DAME TU "}
          title3={"CELULAR REGISTRADO"}
          navigation={navigation}
          route={route}
          routes={"createAcountTextVerificate"}
          returns={'createAcountEmailVerification'}
          placeholders={'+52 335684027'}
        />
      </ScrollView>
    </View>
  );
};

export default CreateAccountSendText;

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
