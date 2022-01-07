import {Ionicons} from '@expo/vector-icons';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

type Props = BottomTabScreenProps<MainTabParamList, 'Settings'>;
const Screen: React.FC<Props> = ({route}) => {
  return (
    <View style={styles.container}>
      <Text h1>SettingsScreen</Text>
      <Text h4>{route.params.userId}</Text>
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

export const SettingsScreen: TabInstanceConfig<MainTabParamList, 'Settings'> = {
  name: 'Settings',
  component: Screen,
  options: {
    title: 'Settings',
    tabBarIcon: ({color}) => <Ionicons name="md-settings-outline" size={24} color={color} />,
  },
  initialParams: {userId: '001'},
};
