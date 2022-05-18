import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import vector7 from "../../assets/Vector-7.png";
import Modal from "react-native-modal";
import GlobalStyle from "./GlobalStyle";
const Header = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.containerHeader}>
      <View style={styles.containerLeft}>
        <Image
          style={styles.image}
          source={require("../../assets/EON-logoblack2-2.png")}
        />
        <Text style={[styles.text, GlobalStyle.globalStyle]}>George</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setTimeout(() => {
            setModalVisible(true);
          }, 100);
        }}
      >
        <Image style={styles.VectorImage} source={vector7} />
      </TouchableOpacity>
      <Modal
        backdropOpacity={0.1}
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.contentView}
      >
        <View style={[styles.content, GlobalStyle.globalStyle]}>
          <Text style={[styles.modalText, GlobalStyle.extraBold]}>
            ¿REALMENTE QUIERES CERRAR SESIÓN?
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.touchables}>
              <Text style={[styles.textTouch, GlobalStyle.globalStyle]}>
                SI
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.touchablesRight}
            >
              <Text style={[styles.textTouch, GlobalStyle.globalStyle]}>
                NO
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  containerHeader: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  containerLeft: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: 65,
    height: 28,
  },
  VectorImage: {
    right: 160,
    width: 34,
    height: 26,
  },

  text: {
    fontSize: 17,
    fontWeight: "700",
  },
  content: {
    backgroundColor: "#232A2F",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  contentView: {
    justifyContent: "center",
    margin: 0,
    width: "82%",
    alignContent: "center",
    display: "flex",
    alignSelf: "center",
  },
  modalText: {
    paddingTop: 38,
    color: "white",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    paddingHorizontal: 6,
    paddingVertical: 32,
    letterSpacing: 5,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
  },
  touchablesRight: {
    borderColor: "rgba(196, 196, 196, 0.3)",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    paddingHorizontal: 42,
    paddingTop: 22,
    width: "60%",
    height: "155%",
  },
  touchables: {
    borderColor: "rgba(196, 196, 196, 0.3)",
    borderTopWidth: 1,
    paddingHorizontal: 42,
    paddingTop: 22,
    width: "60%",
  },
  textTouch: {
    color: "#FF7C66",
    fontSize: 13,
    textAlign: "center",
  },
});
