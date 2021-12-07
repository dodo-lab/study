import {Ionicons} from '@expo/vector-icons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

type Props = NativeStackScreenProps<MainTabParamList, 'Settings'>;
const Screen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text h1>SettingsScreen</Text>
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

export const SettingsScreen: TabScreenProps<MainTabParamList, 'Settings'> = {
  name: 'Settings',
  component: Screen,
  options: {
    title: 'Settings',
    tabBarIcon: ({color}) => <Ionicons name="md-settings-outline" size={24} color={color} />,
  },
};
