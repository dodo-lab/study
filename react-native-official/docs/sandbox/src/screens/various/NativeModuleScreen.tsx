import CalendarModule from 'native/CalendarModule';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

const Screen: React.FC = () => {
  const handlePress = () => {
    // Android Studio の Logcatに出力される
    CalendarModule.createCalendarEvent('testName', 'testLocation');
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
