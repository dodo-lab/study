import CalendarModule, {DEFAULT_EVENT_NAME} from 'native/CalendarModule';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

const Screen: React.FC = () => {
  const handlePress = () => {
    // Android Studio の Logcatに出力される
    CalendarModule.createCalendarEvent('testName', 'testLocation', eventId =>
      console.log(`Created a new event with id ${eventId}`),
    );
  };

  return (
    <View style={styles.container}>
      <Button title="invoke native module!" onPress={handlePress} />
      <Text h3>{DEFAULT_EVENT_NAME}</Text>
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
