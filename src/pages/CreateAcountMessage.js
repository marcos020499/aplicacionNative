import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import Image1 from "../../assets/Rectangle.png";
import Image2 from "../../assets/Group68.png";
import Container from "../components/Container";
import GlobalStyle from "../components/GlobalStyle";

const CreateAccountMessage = ({ navigation }) => {
  const GEORGE = "{GEORGE}";
  return (
    <Container>
      <View styles={styles.imageContainer}>
        <Image style={styles.imageSombra} source={Image1}></Image>
        <Image style={styles.imagePersonaje} source={Image2}></Image>
      </View>
      <Text style={[styles.text, GlobalStyle.bold]}>
        HOLA! -QUE GUSTO SABER DE TU INTERES POR FORMAR UNA SOCIEDAD CON{" "}
        <Text style={[
          styles.george,
          GlobalStyle.extraBold
        ]}>{GEORGE}</Text>:
      </Text>
      <Text style={[styles.text, GlobalStyle.globalStyle]}>
        PARA ELLO, NECESITO TE REGISTRES EN NUESTRA wDAO
      </Text>
    </Container>
  );
};

export default CreateAccountMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF7C66",
    height: "100%",
  },
  imageContainer: {
    display: "flex",
    flex: 1,
  },
  imageSombra: {
    width: 104,
    height: 71,
    marginTop: 160,
  },
  imagePersonaje: {
    width: 80,
    height: 104,
    marginTop: 128,
    marginLeft: 20,
    position: "absolute",
  },
  text: {
    lineHeight: 16,
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 6,
    marginTop: 26,
  },
  george: {
    color: "white",
    fontSize: 13,
    fontWeight: "800",
  },
});
