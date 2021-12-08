import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import * as Screens from 'screens/drawer';

const Drawer = createDrawerNavigator<DrawerParamList>();

const Navigation: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen {...Screens.DrawerFirstScreen} />
      <Drawer.Screen {...Screens.DrawerSecondScreen} />
    </Drawer.Navigator>
  );
};

export const DrawerNav: ScreenProps<RootStackParamList, 'DrawerNav'> = {
  name: 'DrawerNav',
  component: Navigation,
  options: {
    headerShown: false,
  },
};
