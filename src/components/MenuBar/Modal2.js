import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Animated,
} from "react-native";
import Modal from "react-native-modal";
import { styles } from "./style";
import GlobalStyle from "../GlobalStyle";
import ModalImage from "../../../assets/modal.png";
import Products from "../../../assets/products.png";
import Contact from "../../../assets/contact.png";
import Invite from "../../../assets/invite.png";
import Bottom from "../../../assets/bottom.png";
import Header from "../Header";
const Modal2 = ({
  isModalVisible3,
  setModalVisible2,
  setModalVisible3,
  setModalVisible4,
  isPress,
  isPress2,
  isPress3,
  touchProps,
  touchProps2,
  touchProps3,
  number,
  numberCommas,
}) => {
  return (
    <View style={styles.contMenu}>
      <Modal
        animationInTiming={1}
        swipeDirection="down"
        onSwipeComplete={() => {
          setModalVisible3(false),
            setTimeout(() => {
              setModalVisible2(true);
            }, 50);
        }}
        onSwipeCancel={() => {
          setModalVisible3(false),
            setTimeout(() => {
              setModalVisible4(true);
            }, 50);
        }}
        animationOutTiming={1}
        animationType="none"
        backdropOpacity={0}
        isVisible={isModalVisible3}
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
        <View style={[styles.content, GlobalStyle.globalStyle]}>
          <Image
            style={[styles.image, styles.imagePosition]}
            source={ModalImage}
          ></Image>
          <View>
            <View style={styles.containerNameMenu}>
              <Text style={[styles.textMenu, GlobalStyle.extraBold]}>MENÚ</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible3(false),
                    setTimeout(() => {
                      setModalVisible2(true);
                    }, 2);
                }}
              >
                <Image style={styles.imageBottom} source={Bottom}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.containerButtonMenu}>
              <TouchableHighlight
                activeOpacity={8}
                underlayColor="transparent"
                {...touchProps}
              >
                <View>
                  <Image
                    style={[
                      styles.imageChild,
                      { backgroundColor: isPress ? "#FF7C66" : "transparent" },
                    ]}
                    source={Products}
                  />
                  <Text
                    style={
                      isPress ? styles.textButtonSelected : styles.textButton
                    }
                  >
                    Tablero
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                activeOpacity={8}
                underlayColor="transparent"
                {...touchProps2}
              >
                <View>
                  <Image
                    style={[
                      styles.imageChild,
                      { backgroundColor: isPress2 ? "#FF7C66" : "transparent" },
                    ]}
                    source={Contact}
                  ></Image>
                  <Text
                    style={
                      isPress2 ? styles.textButtonSelected : styles.textButton
                    }
                  >
                    Contactos
                  </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                activeOpacity={8}
                underlayColor="transparent"
                {...touchProps3}
              >
                <View>
                  <Image
                    style={[
                      styles.imageChild,
                      { backgroundColor: isPress3 ? "#FF7C66" : "transparent" },
                    ]}
                    source={Invite}
                  ></Image>
                  <Text
                    style={
                      isPress3 ? styles.textButtonSelected : styles.textButton
                    }
                  >
                    Invitar
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Modal2;
