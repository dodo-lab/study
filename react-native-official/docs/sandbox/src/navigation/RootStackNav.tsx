import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';
import {BasicScreen, TopScreen, TouchablesScreen, AnimationScreen} from 'screens';

const Stack = createNativeStackNavigator();

export const RootStackNav: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Top">
      <Stack.Screen {...TopScreen} />
      <Stack.Screen {...BasicScreen} />
      <Stack.Screen {...TouchablesScreen} />
      <Stack.Screen {...AnimationScreen} />
    </Stack.Navigator>
  );
};
