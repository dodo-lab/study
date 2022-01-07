import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import {useUser} from 'contexts';
import React from 'react';
import * as Screens from 'screens/authentication-flow';

const Stack = createNativeStackNavigator<AuthenticationFlowStackParamList>();

type Props = NativeStackScreenProps<RootStackParamList, 'AuthenticationFlowNav'>;
const Navigation: React.FC<Props> = () => {
  const {isSignedIn} = useUser();

  return (
    <Stack.Navigator>
      {isSignedIn() ? (
        <>
          <Stack.Screen {...Screens.UserHomeScreen} />
          <Stack.Screen {...Screens.UserSettingsScreen} />
        </>
      ) : (
        <Stack.Screen {...Screens.SignInScreen} />
      )}
    </Stack.Navigator>
  );
};

export const AuthenticationFlowNav: ScreenInstanceConfig<RootStackParamList, 'AuthenticationFlowNav'> = {
  name: 'AuthenticationFlowNav',
  component: Navigation,
  options: {
    headerShown: false,
  },
};
