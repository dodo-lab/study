import {NavigationContainer} from '@react-navigation/native';
import {RootStackNav} from 'navigation/RootStackNav';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNav />
    </NavigationContainer>
  );
}
