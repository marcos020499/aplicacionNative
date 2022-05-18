import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import BlackDinamicText from "../components/BlackDinamicText";
import CreateAccount from "../components/CreateAccount";
import DinamicText from "../components/DinamicText";

const CreateAccountEmail = ({ navigation, route }) => {
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
          <DinamicText chatQuestion={"Celular Verificado"} />
        </View>
        <View style={styles.dinamicResponse}>
          <BlackDinamicText chatResponse={"+52 332684939"} />
        </View>
        <CreateAccount
          title1={"GRACIAS [Gerry]"}
          title2={"AHORA POR FAVOR ELIGE TU "}
          title5={"CONTRASEÑA"}
          navigation={navigation}
          routes={"createAcountProfession"}
          returns={'createAcountTextVerificate'}
          route={route}
          placeholders={'LUPITA123'}
        />
      </ScrollView>
    </View>
  );
};

export default CreateAccountEmail;

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
