import React from "react";
import {
  View,
  StyleSheet,
ScrollView,
Platform
} from "react-native";
import CreateAccount from "../components/CreateAccount";
import DinamicText from "../components/DinamicText";

const CreateAccountName = ({ navigation, route }) => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
        <View style={styles.DinamicContainer}>
        <DinamicText
          chatQuestion={"¡Hola! - Vamos a registrar en la APP tu usuario"}
        />
      </View>
      <CreateAccount
        title1={`¿CUAL ES TU `}
        title3="NOMBRE"
        title4="?"
        title2={"(SIN APELLIDO)"}
        routes={"createAcountLastName"}
        returns={'login'}
        navigation={navigation}
        route={route}
        placeholders={'Escribe aqui tu mensaje'}
      />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateAccountName;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == 'android'?20:0,
    backgroundColor: "#FF7C66",
  },
  DinamicContainer: {
    display: "flex",
    width: 331,
  },
});
