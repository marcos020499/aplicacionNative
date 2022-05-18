import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Container from "../components/Container";
import MenuBar from "../components/MenuBar/MenuBar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getDataAsync, postDataAsync } from "../redux/redux";
import GlobalStyle from "../components/GlobalStyle";
const SignOut = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getDataAsync());
  }, [dispatch]);
  
  console.log('actor', data)
  return (
    <Container style={[GlobalStyle.globalStyle]}>
      {/*<MenuBar  navigation={navigation} route={route}/>*/}
      {
        data?.map((user)=>(
          <View>
            <Text style={{fontSize: 12}}>
              {user.name}
            </Text>
            <TouchableOpacity onPress={()=> dispatch(postDataAsync('alejandro'))}>
              <Text> hello </Text>
            </TouchableOpacity>
          </View>
        ))
      }
    </Container>
  );
};
export default SignOut;
const styles = StyleSheet.create({
  containerHeader: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: 65,
    height: 28,
  },
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 37,
    borderTopLeftRadius: 37,
  },
  contentTitle: {
    fontSize: 18,
    color: "gray",
    paddingTop: 25,
    marginBottom: 12,
    fontWeight: "700",
  },
  contentView: {
    justifyContent: "flex-end",
    margin: 0,
  },
});
