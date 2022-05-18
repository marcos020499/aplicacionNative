import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import vector from "../../assets/Vector-6.png";
const BlackDinamicPassword = ({ chatResponse }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={vector}/>
      <TextInput style={styles.input} value={chatResponse} />
    </View>
  );
};

export default BlackDinamicPassword;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 85,
    height: 48,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: "black",
    //text
    fontSize: 15,
    color: "#FF7C66",
    textAlign: "center",
  },
  image: {
    marginRight: 17
  }
});
