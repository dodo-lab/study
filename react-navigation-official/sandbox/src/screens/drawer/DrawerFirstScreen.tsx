import {DrawerScreenProps, useDrawerStatus} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

type Props = DrawerScreenProps<DrawerParamList, 'DrawerFirst'>;
const Screen: React.FC<Props> = ({navigation}) => {
  const isDrawerOpen = useDrawerStatus() === 'open';

  return (
    <View style={styles.container}>
      <Text h1>DrawerFirstScreen</Text>
      <Button title="Go to Second" onPress={() => navigation.navigate('DrawerSecond')} />
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Text style={styles.drawerStatus} h4>
        drawer status : {isDrawerOpen ? 'open' : 'close'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  drawerStatus: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
});

export const DrawerFirstScreen: DrawerInstanceProps<DrawerParamList, 'DrawerFirst'> = {
  name: 'DrawerFirst',
  component: Screen,
  options: {
    title: 'DrawerFirst',
  },
};
