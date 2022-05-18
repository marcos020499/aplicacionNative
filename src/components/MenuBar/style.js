import React, { useState } from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //HEADER
  header: {
    position: "absolute",
    top: 50,
  },
  //INFOPAGE
  infoPage: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  numberInfoPage: {
    fontSize: 40,
    paddingVertical: 16,
    textAlign: "center",
  },
  loopInfoPage: {
    color: "white",
    textAlign: "center",
    fontSize: 13,
  },
  //ANIMATED
  animatedView: {
    height: 13,
    borderRadius: 1,
    backgroundColor: "white",
    borderBottomLeftRadius:16,
    borderTopLeftRadius: 16,
    marginLeft: 11
  },
  animatedContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderColor: "black",
    width: 300,
    height: 29,
    borderRadius: 16,
    borderWidth: 1,
  },

  text: {
    fontSize: 13,
    color: "white",
    letterSpacing: 4,
    textAlign: "center",
  },

  content: {
    backgroundColor: "#232A2F",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  contentView: {
    justifyContent: "flex-end",
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
  button: {
    width: "107%",
    height: 98,
    backgroundColor: "#232A2F",
    borderWidth: 2,
    borderRadius: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  containerMenu: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignContent: "flex-end",
    justifyContent: "space-between",
  },
  image: {
    position: "relative",
    bottom: 147,
    width: 114,
    height: 152,
    alignSelf: "center",
  },
  imageBottom: {
    width: 13,
    height: 20,
    left: 50,
  },
  containerNameMenu: {
    position: "relative",
    bottom: 125,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignSelf: "center",
  },
  textMenu: {
    position: "relative",
    right: "32%",
    fontSize: 13,
    color: "#FFFF",
    fontWeight: "bold",
    letterSpacing: 6,
  },
  textDetalles: {
    alignSelf: "center",
    fontSize: 13,
    color: "#FFFF",
    fontWeight: "bold",
    letterSpacing: 6,
  },
  containerButtonMenu: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    position: "relative",
    bottom: 75,
  },
  imageChild: {
    width: 71,
    height: 44,
    borderRadius: 6,
  },
  textButton: {
    marginTop: 6,
    color: "#FFFF",
    textAlign: "center",
  },
  textButtonSelected: {
    marginTop: 6,
    color: "#FF7C66",
    textAlign: "center",
  },
  //third modal
  containetTitleDetails: {
    position: "relative",
    bottom: 20,
  },
  detail: {
    width: "48%",
    height: 74,
    borderColor: "#959494",
    borderWidth: 1,
    borderRadius: 15,
  },
  containerDetails: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  number: {
    color: "#FF7C66",
    textAlign: "center",
    fontSize: 25,
    marginTop: 14,
  },
  description: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
  },
});
