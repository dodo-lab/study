import {Entypo} from '@expo/vector-icons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

type Props = NativeStackScreenProps<MainTabParamList, 'News'>;
const Screen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text h1>NewsScreen</Text>
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

export const NewsScreen: TabScreenProps<MainTabParamList, 'News'> = {
  name: 'News',
  component: Screen,
  options: {
    title: 'News',
    tabBarIcon: ({color}) => <Entypo name="news" size={24} color={color} />,
  },
};
