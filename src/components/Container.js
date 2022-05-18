import React from "react";
import { StyleSheet, View, Platform } from "react-native";

const Container = ({ children }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FF7C66",
      padding: "12%",
    },
  });
  return <View style={styles.container}>{children}</View>;
};
export default Container;
