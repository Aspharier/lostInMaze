import React from "react";
import { StatusBar } from "react-native";
import Sudoku from "./components/sudo";
import Home from "./components/home";
import TicTacToe from "./components/tictactoe";
import Music from "./components/musicApp/music";
import MusicPlayback from "./components/musicApp/musicPlayback";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from "react-native-screens";

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#BA181B" />
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown : false,
          cardStyle : {backgroundColor : "#BA181B"},
          animation : "none",
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sudoku" component={Sudoku} />
        <Stack.Screen name="TicTacToe" component={TicTacToe} />
        <Stack.Screen name="Music" component={Music} />
        <Stack.Screen name="MusicPlayback" component={MusicPlayback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}