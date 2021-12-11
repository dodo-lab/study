import {NavigationContainer} from '@react-navigation/native';
import {WithUser} from 'contexts';
import {RootStackNav} from 'navigation/RootStackNav';
import React from 'react';

export default function App() {
  return (
    <WithUser>
      <NavigationContainer>
        <RootStackNav />
      </NavigationContainer>
    </WithUser>
  );
}
