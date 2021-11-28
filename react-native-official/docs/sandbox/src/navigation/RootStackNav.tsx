import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from 'screens';

const Stack = createNativeStackNavigator();

export const RootStackNav: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Top">
      <Stack.Screen {...Screens.TopScreen} />
      <Stack.Screen {...Screens.BasicScreen} />
      <Stack.Screen {...Screens.TouchablesScreen} />
      <Stack.Screen {...Screens.AnimationsScreen} />
      <Stack.Screen {...Screens.SimpleAnimationScreen} />
      <Stack.Screen {...Screens.ScrollViewAnimationScreen} />
      <Stack.Screen {...Screens.PanResponderAnimationScreen} />
      <Stack.Screen {...Screens.LayoutAnimationScreen} />
      <Stack.Screen {...Screens.GestureResponderScreen} />
      <Stack.Screen {...Screens.HermesConfirmScreen} />
      <Stack.Screen {...Screens.NativeModuleScreen} />
      <Stack.Screen {...Screens.NativeUIScreen} />
    </Stack.Navigator>
  );
};
