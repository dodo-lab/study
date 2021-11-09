import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native';
import {TopScreen} from 'screens';

const Stack = createNativeStackNavigator();

const HomeScreen: React.FC = () => {
  return <Text>Home Screen</Text>;
};

export const RootStackNav: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Top">
      <Stack.Screen name="Top" component={TopScreen} options={{title: 'Top'}} />
      <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}} />
    </Stack.Navigator>
  );
};
