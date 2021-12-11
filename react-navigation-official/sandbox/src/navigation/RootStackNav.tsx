import {Ionicons} from '@expo/vector-icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import * as Screens from 'screens';

import {AuthenticationFlowNav} from './AuthenticationFlowStackNav';
import {DrawerNav} from './DrawerNav';
import {MainTabNav} from './MainTabNav';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNav: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Top" screenOptions={{headerTitleAlign: 'center', animation: 'slide_from_right'}}>
      <Stack.Group>
        <Stack.Screen {...Screens.TopScreen} />
        <Stack.Screen {...Screens.HomeScreen} />
        <Stack.Screen {...Screens.DetailsScreen} />
        <Stack.Screen {...Screens.LogoHeaderScreen} />
        <Stack.Screen {...Screens.PlacingHeaderButtonScreen} />
        <Stack.Screen {...MainTabNav} />
        <Stack.Screen {...DrawerNav} />
        <Stack.Screen {...AuthenticationFlowNav} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal', animation: 'slide_from_bottom'}}>
        <Stack.Screen {...Screens.ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
