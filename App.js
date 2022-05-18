import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Splash from "./src/pages/Splash";
import Onboarding1 from "./src/pages/Onboarding1";
import Onboarding2 from "./src/pages/Onboarding2";
import Onboarding3 from "./src/pages/Onboarding3";
import Login from "./src/pages/Login";
import CreateAccountMessage from "./src/pages/CreateAcountMessage";
import CreateAccountName from "./src/pages/CreateAccountName";
import CreateAccountLastName from "./src/pages/CreateAccountLastName";
import CreateAccountPassword from "./src/pages/CreateAccountPassword";
import CreateAccountEmail from "./src/pages/CreateAccountSendText";
import CreateAccountEmailVerification from "./src/pages/CreateAccountEmailVerification";
import CreateAccountSendEmail from "./src/pages/CreateAccountSendEmail";
import CreateAccountSendText from "./src/pages/CreateAccountSendText";
import CreateAccountTextVerification from "./src/pages/CreateAccountTextVerificate";
import CreateAccountProfession from "./src/pages/CreateAccountProfession";
import CreateAccountFinish from "./src/pages/CreateAccountFinish";
import Welcome from "./src/pages/Welcome";
import SignOut from "./src/pages/SignOut";
import Ups from "./src/pages/Ups";
import ShareQR from "./src/pages/ShareQR";
export default function () {
  const [swipeEnabled, setSwipeEnabled] = useState(true);
  const Stack = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="signOut"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 0,
            backgroundColor: "transparent",
            marginTop: -20,
            
          },
        }}
      >
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{ headerShown: false,}}
          
        />
        <Stack.Screen
          name="o1"
          component={Onboarding1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="o2"
          component={Onboarding2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="o3"
          component={Onboarding3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createAcount"
          component={CreateAccountMessage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createAcountName"
          component={CreateAccountName}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createAcountLastName"
          component={CreateAccountLastName}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createAcountSendEmail"
          component={CreateAccountSendEmail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createAcountEmailVerification"
          component={CreateAccountEmailVerification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createAcountSendText"
          component={CreateAccountSendText}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createAcountTextVerification"
          component={CreateAccountTextVerification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createAcountPassword"
          component={CreateAccountPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createAcountProfession"
          component={CreateAccountProfession}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createAcountFinish"
          component={CreateAccountFinish}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signOut"
          component={SignOut}
          options={{ headerShown: false }}
          
        />
        <Stack.Screen
          name="Ups"
          component={Ups}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="share"
          component={ShareQR}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
