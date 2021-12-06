import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import * as Screens from 'screens';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const Navigation: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen {...Screens.SettingsScreen} />
      <Tab.Screen {...Screens.NewsScreen} />
    </Tab.Navigator>
  );
};

export const MainTabNavigation: ScreenProps<'MainTabNav'> = {
  name: 'MainTabNav',
  component: Navigation,
  options: {
    headerShown: false,
  },
};
