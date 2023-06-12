import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";
import DashboardScreen from "./screens/DashboardScreen";
import Physics from "./screens/Physics";
import Motion from "./PhysicsNotes/Motion";
import Matter from "../ChemistryNotes/Matter";
import Fundamental from "../BiologyNotes/Fundamental";
import Chemistry from "../screens/Chemistry";
import Biology from "../screens/Biology";

const Stack = createStackNavigator();

export default class AppStackNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DashBoardScreen">
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
          <Stack.Screen name="Physics" component={Physics} />
          <Stack.Screen name="Motion" component={Motion} />
          <Stack.Screen name="Matter" component={Matter}/>
          <Stack.Screen name="Fundamental" component={Fundamental}/>
          <Stack.Screen name="Chemistry" component={Chemistry}/>
          <Stack.Screen name="Biology" component={Biology}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
