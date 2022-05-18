import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

const BlackDinamicText = ({ chatResponse }) => {
  return (
    <View>
      <TextInput style={styles.input} value={chatResponse} />
    </View>
  );
};

export default BlackDinamicText;

const styles = StyleSheet.create({
  input: {
    width: 184,
    height: 63,
    borderBottomLeftRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: "black",
    //text
    fontSize: 15,
    color: "#FF7C66",
    textAlign: "center",
  },
});
