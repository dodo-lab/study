import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

type Props = NativeStackScreenProps<AuthenticationFlowStackParamList, 'UserSettings'>;
const Screen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text h1>UserSettingsScreen</Text>
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

export const UserSettingsScreen: ScreenInstanceProps<AuthenticationFlowStackParamList, 'UserSettings'> = {
  name: 'UserSettings',
  component: Screen,
  options: {
    title: 'UserSettings',
  },
};
