import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNav} from 'navigation/RootStackNav';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNav />
    </NavigationContainer>
  );
}
