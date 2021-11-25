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

  const handlePressPromise = async () => {
    const name = 'testName'; // ★'error'で、エラーケースを確認可能

    try {
      const eventId = await CalendarModule.createCalendarEventPromise(name, 'testLocation');
      console.log(`Created a new event with id ${eventId}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="invoke native module!" onPress={handlePress} />
      <Button title="invoke native module(Promise)!" onPress={handlePressPromise} />
      <Text h3>{DEFAULT_EVENT_NAME}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export const NativeModuleScreen: ScreenProps = {
  name: 'NativeModule',
  component: Screen,
  options: {
    title: 'NativeModule',
  },
};
