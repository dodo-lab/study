import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

type Props = NativeStackScreenProps<DrawerParamList, 'DrawerFirst'>;
const Screen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text h1>DrawerFirstScreen</Text>
      <Button title="Go to Second" onPress={() => navigation.navigate('DrawerSecond')} />
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

export const DrawerFirstScreen: DrawerScreenProps<DrawerParamList, 'DrawerFirst'> = {
  name: 'DrawerFirst',
  component: Screen,
  options: {
    title: 'DrawerFirst',
  },
};
