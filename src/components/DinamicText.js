import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import GlobalStyle from "./GlobalStyle";

const DinamicText = ({ chatQuestion }) => {
  return (
    <View>
      <TextInput
        style={[styles.input, GlobalStyle.globalStyle]}
        value={chatQuestion}
      />
    </View>
  );
};

export default DinamicText;
const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "rgba(35, 42, 47, 0.2)",
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
    //text
    fontSize: 15,
    color: "rgba(35, 42, 48, 0.3)",
  },
});
