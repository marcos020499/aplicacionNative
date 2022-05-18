import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Splash from './src/pages/Splash'
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
export default function () {
  const [swipeEnabled, setSwipeEnabled] = useState(true);
  const Stack = createMaterialTopTabNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator
        
      >
        <Stack.Screen
          name="createAcountLastName"
          component={CreateAccountLastName}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
