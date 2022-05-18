import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import Modal from "react-native-modal";
import GlobalStyle from "../GlobalStyle";
import ModalImage from "../../../assets/modal.png";
import { styles } from "./style";
import Bottom from "../../../assets/bottom.png";
import Header from "../Header";

const Modal1 = ({
  numberCommas,
  number,
  isModalVisible2,
  setModalVisible2,
  setModalVisible3,
}) => {
  return (
    <View style={styles.contMenu}>
      <Modal
        animationInTiming={1}
        swipeDirection="down"
        onSwipeComplete={() => {
          setModalVisible2(false),
            setTimeout(() => {
              setModalVisible3(true);
            }, 50);
        }}
        onSwipeCancel={() => {
          setModalVisible2(false),
            setTimeout(() => {
              setModalVisible3(true);
            }, 50);
        }}
        animationOutTiming={1}
        animationType="none"
        backdropOpacity={0}
        isVisible={isModalVisible2}
        style={styles.contentView}
      >
        <View style={[styles.header, {zIndex: 2}]}>
          <Header/>
        </View>
        <View style={[styles.infoPage, {zIndex: 1}]}>
          <View style={styles.animatedContainer}>
            <Animated.View
              style={[styles.animatedView, { width: number / 33333 }]}
            />
          </View>
          <Text style={[styles.numberInfoPage, GlobalStyle.bold]}>
            ${numberCommas}
          </Text>
          <Text style={[styles.loopInfoPage, GlobalStyle.extraBold]}>LOOP</Text>
        </View>
        <View style={[styles.content, GlobalStyle.globalStyle, { height: 96 }]}>
          <Image
            style={[styles.image, { bottom: 90 }]}
            source={ModalImage}
          ></Image>
          <View style={[styles.containerNameMenu, { bottom: 80 }]}>
            <Text style={[styles.textMenu, GlobalStyle.extraBold]}>MENÚ</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible2(false),
                  setTimeout(() => {
                    setModalVisible3(true);
                  }, 2);
              }}
            >
              <Image
                style={[
                  styles.imageBottom,
                  { transform: [{ rotate: "180deg" }] },
                ]}
                source={Bottom}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Modal1;
