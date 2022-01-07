import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'Modal'>;
const Screen: React.FC<Props> = ({route}) => {
  return (
    <View style={styles.container}>
      <Text h1>ModalScreen</Text>
      <Text h4>message : {route.params.message}</Text>
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

export const ModalScreen: ScreenInstanceConfig<RootStackParamList, 'Modal'> = {
  name: 'Modal',
  component: Screen,
  options: {
    title: 'Modal',
  },
};
