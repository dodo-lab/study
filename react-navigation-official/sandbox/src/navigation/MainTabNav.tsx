import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import * as Screens from 'screens';

const Tab = createBottomTabNavigator<MainTabParamList>();

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabNav'>;
const Navigation: React.FC<Props> = ({route}) => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen {...Screens.NewsScreen} />
      <Tab.Screen {...Screens.SettingsScreen} />
    </Tab.Navigator>
  );
};

export const MainTabNav: ScreenInstanceConfig<RootStackParamList, 'MainTabNav'> = {
  name: 'MainTabNav',
  component: Navigation,
  options: {
    headerShown: false,
  },
};
