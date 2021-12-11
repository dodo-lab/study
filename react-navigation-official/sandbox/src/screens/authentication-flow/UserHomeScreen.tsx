import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

type Props = NativeStackScreenProps<AuthenticationFlowStackParamList, 'UserHome'>;
const Screen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button title="Go to UserSettings" onPress={() => navigation.navigate('UserSettings')} />
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

export const UserHomeScreen: ScreenInstanceProps<AuthenticationFlowStackParamList, 'UserHome'> = {
  name: 'UserHome',
  component: Screen,
  options: {
    title: 'UserHome',
  },
};
