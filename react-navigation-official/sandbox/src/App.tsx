import {NavigationContainer} from '@react-navigation/native';
import {WithUser} from 'contexts';
import {WithInitialize} from 'contexts/InitializeContext';
import {RootStackNav} from 'navigation/RootStackNav';
import React from 'react';

export default function App() {
  return (
    <WithInitialize>
      <WithUser>
        <NavigationContainer>
          <RootStackNav />
        </NavigationContainer>
      </WithUser>
    </WithInitialize>
  );
}
