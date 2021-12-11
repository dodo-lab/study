import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useUser} from 'contexts';
import {useInput} from 'hooks/useInput';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from 'react-native-elements';

type Props = NativeStackScreenProps<AuthenticationFlowStackParamList, 'SignIn'>;
const Screen: React.FC<Props> = () => {
  const [userId, userIdProps] = useInput('');
  const {signIn} = useUser();

  const handlePress = () => {
    if (userId === '') {
      alert('IDを入力してください');
      return;
    }

    signIn(userId);
  };

  return (
    <View style={styles.container}>
      <Input {...userIdProps} placeholder="User Id" />
      <Button title="Sign in" onPress={handlePress} />
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
