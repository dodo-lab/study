import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

const Screen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text h1>GestureResponderScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const GestureResponderScreen = {
  name: 'GestureResponder',
  component: Screen,
  options: {
    title: 'GestureResponder',
  },
};
