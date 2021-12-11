import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import * as Screens from 'screens/authentication-flow';

const Stack = createNativeStackNavigator<AuthenticationFlowStackParamList>();

type Props = NativeStackScreenProps<RootStackParamList, 'AuthenticationFlowNav'>;
const Navigation: React.FC<Props> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen {...Screens.SignInScreen} />
      <Stack.Screen {...Screens.UserHomeScreen} />
      <Stack.Screen {...Screens.UserSettingsScreen} />
    </Stack.Navigator>
  );
};

export const AuthenticationFlowNav: ScreenInstanceProps<RootStackParamList, 'AuthenticationFlowNav'> = {
  name: 'AuthenticationFlowNav',
  component: Navigation,
  options: {
    headerShown: false,
  },
};
