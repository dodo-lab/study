import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import * as Screens from 'screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign: 'center'}}>
      {/* TODO: mapで一括制御したい */}
      <Stack.Screen {...Screens.HomeScreen} />
      <Stack.Screen {...Screens.DetailsScreen} />
      <Stack.Screen {...Screens.LogoHeaderScreen} />
      <Stack.Screen {...Screens.PlacingHeaderButtonScreen} />
    </Stack.Navigator>
  );
};
