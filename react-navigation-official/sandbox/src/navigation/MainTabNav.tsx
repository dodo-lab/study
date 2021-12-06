import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import * as Screens from 'screens';

const Tab = createBottomTabNavigator<RootStackParamList>();

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabNav'>;
export const Navigation: React.FC<Props> = ({route}) => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName={route.params?.screen}>
      <Tab.Screen {...Screens.NewsScreen} />
      <Tab.Screen {...Screens.SettingsScreen} />
    </Tab.Navigator>
  );
};

export const MainTabNav: ScreenProps<'MainTabNav'> = {
  name: 'MainTabNav',
  component: Navigation,
  options: {
    headerShown: false,
  },
};
