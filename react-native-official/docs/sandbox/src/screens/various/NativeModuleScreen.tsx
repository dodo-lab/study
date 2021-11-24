import React from 'react';
import {NativeModules, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

const Screen: React.FC = () => {
  const {CalenderModule} = NativeModules;

  const handlePress = () => {
    // Android Studio の Logcatに出力される
    CalenderModule.createCalenderEvent('testName', 'testLocation');
  };

  return (
    <View style={styles.container}>
      <Button title="invoke native module!" onPress={handlePress} />
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

export const NativeModuleScreen: ScreenProps = {
  name: 'NativeModule',
  component: Screen,
  options: {
    title: 'NativeModule',
  },
};
