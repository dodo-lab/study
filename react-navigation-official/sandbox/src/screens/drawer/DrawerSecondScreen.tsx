import {DrawerScreenProps} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

type Props = DrawerScreenProps<DrawerParamList, 'DrawerSecond'>;
const Screen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text h1>DrawerSecondScreen</Text>
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

export const DrawerSecondScreen: DrawerInstanceProps<DrawerParamList, 'DrawerSecond'> = {
  name: 'DrawerSecond',
  component: Screen,
  options: {
    title: 'DrawerSecond',
  },
};
