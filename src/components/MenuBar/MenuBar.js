import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import "intl";
import "intl/locale-data/jsonp/en";
import { styles } from "./style";
const MenuBar = ({ navigation, route, visible }) => {
  let number = 7043000;
  internationalNumberFormat = new Intl.NumberFormat("en-US");
  const [isModalVisible3, setModalVisible3] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(
    route.name === "signOut"   ? true : false
  );
  const [isModalVisible4, setModalVisible4] = useState(false);

  const [isPress, setIsPress] = useState(false);
  const [isPress2, setIsPress2] = useState(false);
  const [isPress3, setIsPress3] = useState(false);
  const touchProps = {
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => {
      setModalVisible3(false),
        setModalVisible2(false),
        setModalVisible4(false)
    },
  };
  const touchProps2 = {
    onHideUnderlay: () => setIsPress2(false),
    onShowUnderlay: () => setIsPress2(true),
    onPress: () => {
      setModalVisible3(false),
        setTimeout(() => {
          setModalVisible4(true);
        }, 200);
    },
  };
  const touchProps3 = {
    onHideUnderlay: () => setIsPress3(false),
    onShowUnderlay: () => setIsPress3(true),
    onPress: () => {
      setModalVisible3(false),
        setModalVisible2(false),
        setModalVisible4(false)
      navigation.navigate("share")}
  };

  return (
    <View style={styles.contMenu}>
      <Modal1
        route={route}
        isModalVisible2={isModalVisible2}
        setModalVisible3={setModalVisible3}
        setModalVisible2={setModalVisible2}
        number={number}
        numberCommas={internationalNumberFormat.format(number)}
      />
      <Modal2
        numberCommas={internationalNumberFormat.format(number)}
        isModalVisible3={isModalVisible3}
        navigation={navigation}
        setModalVisible3={setModalVisible3}
        setModalVisible2={setModalVisible2}
        setModalVisible4={setModalVisible4}
        isPress={isPress}
        number={number}
        isPress2={isPress2}
        isPress3={isPress3}
        touchProps={touchProps}
        touchProps2={touchProps2}
        touchProps3={touchProps3}
      />
      <Modal3
        isModalVisible4={isModalVisible4}
        navigation={navigation}
        setModalVisible3={setModalVisible3}
        setModalVisible4={setModalVisible4}
        isPress={isPress}
        isPress2={isPress2}
        isPress3={isPress3}
        touchProps={touchProps}
        touchProps2={touchProps2}
        touchProps3={touchProps3}
      />
    </View>
  );
};
export default MenuBar;
