import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from 'screens';
import {DevSettings} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const Stack = createNativeStackNavigator();

export const RootStackNav: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    DevSettings.addMenuItem('Screen transition to Api', () => {
      navigation.navigate(Screens.ApiScreen.name);
    });
  }, [navigation]);

  return (
    <Stack.Navigator initialRouteName={Screens.TopScreen.name}>
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
      <Stack.Screen {...Screens.ComponentsScreen} />
      <Stack.Screen {...Screens.ActivityIndicatorScreen} />
      <Stack.Screen {...Screens.ModalScreen} />
      <Stack.Screen {...Screens.RefreshControlScreen} />
      <Stack.Screen {...Screens.ApiScreen} />
      <Stack.Screen {...Screens.AppStateScreen} />
    </Stack.Navigator>
  );
};
