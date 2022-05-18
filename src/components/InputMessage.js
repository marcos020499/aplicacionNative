import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  Platform
} from "react-native";
import Send from "../../assets/Vector-4.png";
import Return from "../../assets/Vector-5.png";
import ButtonsProfession from "./ButtonsProfession";
import GlobalStyle from "./GlobalStyle";
const InputMessage = ({
  setMessage,
  routes,
  navigation,
  route,
  placeholders,
  returns,
}) => {
  return (
    <View>
      {route.name === "createAcountEmailVerification" ||
      route.name === "createAcountFinish" ? (
        <View
          style={{
            top: Platform.OS =='android' && (route.name === "createAcountEmailVerification" || route.name === "createAcountFinish") ? -10 : Platform.OS == 'ios' && route.name === "createAcountEmailVerification"?10:30,
            marginLeft:
              route.name === "createAcountEmailVerification" ? 47 : 47,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate(returns)}>
            <Image style={styles.return} source={Return}></Image>
          </TouchableOpacity>
        </View>
      ) : route.name === "createAcountProfession" ? (
        <View style={styles.containerProfession}>
          <TouchableOpacity onPress={() => navigation.navigate(returns)}>
            <Image style={styles.return} source={Return}></Image>
          </TouchableOpacity>
          <ButtonsProfession routes={routes} navigation={navigation} />
        </View>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate(returns)}>
            <Image style={styles.return} source={Return}></Image>
          </TouchableOpacity>
          <SafeAreaView style={styles.containerInput}>
            <TextInput
              onChange={(e) => {
                setMessage(e.nativeEvent.text);
              }}
              style={[styles.input, GlobalStyle.globalStyle]}
              placeholder={placeholders}
              placeholderTextColor="rgba(35, 42, 48, 0.7)"
            ></TextInput>
            <TouchableOpacity onPress={() => navigation.navigate(routes)}>
              <Image style={styles.icon} source={Send}></Image>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      )}
    </View>
  );
};

export default InputMessage;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  containerEmailVerification: {
    marginLeft: 47,
  },
  containerProfession: {
    marginLeft: 47,
    display: "flex",
    bottom: 125,
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  containerInput: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginBottom: 33,
    width: 265,
    height: 51,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    left: 30,
  },
  input: {
    height: 51,
    width: 245,
    paddingHorizontal: 30,
    fontSize: 15,
  },
  icon: {
    marginLeft: -45,
    width: 24,
    height: 24,
  },
  return: {
    marginBottom: 33,
    right: 6,
  },
});
