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
