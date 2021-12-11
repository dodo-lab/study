import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useUser} from 'contexts';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

type Props = NativeStackScreenProps<AuthenticationFlowStackParamList, 'SignIn'>;
const Screen: React.FC<Props> = () => {
  const {signIn} = useUser();

  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={signIn} />
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

export const SignInScreen: ScreenInstanceProps<AuthenticationFlowStackParamList, 'SignIn'> = {
  name: 'SignIn',
  component: Screen,
  options: {
    title: 'SignIn',
  },
};
