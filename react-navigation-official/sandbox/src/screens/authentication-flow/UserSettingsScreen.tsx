import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useUser} from 'contexts';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

type Props = NativeStackScreenProps<AuthenticationFlowStackParamList, 'UserSettings'>;
const Screen: React.FC<Props> = () => {
  const {signOut} = useUser();

  return (
    <View style={styles.container}>
      <Button title="Sign out" onPress={signOut} />
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

export const UserSettingsScreen: ScreenInstanceConfig<AuthenticationFlowStackParamList, 'UserSettings'> = {
  name: 'UserSettings',
  component: Screen,
  options: {
    title: 'UserSettings',
  },
};
