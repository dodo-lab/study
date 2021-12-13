// Without 'react-native-gesture-handler' import, the app may crash in production even if it works fine in development.
// https://reactnavigation.org/docs/drawer-navigator#:~:text=Copy-,Note,-%3A%20If%20you%20are
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {WithUser} from 'contexts';
import {WithInitialize} from 'contexts/InitializeContext';
import {useNavigationState} from 'hooks';
import {RootStackNav} from 'navigation/RootStackNav';
import React from 'react';
import {ActivityIndicator} from 'react-native';

export default function App() {
  const [isReady, navigationContainerProps] = useNavigationState();

  if (!isReady) {
    return <ActivityIndicator color="blue" />;
  }

  return (
    <WithInitialize>
      <WithUser>
        <NavigationContainer {...navigationContainerProps}>
          <RootStackNav />
        </NavigationContainer>
      </WithUser>
    </WithInitialize>
  );
}
